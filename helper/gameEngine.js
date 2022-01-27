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



let alphaUps = 100;
let alphaWrong = 0;
let buttonAnswer1;
let buttonAnswer2;


let midX;
let midY;

let actualPostleft = {};
let actualPostright = {};

let randomSubreddit = 0;
let randomPost;
let startReddit;
let startPost;

let index = 0;
let score = 0;
let richtigoderfalsch = "Viel Glück beim Raten";


// load next subreddit into temp
function loadNextRound() {
    // load random subreddit out of subreddits[] into tempSubreddit
    // load next subreddit into subreddits[] (loadSubreddit in background)
    actualSubreddit = nextSubreddit;
    nextSubreddit = subreddits[subreddits.length - 1];

    loadSubreddit(random(listOfSubredditNames));

    console.log("Actual Subreddit: " + actualSubreddit.name);

    actualPostleft = random(actualSubreddit.posts);
    actualPostright = random(actualSubreddit.posts);

    subreddits.shift();

}

// to show the post (index for left or right)
function showPosts() {
    //  Variables for colors
    let colorTitel = color(5, 69, 95);
    let colorUntertitel = color( 16, 73, 35);
    let colorText = color(0, 0, 100);
    let colorBox = color(276, 29, 95);

    //    stroke(100);
    //    line(midX, 0, midX, height);
    //    noStroke();

    let rectWidth = 400;
    let rectHeight = height/2;
    let rectLeftX = midX - rectWidth - 100;
    let rectRightX = midX + 100;
    let rectY = midY - 100;


    // left post
    textFont(OswaldMedium);
    fill(colorBox);
    rectMode(CORNER);
    noStroke();
    rect(rectLeftX, rectY, rectWidth, rectHeight, 20);
    textAlign(LEFT, TOP);
    fill(colorText);
    textSize(21);
    text(actualPostleft.title,rectLeftX + 50, rectY + 30 , 300, 600);

    // right post
    textFont(OswaldMedium);
    fill(colorBox);
    rectMode(CORNER);
    noStroke();
    rect(rectRightX, rectY, rectWidth, rectHeight, 20);
    textAlign(LEFT, TOP);
    fill(colorText);
    textSize(21);
    text(actualPostright.title, rectRightX + 50, rectY + 30, 300, 600);

    image(sound, 200, 300);

 // header
    textSize(60);
    textFont(BebasNeue);
    fill(colorTitel);
    textAlign(CENTER, TOP);
    text("Which post has more likes?", midX, 0.05*height)
    textSize(25);
    fill(colorUntertitel);
    textFont(OswaldMedium);
    text("r/" + actualSubreddit.name, midX, 0.17*height);

 // Untertitel
    console.log(actualSubreddit.numFollows);
    textSize(15);
    fill(colorUntertitel);
    textFont(OswaldMedium);
    text("Members: " + actualSubreddit.numFollows, midX, 0.24*height);



}

// handler onClick (index for left or right)
function selectPost(index) {
    // change gameState
}

// show gameScore
function showScore() {

}

function setupGame(){


    nextSubreddit = subreddits[0];
    loadNextRound();

    // buttonAnswer1 = createButton('Answer1');
    // buttonAnswer2 = createButton('Answer2');
    //
    // buttonAnswer1.position(midX - 250, midY);
    // buttonAnswer2.position(midX - 250, midY + 50);
    //
    // buttonAnswer3 = createButton('test');
    // buttonAnswer3.position(midX - 250, midY + 100);
    //
    // randomSubreddit = int(random(0, subreddits.length));
    // randomPost = int(random(0, subreddits[randomSubreddit].posts.length));
    //
    // startReddit = int(randomSubreddit / 2);
    // startPost = int(randomPost / 2);
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

function onclickhigher() {
    if(subreddits[startReddit].posts[startPost].ups >= subreddits[randomSubreddit].posts[randomPost].ups){
        //"This is Right"
        richtigoderfalsch = "Das war Richtig der post hat " + (subreddits[startReddit].posts[startPost].ups - subreddits[randomSubreddit].posts[randomPost].ups) + " upvotes mehr "
        score++
        startReddit = randomSubreddit;
        startPost = randomPost;
        randomSubreddit = int(random(0, subreddits.length));
        randomPost = int(random(0, subreddits[randomSubreddit].posts.length));

    }else{
        richtigoderfalsch = "Das war Falsch der post hat " + (subreddits[randomSubreddit].posts[randomPost].ups - subreddits[startReddit].posts[startPost].ups) + " upvotes weniger "
        //"This is wrong"
        score = 0
        startReddit = randomSubreddit;
        startPost = randomPost;
        randomSubreddit = int(random(0, subreddits.length));
        randomPost = int(random(0, subreddits[randomSubreddit].posts.length));
    }

}

function onclicklower() {
    if(subreddits[randomSubreddit].posts[randomPost].ups >= subreddits[startReddit].posts[startPost].ups){
        richtigoderfalsch = "Das war Richtig der post hat " + (subreddits[randomSubreddit].posts[randomPost].ups - subreddits[startReddit].posts[startPost].ups) + " upvotes mehr "
        //"This is Right"
        score++
        startReddit = randomSubreddit;
        startPost = randomPost;
        randomSubreddit = int(random(0, subreddits.length));
        randomPost = int(random(0, subreddits[randomSubreddit].posts.length));

    }else{
        //"This is wrong"
        richtigoderfalsch = "Das war Falsch der post hat " + (subreddits[startReddit].posts[startPost].ups - subreddits[randomSubreddit].posts[randomPost].ups) + " upvotes weniger "
        score = 0
        startReddit = randomSubreddit;
        startPost = randomPost;
        randomSubreddit = int(random(0, subreddits.length));
        randomPost = int(random(0, subreddits[randomSubreddit].posts.length));
    }

}

/*
function testebutton(){
    console.log(subredditsImg)
    console.log(subreddits)
    console.log(subreddits.length)

}*/
