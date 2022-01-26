/// <reference path="../TSDef/p5.global-mode.d.ts" />

let requestedData;
let isLoading = false;

function loadingComplete(d){
    isLoading = false;
}

function formatData(d){

    // Setup reddit object
    let reddit = {
        "subreddit": "No Subreddit selected...",
        "numFollows": 0,
        "posts": [],
    };

    // Squeezing data out of subreddit
    reddit.subreddit = d.data.children[0].data.subreddit;
    reddit.numFollows = d.data.children[0].data.subreddit_subscribers;

    // Push important post data into an array
    for (let i = 0; i < d.data.children.length; i++) {
        reddit.posts.push({
            "title": d.data.children[i].data.title,
            "url": d.data.children[i].data.url,
            "ups": d.data.children[i].data.ups,
            "numComments": d.data.children[i].data.num_comments,
        });
    }

    return reddit;
}


function loadSubreddit(subreddit){

    isLoading = true;
    
    // Call Reddit .json
    requestedData = loadJSON('https://www.reddit.com/r/'+ subreddit +'/top/.json?t=all', loadingComplete);

    while(isLoading) {
        console.log("Subreddit is loading...");
    }

    return formatData(requestedData);
}