path="../TSDef/p5.global-mode.d.ts";
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

let index = 0;
let score = 0;
let richtigoderfalsch = "Viel Glück beim Raten";

function preload(){
    redditJson = loadJSON('https://www.reddit.com/r/AMA/.json');
    //loadSubreddit("Showerthoughts")
}

function setup(){

    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    colorMode(HSB, 360, 100, 100, 100);

    initSubmitGUI();
    midX = width / 2;
    midY = height / 2;

    for (let i = 0; i < redditJson.data.children.length; i++) {
        redditData.push({
            "ups": redditJson.data.children[i].data.ups,
            "title": redditJson.data.children[i].data.title,
        });
    }

    //console.log(redditData);

    buttonAnswer1 = createButton('Answer1');
    buttonAnswer2 = createButton('Answer2');

    buttonAnswer1.position(midX - 250, midY);
    buttonAnswer2.position(midX - 250, midY + 50);

    buttonAnswer3 = createButton('test');
    buttonAnswer3.position(midX - 250, midY + 100);
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
    text(redditData[index].title, midX, midY);

    fill(50, 50, 50, alphaUps);
    text(redditData[index].ups, midX, midY + 10);

    fill(50, 50, 50, 100)
    text(redditData[index +1].title, midX, midY + 50);

    fill(50, 50, 50, 0);
    text(redditData[index +1].ups, midX, midY + 60);
    console.log(redditData[index +1].ups);


    buttonAnswer1.mousePressed(onclickhigher)
    buttonAnswer2.mousePressed(onclicklower)
    buttonAnswer3.mousePressed(testebutton)




    // fill(50, 50, 50, alphaWrong);
    // text("This is wrong", midX, midY - 50);


}

function onclickhigher() {
    if(redditData[index].ups > redditData[index + 1].ups || redditData[index].ups == redditData[index + 1].ups ){
        //"This is Right"
        richtigoderfalsch = "Das war Richtig der post hat " + (redditData[index].ups - redditData[index +1].ups) + " upvotes mehr "
        score++
        index++

    }else{
        richtigoderfalsch = "Das war Falsch der post hat " + (redditData[index + 1].ups - redditData[index].ups) + " upvotes weniger "
        //"This is wrong"
        score = 0
        index++
    }

}

function onclicklower() {
    if(redditData[index+ 1].ups > redditData[index].ups || redditData[index + 1].ups == redditData[index ].ups ){
        richtigoderfalsch = "Das war Richtig der post hat " + (redditData[index + 1].ups - redditData[index].ups) + " upvotes mehr "
        //"This is Right"
        score++
        index++

    }else{
        //"This is wrong"
        richtigoderfalsch = "Das war Falsch der post hat " + (redditData[index].ups - redditData[index +1].ups) + " upvotes weniger "
        score = 0
        index++
    }

}
function testebutton(){
    console.log(subreddits[subreddits.length - 1])
}
