/// <reference path="../TSDef/p5.global-mode.d.ts" />

// list of subreddit names
let listOfSubredditNames = [
    "askReddit",
    // "AMA",
    // "askWomen",
    // "askScience",
    // "lotr",
    // "biology",
    // "Awwducational",
    // "physics",
    // "chemistry",
    // "nasa",
    // "spacex",
    // "space",
    // "jobs",
    // "workonline",
    // "coding",
    // "dailyprogrammer",
    // "java",
    // "LSD",
    // "shrooms",
    // "dmt",
    // "running",
    // "woahdude",
    // "glitchinthematrix",
    // "poetry",
    // "lovecraft",
    // "memes"
]

// list of all subreddits
let subreddits = [];

// temp game subreddits
let actualSubreddit = {};
let nextSubreddit = {};

// Current index of subreddit in list
let loadingCommentsQueue = [];

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

// Pull out & format the important data
function formatPosts(d){

    if(d.data.children.length > 0) {
        // Add another subreddit-placeholder to list
        subreddits.push({
            "name": "",
            "numFollows": 0,
            "posts": [],
            "commentsLoaded": false,

        });

        // Get current index of subreddit in list
        currentSubredditIndex = subreddits.length - 1;


        // Squeezing data out of subreddit
        subreddits[currentSubredditIndex].name = d.data.children[0].data.subreddit;
        subreddits[currentSubredditIndex].numFollows = d.data.children[0].data.subreddit_subscribers;

        // pseudo to load pic_url
        // if post_hint === "image"
        //      pic_url = url
        // else
        //      pic_url = ""
        //      post_hint = "text"

        let tempPosts = [];

        // Push important post data into an array
        for (let i = 0; i < d.data.children.length; i++) {
            tempPosts.push({
                "id": i,
                "title": d.data.children[i].data.title,
                "url": "https://www.reddit.com/" + d.data.children[i].data.permalink,
                "ups": d.data.children[i].data.ups,
                "numComments": d.data.children[i].data.num_comments,
                "comments": [],
                "commentsLoaded": false,
                "post_hint": d.data.children[i].data.post_hint,
                "selftext": d.data.children[i].data.selftext,
                // "pic": createImg(d.data.children[i].data.url, "Post Image"),
                "pic_url": d.data.children[i].data.url,
            });
        }




        subreddits[currentSubredditIndex].posts = shuffle(tempPosts);

        console.log("New subreddit loaded.");

    } else {
        console.log("Could not load subreddit or comments...");
    }
}

function loadComments(post) {

    isLoadingComments = true;

    // Load comments of current post
    loadingCommentsQueue.push(post);

    loadJSON(post.url + ".json?sort=top", formatComments, logError);
}

// Pull out & format the important data
function formatComments(d){

    let commentPath = d[1].data.children;


    // console.log(commentPath);
    // console.log(commentPath[0].data.body);

    if(commentPath.length > 0) {
        // Push comments into list
        for (let i = 0; i < commentPath.length - 1; i++) {
            loadingCommentsQueue[0].comments.push(commentPath[i].data.body);

            // console.log(commentPath[i].data.body);
        }
        // console.log(loadingCommentsQueue[0].comments);

        console.log("--------------------\n| Comments loaded. |\n--------------------");

    } else {
        console.log("Post has no comments...");
    }

    loadingCommentsQueue[0].commentsLoaded = true;
    loadingCommentsQueue.shift();
    isLoadingComments = false;
}

// if request failed
function logError() {
    console.log("ERROR: JSON of subreddit or post doesn't exist.");
}