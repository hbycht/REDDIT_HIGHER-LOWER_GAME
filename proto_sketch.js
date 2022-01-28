/// <reference path="./TSDef/p5.global-mode.d.ts" />

let BebasNeue;
let OswaldMedium;
let sound;
let compare;
let scoreImg;

//*** PRELOAD */
function preload() {
    //* No need anymore
    //* Load all subreddits in setup with loadSubreddit(subreddit)

    // ** Load all reddit .json (You can add even more; maybe it gets a bit overloaded) **//
    loadSubreddit("Showerthoughts");

    // Fonts
    BebasNeue = loadFont('assets/Fonts/BebasNeue-Regular.ttf');
    OswaldMedium = loadFont('assets/Fonts/Oswald-Medium.ttf');

    // Images
    sound= loadImage('assets/Images/sound.svg');
    compare = loadImage('assets/Images/outline_compare_arrows_white_48dp.png');
    scoreImg = loadImage('assets/Images/sports_score_white_48dp.svg');

}

//*** SETUP */
function setup() {

    // GUI to add subreddits
    initSubmitGUI();

    // Create sketch canvas
    createCanvas(windowWidth * 0.9, windowHeight * 0.8);

    // Some general settings
    colorMode(HSB, 360, 100, 100, 100);
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);

    setupGame();
    
    // // Log all subreddits
    // print("API data: ");
    // console.log(subreddits);



    // speaker.listVoices();

}

//*** DRAW */
function draw() {

    // // Loading comments
    // if(!isLoadingComments && subreddits.length > currentLoadingIndex) {
    //     let randomPost = floor(random(subreddits[currentLoadingIndex].posts.length));
    //     loadComments(currentLoadingIndex, randomPost);
    // }

    // Clean sketch with fresh background
    background(colorBackground);

    drawGame();


    //     // Button to hear the comments
    //     if(subreddits[j].comments.length > 0){
    //
    //         // button action
    //         if(dist(mouseX, mouseY, midX, y - xSpacing - 10) < xSpacing * 0.75) {
    //             fill(cDotFrom, 100, 100, 100);
    //             speakKeyword(subreddits[j].comments[floor(random(subreddits[j].comments.length))])
    //         } else {
    //             fill(20, 100, 100, 100);
    //             stopSpeaking();
    //         }
    //
    //         ellipse(midX, y - xSpacing - 10, xSpacing * 1.5);
    //         text("<--- click to play comments", midX + xSpacing - 5, y - xSpacing - 15);
    //     }

    
}