/// <reference path="./TSDef/p5.global-mode.d.ts" />

let requestedData;
let dataMin;
let dataMax;
let reddit = {
    "subreddit": "",
    "numFollows": 0,
    "posts": [],
};

let pointMin = 5;
let pointMax = 100;

let speakerVoice = 7;
let speaker = new p5.Speech(speakerVoice); // speech synthesis object
speaker.onEnd = function(e) {
    isSpeaking = false;
    speakerVoice = floor(random(60));
    speaker.setVoice(speakerVoice);
    console.log(speakerVoice);
}
let isSpeaking = false;

function speakKeyword(keyword) {
    isSpeaking = true;
    speaker.speak(keyword); // say something
    console.log("Speaker says: " + keyword);
}

// Called once when the program starts just before setup().
// Use this to load external data, i.e. make your API calls here.
// See https://p5js.org/reference/#/p5/preload
function preload() {
    // Call Reddit .json
    requestedData = loadJSON("https://www.reddit.com/r/AskReddit/top/.json?t=all");

    console.log(speaker.voices.length);
}

// Called once when the program starts.
// See https://p5js.org/reference/#/p5/setup
function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    colorMode(HSB, 360, 100, 100, 100);
    textAlign(CENTER, CENTER);

    // Log fetched data
    print("API data: ");
    // print(JSON.stringify(requestedData.data.children, undefined, 2));
    // console.log(requestedData.data.children);

    // Squeezing data out of subreddit
    reddit.subreddit = requestedData.data.children[0].data.subreddit;
    reddit.numFollows = requestedData.data.children[0].data.subreddit_subscribers;

    // Push important post data into an array
    for (let i = 0; i < requestedData.data.children.length; i++) {
        reddit.posts.push({
            "title": requestedData.data.children[i].data.title,
            "url": requestedData.data.children[i].data.url,
            "ups": requestedData.data.children[i].data.ups,
            "numComments": requestedData.data.children[i].data.num_comments,
        });
        
    }

    // for (let i = 0; i < 7; i++) {
    //     reddit.push({
    //         "ups": i * 5025,
    //         "title": "This could post number " + (i+1) + " of a lot of reddits.",
    //     });
    // }

    console.log(reddit);

    // Find data range (min & max)
    let tempData = [];
    reddit.posts.forEach(post => {
        tempData.push(post.ups);
    });
    dataMin = min(tempData);
    dataMax = max(tempData);

    console.log("data range: " + dataMin + " - " + dataMax);
    

    midX = width / 2;
    midY = height / 2;

}

// Called over and over to refresh your visualisation.
// See https://p5js.org/reference/#/p5/draw
function draw() {
    // Visualize amount of cases as circles with normalized diameters
    background(0);

    let xSpacing = width / (reddit.posts.length + 1);
    let ySpacing = height / (1 + 1);

    textAlign(LEFT);
    textSize(26);
    textStyle(BOLD);
    fill(20, 20, 100, 100);
    text("Posts from r/" + reddit.subreddit, 50, 60);
    textSize(16);
    textStyle(ITALIC);
    fill(20, 5, 100, 100);
    text("Members: " + round(reddit.numFollows), 50, 80);

    textAlign(CENTER);
    textSize(14);
    fill(20, 30, 90, 100);
    text("Click da dot!\n\n\\/\n\\/\n\\/", midX, midY - 150);

    fill(20, dist(mouseX, mouseY, midX, midY) < 75 ? 80 : 50, 100, 100);
    ellipse(midX, midY, 150);

    fill(20, 30, 30, 100);
    text("isSpeaking:\n" + isSpeaking, midX, midY);

    if(!isSpeaking && mouseIsPressed && dist(mouseX, mouseY, midX, midY) < 75) {
        let keyword = "Speech Test with number 4.";
        speakKeyword(keyword);
    }

    for(let i = 0; i < reddit.posts.length; i++){

        let diameter = map(reddit.posts[i].ups, dataMin, dataMax, 2, xSpacing);

        const x = xSpacing * (i + 1);
        // const y = ySpacing * (j + 1);
        const y = 0.7 * height;

        fill(200, dist(mouseX, mouseY, x, y) < diameter / 2 + 10 ? 90 : 50, 100, 100);
        ellipse(x, y, dist(mouseX, mouseY, x, y) < diameter / 2 + 10 ? diameter + 15 : diameter);

        // label with "ups" under every dot on hover
        if(dist(mouseX, mouseY, x, y) < diameter / 2 + 10) {
            fill(20, 30, 100, 100);
            textSize(11);
            text(reddit.posts[i].ups, x, y - diameter / 2 - 10);
            textSize(14);
            text(reddit.posts[i].title, 50, y + 100, width - 100, height * 0.2);
            textSize(10);
            text(reddit.posts[i].url, midX, y + 80);

            if(!isSpeaking && mouseIsPressed) {
                console.log(reddit.posts[i].title);
                let keyword = reddit.posts[i].title;
                speakKeyword(keyword);
            }
        }
    }
}