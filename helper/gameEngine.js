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
let colorHigher;
let colorLower;
let colorLeft;
let colorRight;
let colorButton;
let colorDot;
let colorLight;

let colorHigherHover;
let colorLowerHover;
let colorPostsHover;
let colorLeftHover;
let colorRightHover;
let colorButtonHover;


let score = 0;

function setupGame(){

    midX = width / 2;
    midY = height / 2;
    col = width / 24; // Unterteilung der Sketchfläche in 12 Spaltenbreiten

    // set some color variables
    colorBackground = color("#09161a");
    colorHigher = color("#137250");
    colorLower = color("#651124");
    colorPosts = color("#0f5b7c");
    colorLight = color("#ffffff");
    colorButton = color("#F27D74");
    colorDotFrom = color("#71a9bd");
    colorDotTo = color("#F24B3F");

    colorHigherHover = color("#00eca6");
    colorLowerHover = color("#e82d5d");
    colorPostsHover = color("#29596b");
    colorButtonHover = color("#d95148");



    nextSubreddit = subreddits[0];
    loadNextRound();
}

function drawGame(){

//     fill(100, 100, 100, 100);
//     text("Which Post has more likes?", midX, midY - 100);
// //score
//     fill(100, 100, 100, 100);
//     text("Score: " + score, midX + 250, midY - 100);
//
// //Richtig oder Falsch
//     fill(100, 100, 100, 100);
//     text(richtigoderfalsch, midX, midY + 300);
//
//     fill(50, 50, 50, 100);
//     text(subreddits[startReddit].posts[startPost].title, midX, midY);
//     //text(subreddits[startReddit].title, midX + 10, midY);
//
//     fill(50, 50, 50, alphaUps);
//     text(subreddits[startReddit].posts[startPost].ups, midX, midY + 10);
//     text(subreddits[startReddit].name, midX, midY - 20);
//
//     fill(50, 50, 50, 100)
//     text(subreddits[randomSubreddit].posts[randomPost].title, midX, midY + 50);
//     //text(subreddits[randomSubreddit].title, midX +10, midY + 50);
//
//     fill(50, 50, 50, 0);
//     text(subreddits[randomSubreddit].posts[randomPost].ups, midX, midY + 60);
//     fill(50, 50, 50, 100);
//     text(subreddits[randomSubreddit].name, midX, midY + 70);
//
//     buttonAnswer1.mousePressed(onclickhigher)
//     buttonAnswer2.mousePressed(onclicklower)
//     //buttonAnswer3.mousePressed(testebutton)

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

    stroke(100);
    line(midX, 0, midX, height);
    noStroke();

    let rectWidth = 400;
    let rectHeight = 500;
    let postLeftX = midX - rectWidth - 100;
    let postRightX = midX + 100;
    let postY = midY - 200;

    // left post
    fill(200, 100, 100, 50);
    rectMode(CORNER);
    rect(postLeftX, postY, rectWidth, rectHeight);
    textAlign(RIGHT, TOP);
    fill(100, 100, 100, 100);
    text(actualPostLeft.title,postLeftX + 50, postY +100 , 300, 600);

    // right post
    fill(20, 100, 100, 50);
    rectMode(CORNER);
    rect(postRightX, postY, rectWidth, rectHeight);
    textAlign(LEFT, TOP);
    fill(100, 100, 100, 100);
    text(actualPostRight.title, postRightX + 50, postY +100, 300, 600);
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

    // Check which post has more ups
    if(actualPostLeft.ups < actualPostRight.ups){
        colorLeft = hoverRect(postLeftX, postY, postW, postH) ? colorLowerHover : colorLower;
        colorRight = hoverRect(postRightX, postY, postW, postH) ? colorHigherHover : colorHigher;
    } else {
        colorLeft = hoverRect(postLeftX, postY, postW, postH) ? colorHigherHover : colorHigher;
        colorRight = hoverRect(postRightX, postY, postW, postH) ? colorLowerHover : colorLower;
    }

    textSize(42);
    fill(colorButton);
    text("r/" + actualSubreddit.name, midX, headerY);
    textSize(22);
    fill(colorButtonHover);
    text(actualSubreddit.numFollows + " Follower", midX, headerY + 40);

    rectMode(CENTER);

    // draw POSTS
    fill(colorLeft);
    rect(postLeftX, postY, hoverRect(postLeftX, postY, postW, postH) ? postW * 1.04 : postW, postH, postCorner);
    fill(colorRight);
    rect(postRightX, postY, hoverRect(postRightX, postY, postW, postH) ? postW * 1.04 : postW, postH, postCorner);

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
            fill(colorHigherHover);
            ellipse(x, y, diameter * 1.1);
            // draw post content field
            fill(colorHigherHover);
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
    fill(colorHigherHover);
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
}

function manageGameState(timer){

    if(timer < 1){
        showPosts();

    }else if(timer === 1){
        showResults();

    }
}
