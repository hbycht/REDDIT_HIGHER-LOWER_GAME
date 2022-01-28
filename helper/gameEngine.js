///path="../TSDef/p5.global-mode.d.ts";

// subreddit temps
// e.g.
// subreddits = [
//     "actual",
//     "next",
// ]
//
// listOfSubredditNames = [
//     "aksReddit",
//     "AMA",
//     "askWomen",
//     "askScience",
// ]

let dataMin = 1;
let dataMax;

let midX;
let midY;
let col; // Unterteilung der Sketchfläche in 12 Spaltenbreiten (siehe setupGame())

let actualPostLeft = {};
let actualPostRight = {};

let randomPost;
let startReddit;
let startPost;

let colorBackground;
let colorPosts;
let colorLeft;
let colorRight;
let colorButton;
let colorDot;
let colorLight;

let colorHigher;
let colorLower;
let colorPostsHover;
let colorLeftHover;
let colorRightHover;
let colorButtonHover;

let timer = 0;
let score = 0;

function setupGame(){

    midX = width / 2;
    midY = height / 2;
    col = width / 24; // Unterteilung der Sketchfläche in 12 Spaltenbreiten

    // set some color variables
    colorBackground = color("#09161a");
    colorPosts = color("#061c50");
    colorLight = color("#ffffff");
    colorButton = color("#F27D74");
    colorDotFrom = color("#71a9bd");
    colorDotTo = color("#F24B3F");

    colorHigher = color("#00eca6");
    colorLower = color("#e82d5d");
    colorPostsHover = color("#0e389b");
    colorButtonHover = color("#d95148");



    nextSubreddit = subreddits[0];
    loadNextRound();
}

function drawGame(){
    manageGameState();
}

function hoverRect(rectX, rectY, rectW, rectH) {
    return mouseX > rectX - rectW/2 && mouseX < rectX + rectW/2  && mouseY > rectY - rectH/2 && mouseY < rectY + rectH/2;
}

function hoverCircle(circleX, circleY, diameter) {
    return dist(mouseX, mouseY, circleX, circleY) < diameter / 2;
}

// load next subreddit into temp
function loadNextRound() {
    actualSubreddit = nextSubreddit;
    nextSubreddit = subreddits[subreddits.length - 1];

    // Find data range of actual subreddit (min & max)
    let tempData = [];
    actualSubreddit.posts.forEach(post => {
        tempData.push(post.ups);
    });
    dataMax = max(tempData);

    loadSubreddit(random(listOfSubredditNames));

    console.log("Actual Subreddit: " + actualSubreddit.name);

    actualPostLeft = random(actualSubreddit.posts);
    actualPostRight = random(actualSubreddit.posts);

    // delete first subreddit; we don't need it anymore
    subreddits.shift();

}

// Game state: Question
function showPosts() {

    let headerY = 0.1 * height;

    let postW = 10 * col;
    let postH = 0.5 * height;
    let postLeftX = midX - 5.5*col;
    let postRightX = midX + 5.5*col;
    let postY = 0.6 * height;
    let postCorner = 6;

    let scoreX = midX;
    let scoreY = height * 0.95;

    textAlign(CENTER, CENTER);
    rectMode(CENTER);

    // draw HEAD-LINE + NAME + numFollows
    textSize(48);
    fill(colorLight);
    text("Which post has more upvotes?", midX, headerY);
    textSize(34);
    fill(colorButton);
    text("r/" + actualSubreddit.name, midX, headerY + 60);
    textSize(20);
    fill(colorButtonHover);
    text(actualSubreddit.numFollows + " Follower", midX, headerY + 95);

    // draw POSTS
    fill(hoverRect(postLeftX, postY, postW, postH) ? colorPostsHover : colorPosts);
    rect(postLeftX, postY, hoverRect(postLeftX, postY, postW, postH) ? postW * 1.04 : postW, postH, postCorner);
    fill(hoverRect(postRightX, postY, postW, postH) ? colorPostsHover : colorPosts);
    rect(postRightX, postY, hoverRect(postRightX, postY, postW, postH) ? postW * 1.04 : postW, postH, postCorner);

    // draw POST-CONTENT
    fill(colorLight);
    textSize(20);
    textStyle(BOLD);
    text(actualPostLeft.title, postLeftX, postY, postW * 0.8, postH);
    text(actualPostRight.title, postRightX, postY, postW * 0.8, postH);

    // draw SCORE
    fill(colorHigher);
    textStyle(BOLD);
    textSize(20);
    text("Score: " + score, scoreX, scoreY);

    // handle clicks on post & change gameState
    if(mouseIsPressed){
        // on LEFT post
        if(hoverRect(postLeftX, postY, postW, postH)){
            timer = 1;
            loadNextRound();
        }
        // on RIGHT post
        else if(hoverRect(postRightX, postY, postW, postH)) {
            timer = 1;
            loadNextRound();
        }
    }

}

// Game state: Answer
function showResults() {

    let numShowcasePosts = 7;
    let xSpacing = width / (numShowcasePosts + 1);

    let headerY = 0.1 * height;

    let postW = 9 * col;
    let postH = 0.35 * height;
    let postLeftX = midX - 6*col;
    let postRightX = midX + 6*col;
    let postY = 0.42 * height;
    let postCorner = 6;

    let dotY = 0.7 * height;

    let buttonW = 0.3 * width;
    let buttonH = 0.1 * height;
    let buttonX = midX;
    let buttonY = height - 100;

    let scoreX = midX;
    let scoreY = height * 0.95;

    textAlign(CENTER, CENTER);
    rectMode(CENTER);

    // Check which post has more ups
    if(actualPostLeft.ups < actualPostRight.ups){
        colorLeft = colorLower;
        colorRight = colorHigher;
    } else {
        colorLeft = colorHigher;
        colorRight = colorLower;
    }

    // draw NAME + numFollows
    textSize(42);
    fill(colorButton);
    text("r/" + actualSubreddit.name, midX, headerY);
    textSize(22);
    fill(colorButtonHover);
    text(actualSubreddit.numFollows + " Follower", midX, headerY + 40);



    // draw POSTS
    fill(colorLeft);
    rect(postLeftX, postY, postW, postH, postCorner);
    fill(colorRight);
    rect(postRightX, postY, postW, postH, postCorner);

    // draw POST-CONTENT
    fill(colorLight);
    textSize(30);
    textStyle(BOLD);
    text(actualPostLeft.ups, postLeftX, postY, postW, postH);
    text(actualPostRight.ups, postRightX, postY, postW, postH);

    // draw DOTS
    for(let i = 0; i < numShowcasePosts; i++){
        // Dot size depending on upvote
        let diameter = map(actualSubreddit.posts[i].ups, dataMin, dataMax, 20, xSpacing / 2);

        // Calculate xPosition
        const x = xSpacing * (i + 1);
        const y = dotY + sin(frameCount * 2 + i * 100) * 10;

        colorMode(RGB, 360, 100, 100, 100);
        let cDot = lerpColor(color(30, 30, 50), colorDotTo, (1/dataMax) * actualSubreddit.posts[i].ups);
        colorMode(HSB, 360, 100, 100, 100);

        fill(cDot);
        ellipse(x, y, diameter);

        // onHover: highlight dot & show respective title
        if(hoverCircle(x, dotY, diameter)) {

            const y = dotY + sin(frameCount * 2 + i * 100) * 3;

            // shade the background
            // background(colorBackground);
            // connecting line from dot to post content
            stroke(colorButton);
            strokeWeight(5);
            noFill();
            beginShape();
            curveVertex(x, y - diameter / 1.8);
            curveVertex(x, y - diameter / 1.8);
            curveVertex(x, dotY - diameter * 0.9);
            curveVertex(midX, postY + (dotY - postY) / 2);
            curveVertex(midX, postY);
            curveVertex(midX, postY);
            endShape();
            // dot contour
            fill(colorBackground);
            ellipse(x, y, diameter * 1.3);
            noStroke();
            rect(x, y + diameter / 2.0, diameter * 1.6, diameter / 1.0);
            // draw the dot in hover color
            fill(colorHigher);
            ellipse(x, y, diameter * 1.1);
            // draw post content field
            fill(colorHigher);
            stroke(colorButton);
            strokeWeight(5);
            rect(midX, postY, 18 * col, postH * 0.7, postCorner * 2);
            // draw upvotes label
            fill(colorButton);
            textSize(28);
            textStyle(BOLD);
            let upText = actualSubreddit.posts[i].ups + " upvotes";
            rect(midX, postY - postH * 0.35, textWidth(upText) + 40, 50, postCorner * 2);
            noStroke();
            // show num upvotes
            fill(colorBackground);
            text(upText, midX, postY - postH * 0.35);
            // show post content
            textSize(20);
            textStyle(BOLD)
            text(actualSubreddit.posts[i].title, midX, postY, 16 * col, postH * 0.5);
        } else {
            hoverDot = false;
        }
    }

    // draw SCORE
    fill(colorHigher);
    textStyle(BOLD);
    textSize(20);
    text("Score: " + score, scoreX, scoreY);

    // draw NEXT-BUTTON
    fill(hoverRect(buttonX, buttonY, buttonW, buttonH) ? colorButtonHover : colorButton);
    rect(buttonX, buttonY, buttonW, buttonH, postCorner);
    fill(colorLight);
    textStyle(BOLD);
    textSize(50);
    text("next", buttonX, buttonY);

    // handle NEXT-BUTTON click
    if(hoverRect(buttonX, buttonY, buttonW, buttonH) && mouseIsPressed) {
        timer = 0;

    }

}

function manageGameState(){
    if(timer < 1){
        showPosts();

    }else if(timer === 1){
        showResults();
    }
}
