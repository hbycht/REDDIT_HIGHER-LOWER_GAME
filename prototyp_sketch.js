/// <reference path="./TSDef/p5.global-mode.d.ts" />


let requestedData;
let dataMin;
let dataMax;
let redditPosts = [];

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
    requestedData = loadJSON('https://www.reddit.com/r/AskReddit/hot/.json');

    console.log(speaker.voices.length);
}

// Called once when the program starts.
// See https://p5js.org/reference/#/p5/setup
function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    colorMode(HSB, 360, 100, 100, 100);
    textAlign(CENTER);

    // Log fetched data
    print("API data: ");
    // print(JSON.stringify(requestedData.data.children, undefined, 2));
    // console.log(requestedData.data.children);

    // Squeezing post data into an array (e.g. "ups" for upvotes)
    for (let i = 0; i < requestedData.data.children.length; i++) {
        redditPosts.push({
            "ups": requestedData.data.children[i].data.ups,
            "title": requestedData.data.children[i].data.title,
        });
    }

    // for (let i = 0; i < 7; i++) {
    //     redditPosts.push({
    //         "ups": i * 5025,
    //         "title": "This could post number " + (i+1) + " of a lot of reddits.",
    //     });
    // }

    console.log(redditPosts);
    

    midX = width/2;
    midY = height/2;

}

// Called over and over to refresh your visualisation.
// See https://p5js.org/reference/#/p5/draw
function draw() {
    // Visualize amount of cases as circles with normalized diameters
    background(0);

    dataMin = 1;
    dataMax = 40000;

    let xSpacing = width / (redditPosts.length + 1);
    let ySpacing = height / (1 + 1);

    textSize(14);
    fill(20, 30, 90, 100);
    text("Click da dot!\n\n\\/\n\\/\n\\/", midX, midY - 150);

    fill(20, dist(mouseX, mouseY, midX, midY) < 75 ? 80 : 50, 100, 100);
    ellipse(midX, midY, 150);

    fill(20, 30, 30, 100);
    text("isSpeaking: " + isSpeaking, midX, midY);

    if(!isSpeaking && mouseIsPressed && dist(mouseX, mouseY, midX, midY) < 75) {
        let keyword = "My name is Henning and I want to tell you a lot of things.";
        speakKeyword(keyword);
    }

    for(let i = 0; i < redditPosts.length; i++){

        let diameter = map(redditPosts[i].ups, dataMin, dataMax, 2, xSpacing);

        const x = xSpacing * (i + 1);
        // const y = ySpacing * (j + 1);
        const y = 0.7 * height;

        fill(200, 60, 100, 100);
        ellipse(x, y, diameter);

        // label with "ups" under every dot on hover
        if(dist(mouseX, mouseY, x, y) < diameter / 2 + 5) {
            fill(20, 30, 100, 100);
            textSize(11);
            text(redditPosts[i].ups, x, y - diameter / 2 - 10);
            text(redditPosts[i].title, 50, y + 100, width - 100, height * 0.2);

            if(!isSpeaking && mouseIsPressed) {
                console.log(redditPosts[i].title);
                let keyword = redditPosts[i].title;
                speakKeyword(keyword);
            }
        }
    }
}