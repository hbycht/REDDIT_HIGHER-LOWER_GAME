let redditJson;
let redditData = [];
let alphaUps = 100;
let alphaWrong = 0;
let buttonAnswer1;
let buttonAnswer2;

let midX;
let midY;

function preload(){
    redditJson = loadJSON('https://www.reddit.com/r/AMA/.json');
}

function setup(){

    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    colorMode(HSB, 360, 100, 100, 100);

    midX = width / 2;
    midY = height / 2;

    for (let i = 0; i < redditJson.data.children.length; i++) {
        redditData.push({
            "ups": redditJson.data.children[i].data.ups,
            "title": redditJson.data.children[i].data.title,
        });
    }

    //console.log(redditData);

    buttonAnswer1 = createButton('Answer');
    buttonAnswer2 = createButton('Answer');

    buttonAnswer1.position(midX - 250, midY);
    buttonAnswer2.position(midX - 250, midY + 50);


}

function draw(){
    background(0);

    fill(100, 100, 100, 100);
    text("Which Post has more likes?", midX, midY - 100);

    fill(50, 50, 50, 100);
    text(redditData[0].title, midX, midY);

    fill(50, 50, 50, alphaUps);
    text(redditData[0].ups, midX, midY + 10);

    fill(50, 50, 50, 100)
    text(redditData[1].title, midX, midY + 50);

    fill(50, 50, 50, alphaUps);
    text(redditData[1].ups, midX, midY + 60);

    fill(50, 50, 50, alphaWrong);
    text("This is wrong", midX, midY - 50);


}