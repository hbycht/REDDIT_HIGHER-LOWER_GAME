/// <reference path="./TSDef/p5.global-mode.d.ts" />


//*** PRELOAD */
function preload() {
    //* No need anymore
    //* Load all subreddits in setup with loadSubreddit(subreddit)

    // ** Load all reddit .json (You can add even more; maybe it gets a bit overloaded) **//
    loadSubreddit("Showerthoughts");



}

//*** SETUP */
function setup() {


    createCanvas(windowWidth * 0.8, windowHeight * 0.8);

    // GUI to add subreddits
    initSubmitGUI();

    // Some general settings
    colorMode(HSB, 360, 100, 100, 100);
    textAlign(CENTER, CENTER);

    setupGame();
    
    // Log all subreddits
    print("API data: ");
    console.log(subreddits);

    midX = width / 2;
    midY = height / 2;

    // loadNextRound();

    // speaker.listVoices();

}

//*** DRAW */
function draw() {

    drawGame();
    // Loading comments
    // latest subreddit
    let lastSubreddit = subreddits.length-1;
    if(!isLoadingComments && subreddits.length > currentLoadingIndex) {
        let randomPost = floor(random(subreddits[currentLoadingIndex].posts.length));
        loadComments(currentLoadingIndex, randomPost);
    }

    // Clean sketch with fresh background
    background(240, 10, 10, 100);


    //showPosts();

    // Spacing between each subreddit
    let ySpacing = height / (subreddits.length + 1);

    /*for(let j = 0; j < subreddits.length; j++) {

        // Calculate yPosition
        const y = ySpacing * (j + 1);

        // Spacing between each dot
        let xSpacing = width / (subreddits[j].posts.length + 1);

        // Color range for dots
        let cDotFrom = 160;
        let cDotTo = 240;

        // Headline and Member count of every subreddit
        textAlign(LEFT, TOP);
        textSize(26);
        textStyle(BOLD);
        fill(cDotTo, 30, 100, 100);
        text("Posts from r/" + subreddits[j].name, 50, y - xSpacing - 30);
        textSize(16);
        textStyle(ITALIC);
        text("• Members: " + round(subreddits[j].numFollows), 55, y - xSpacing + 0);

        // Button to hear the comments
        if(subreddits[j].comments.length > 0){

            // button action
            if(dist(mouseX, mouseY, midX, y - xSpacing - 10) < xSpacing * 0.75) {
                fill(cDotFrom, 100, 100, 100);
                speakKeyword(subreddits[j].comments[floor(random(subreddits[j].comments.length))])
            } else {
                fill(20, 100, 100, 100);
                stopSpeaking();
            }

            ellipse(midX, y - xSpacing - 10, xSpacing * 1.5);
            text("<--- click to play comments", midX + xSpacing - 5, y - xSpacing - 15);
        }

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
                    // speakKeyword(keyword);
                    console.log(subreddits[j].comments);
                }
            }
        }
    }*/
    
}