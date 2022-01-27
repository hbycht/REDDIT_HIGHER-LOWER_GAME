/// <reference path="../TSDef/p5.global-mode.d.ts" />

let dataMin = 1;
let dataMax;

// list of all subreddits
let subreddits = [];

// Current index of subreddit in list
let currentSubredditIndex;

// Current loading status
let isLoadingComments = false;
let currentLoadingIndex = 0;

function loadSubreddit(subreddit){
    // Duplicate check all names
    let tempNames = [];
    subreddits.forEach(sub => {
        tempNames.push(sub.name.toLowerCase());
    });

    if(!tempNames.includes(subreddit.toLowerCase()))
        // Call Reddit .json
        loadJSON('https://www.reddit.com/r/'+ subreddit +'/top/.json?t=all', formatPosts, logError);
}

function loadComments(subredditIndex, postIndex) {

    isLoadingComments = true;

    // Load comments of current post
    let currentPost = subreddits[subredditIndex].posts[postIndex];

    loadJSON(currentPost.url + ".json?sort=top", formatComments, logError);
}

// Pull out & format the important data 
function formatPosts(d){

    if(d.data.children.length > 0) {
        // Add another subreddit-placeholder to list
        subreddits.push({
            "name": "",
            "numFollows": 0,
            "posts": [],
            "comments": [],
            "commentsLoaded": false,
        });

        // Get current index of subreddit in list
        currentSubredditIndex = subreddits.length - 1;


        // Squeezing data out of subreddit
        subreddits[currentSubredditIndex].name = d.data.children[0].data.subreddit;
        subreddits[currentSubredditIndex].numFollows = d.data.children[0].data.subreddit_subscribers;

        // Push important post data into an array
        for (let i = 0; i < d.data.children.length; i++) {
            subreddits[currentSubredditIndex].posts.push({
                "id": i,
                "title": d.data.children[i].data.title,
                "url": "https://www.reddit.com/" + d.data.children[i].data.permalink,
                "ups": d.data.children[i].data.ups,
                "numComments": d.data.children[i].data.num_comments,
            });
        }

        // Find data range (min & max)
        let tempData = [];
        subreddits.forEach(sub => {
            sub.posts.forEach(post => {
                tempData.push(post.ups);
            });
        });
        dataMax = max(tempData);

        console.log("New subreddit loaded.");

    } else {
        console.log("Could not load subreddit or comments...");
    }
}

// Pull out & format the important data
function formatComments(d){

    let commentPath = d[1].data.children;

    if(commentPath.length > 0) {
        // Push comments into list
        for (let i = 0; i < commentPath.length - 1; i++) {
            subreddits[currentSubredditIndex].comments.push(commentPath[i].data.body);

            // console.log(commentPath[i].data.body);
        }
        console.log(subreddits[currentSubredditIndex].comments);

        console.log("--------------------\n| Comments loaded. |\n--------------------");

    } else {
        console.log("Post has no comments...");
    }

    subreddits[currentSubredditIndex].commentsLoaded = true;
    isLoadingComments = false;
    currentLoadingIndex++;
}

// if request failed
function logError() {
    console.log("Subreddit or post doesn't exist.");
}