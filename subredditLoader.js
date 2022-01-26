/// <reference path="./TSDef/p5.global-mode.d.ts" />

function formatData(d){

    // Add another subreddit-placeholder to list
    subreddits.push({
        "name": "",
        "numFollows": 0,
        "posts": [],
    });

    // Get current index of subreddit in list
    let index = subreddits.length - 1;

    // Squeezing data out of subreddit
    subreddits[index].name = d.data.children[0].data.subreddit;
    subreddits[index].numFollows = d.data.children[0].data.subreddit_subscribers;

    // Push important post data into an array
    for (let i = 0; i < d.data.children.length; i++) {
        subreddits[index].posts.push({
            "title": d.data.children[i].data.title,
            "url": d.data.children[i].data.url,
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

    console.log("data range: " + dataMin + " - " + dataMax);
}


function loadSubreddit(subreddit){
    // Call Reddit .json
    loadJSON('https://www.reddit.com/r/'+ subreddit +'/top/.json?t=all', formatData);
}