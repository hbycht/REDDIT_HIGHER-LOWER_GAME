///path="../TSDef/p5.global-mode.d.ts";

let redditJson;
let redditData = [];
let alphaUps = 100;
let alphaWrong = 0;
let buttonAnswer1;
let buttonAnswer2;

let subreddits = [];
let dataMin = 1;
let dataMax;

let midX;
let midY;

let randomSubrettid;
let randomPost;
let startReddit;
let startPost;

let index = 0;
let score = 0;
let richtigoderfalsch = "Viel Glück beim Raten";

function preload(){
    redditJson = loadJSON('https://www.reddit.com/r/AMA/.json');

    loadSubreddit("AMA");
    loadSubreddit("AskReddit");
    loadSubreddit("AskScience");
    loadSubreddit("AskWomen");

}

function setup(){

    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    colorMode(HSB, 360, 100, 100, 100);

    initSubmitGUI();
    midX = width / 2;
    midY = height / 2;



 /*   for (let i = 0; i < redditJson.data.children.length; i++) {
        redditData.push({
            "ups": redditJson.data.children[i].data.ups,
            "title": redditJson.data.children[i].data.title,
        });
    }*/

    //console.log(redditData);

    buttonAnswer1 = createButton('Answer1');
    buttonAnswer2 = createButton('Answer2');

    buttonAnswer1.position(midX - 250, midY);
    buttonAnswer2.position(midX - 250, midY + 50);

    buttonAnswer3 = createButton('test');
    buttonAnswer3.position(midX - 250, midY + 100);

    randomSubreddit = round(random(0, 4));
    console.log(randomSubrettid);
    randomPost = random(0, subreddits[randomSubrettid].posts.length);

    startReddit = randomSubrettid;
    startPost = randomPost;
}

function draw(){
    background(0);

    fill(100, 100, 100, 100);
    text("Which Post has more likes?", midX, midY - 100);
//score
    fill(100, 100, 100, 100);
    text("Score: " + score, midX + 250, midY - 100);

//Richtig oder Falsch
    fill(100, 100, 100, 100);
    text(richtigoderfalsch, midX, midY + 300);

    fill(50, 50, 50, 100);
    text(subreddits[startReddit].posts[startPost].title, midX, midY);

    fill(50, 50, 50, alphaUps);
    text(subreddits[startReddit].posts[startPost].ups, midX, midY + 10);

    fill(50, 50, 50, 100)
    text(subreddits[randomSubrettid].posts[randomPost].title, midX, midY + 50);

    fill(50, 50, 50, 0);
    text(subreddits[randomSubrettid].posts[randomPost].ups, midX, midY + 60);
    console.log(redditData[index +1].ups);


    buttonAnswer1.mousePressed(onclickhigher)
    buttonAnswer2.mousePressed(onclicklower)
    buttonAnswer3.mousePressed(testebutton)




    // fill(50, 50, 50, alphaWrong);
    // text("This is wrong", midX, midY - 50);


}

function onclickhigher() {
    if(subreddits[startReddit].posts[startPost].ups >= subreddits[randomSubrettid].posts[randomPost].ups){
        //"This is Right"
        richtigoderfalsch = "Das war Richtig der post hat " + (subreddits[startReddit].posts[startPost].ups - subreddits[randomSubrettid].posts[randomPost].ups) + " upvotes mehr "
        score++
        startReddit = randomSubrettid;
        startPost = randomPost;
        randomSubreddit = random(0, subreddits.length);
        randomPost = random(0, subreddits[randomSubreddit].posts.length);

    }else{
        richtigoderfalsch = "Das war Falsch der post hat " + (subreddits[randomSubrettid].posts[randomPost].ups - subreddits[startReddit].posts[startPost].ups) + " upvotes weniger "
        //"This is wrong"
        score = 0
        startReddit = randomSubrettid;
        startPost = randomPost;
        randomSubreddit = random(0, subreddits.length);
        randomPost = random(0, subreddits[randomSubreddit].posts.length);
    }

}

function onclicklower() {
    if(subreddits[randomSubrettid].posts[randomPost].ups >= subreddits[startReddit].posts[startPost].ups){
        richtigoderfalsch = "Das war Richtig der post hat " + (subreddits[randomSubrettid].posts[randomPost].ups - subreddits[startReddit].posts[startPost].ups) + " upvotes mehr "
        //"This is Right"
        score++
        startReddit = randomSubrettid;
        startPost = randomPost;
        randomSubreddit = random(0, subreddits.length);
        randomPost = random(0, subreddits[randomSubreddit].posts.length);

    }else{
        //"This is wrong"
        richtigoderfalsch = "Das war Falsch der post hat " + (subreddits[startReddit].posts[startPost].ups - subreddits[randomSubrettid].posts[randomPost].ups) + " upvotes weniger "
        score = 0
        startReddit = randomSubrettid;
        startPost = randomPost;
        randomSubreddit = random(0, subreddits.length);
        randomPost = random(0, subreddits[randomSubreddit].posts.length);
    }

}
function testebutton(){
    console.log(subreddits[subreddits.length - 1])
}
