/// <reference path="./TSDef/p5.global-mode.d.ts" />

let requestedData = [];
let dataMin = 1;
let dataMax;
let subreddits = [];

let addSubredditInput;

let pointMin = 5;
let pointMax = 100;

function addSubreddit() {
    let n = document.getElementById("addSubreddit").value;
    console.log("input: " + n);
    loadSubreddit(n);
    document.getElementById("addSubreddit").value = "";
    
}

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

//*** PRELOAD */
function preload() {
    //* No need anymore
    //* Load all subreddits in setup with loadSubreddit(subreddit)

    // Preload all reddit .json (You can add even more; maybe it gets a bit overloaded)
    // requestedData.push(loadJSON("https://www.reddit.com/r/AskReddit/top/.json?t=all"));
    // requestedData.push(loadJSON("https://www.reddit.com/r/askscience/top/.json?t=all"));
    // requestedData.push(loadJSON("https://www.reddit.com/r/askwomen/top/.json?t=all"));
    // requestedData.push(loadJSON("https://www.reddit.com/r/Showerthoughts/top/.json?t=all"));
}

//*** SETUP */
function setup() {
    
    // Load all reddit .json (You can add even more; maybe it gets a bit overloaded)
    loadSubreddit("askreddit");

    createCanvas(windowWidth * 0.8, windowHeight * 0.8);

    // GUI to add subreddits
    let addSubredditText = createElement('h2', 'Want to add your own subreddit?');
    addSubredditText.position(20, 5);
    addSubredditText.style("color", "#fff");

    addSubredditInput = createInput();
    addSubredditInput.id("addSubreddit");
    addSubredditInput.position(20, 65);
  
    let addSubredditButton = createButton('add');
    addSubredditButton.position(addSubredditInput.x + addSubredditInput.width, 65);
    addSubredditButton.mousePressed(addSubreddit);

    // Some general settings
    colorMode(HSB, 360, 100, 100, 100);
    textAlign(CENTER, CENTER);

    // Log fetched data
    print("API data: ");

    for(let r = 0; r < requestedData.length; r++) {
        // Add another subreddit-placeholder to list
        subreddits.push({
            "name": "",
            "numFollows": 0,
            "posts": [],
        });

        // Squeezing data out of subreddit
        subreddits[r].name = requestedData[r].data.children[0].data.subreddit;
        subreddits[r].numFollows = requestedData[r].data.children[0].data.subreddit_subscribers;

        // Push important post data into an array
        for (let i = 0; i < requestedData[r].data.children.length; i++) {
            subreddits[r].posts.push({
                "title": requestedData[r].data.children[i].data.title,
                "url": requestedData[r].data.children[i].data.url,
                "ups": requestedData[r].data.children[i].data.ups,
                "numComments": requestedData[r].data.children[i].data.num_comments,
            });
        }
    }
    
    // Log of subreddits
    console.log(subreddits);

    midX = width / 2;
    midY = height / 2;

}

// Called over and over to refresh your visualisation.
// See https://p5js.org/reference/#/p5/draw
function draw() {

    background(0);

    // Spacing between each subreddit
    let ySpacing = height / (subreddits.length + 1);

    for(let j = 0; j < subreddits.length; j++) {
        
        // Calculate yPosition
        const y = ySpacing * (j + 1);

        // Spacing between each dot
        let xSpacing = width / (subreddits[j].posts.length + 1);

        // Color range for dots
        let cDotFrom = 160;
        let cDotTo = 240;

        textAlign(LEFT, TOP);
        textSize(26);
        textStyle(BOLD);
        fill(cDotTo, 30, 100, 100);
        text("Posts from r/" + subreddits[j].name, 50, y - xSpacing - 30);
        textSize(16);
        textStyle(ITALIC);
        text("• Members: " + round(subreddits[j].numFollows), 55, y - xSpacing + 0);

        textAlign(CENTER, CENTER);

        // Draw a dot for every post
        for(let i = 0; i < subreddits[j].posts.length; i++){

            // Dot size depending on upvote
            let diameter = map(subreddits[j].posts[i].ups, dataMin, dataMax, 2, xSpacing);

            // Calculate xPosition
            const x = xSpacing * (i + 1);

            let cDot = lerp(cDotFrom, cDotTo, 1/25 * i);
            fill(dist(mouseX, mouseY, x, y) < diameter / 2 + 10 ? cDot - 120 : cDot, 80, 100, 100);
            ellipse(x, y, dist(mouseX, mouseY, x, y) < diameter / 2 + 10 ? diameter + 0.22 * xSpacing : diameter);

            // onHover: highlight dot & show respective title
            if(dist(mouseX, mouseY, x, y) < diameter / 2 + 10) {
                textAlign(CENTER, BOTTOM)
                fill(cDot - 120, 50, 100, 100);
                textSize(11);
                textStyle(BOLD);
                text(subreddits[j].posts[i].ups, x, y - diameter / 2 - 20);
                textSize(16);
                textStyle(BOLD)
                text(subreddits[j].posts[i].title, 0.2 * width, 0.75 * height, width * 0.6, height * 0.2);

                // onClick: Speak out post title
                if(!isSpeaking && mouseIsPressed) {
                    let keyword = subreddits[j].posts[i].title;
                    speakKeyword(keyword);
                }
            }
        }
    }
    
}