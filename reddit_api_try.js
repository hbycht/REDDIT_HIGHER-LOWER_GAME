let redditJson;
let redditData = [];
let alphaUps = 100;
let alphaWrong = 0;
let buttonAnswer1;
let buttonAnswer2;
let buttonNext;
let nummertest = 0;
let midX;
let midY;
let button1Pressed = false;
let button2Pressed = false;
let ersterRichtig;


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

    buttonAnswer1 = createButton('Answer1');
    buttonAnswer2 = createButton('Answer2');

    buttonAnswer1.position(midX - 250, midY);
    buttonAnswer2.position(midX - 250, midY + 50);


}

function draw(){


    background(0);

    fill(100, 100, 100, 100);
    text("Which Post has more likes?", midX, midY - 100);

    gameMechanic()


}

function gameMechanic(){


    fill(50, 50, 50, 100);
    text(redditData[nummertest].title, midX, midY);

    fill(50, 50, 50, alphaUps);
    text(redditData[nummertest].ups, midX, midY + 10);

    fill(50, 50, 50, 100)
    text(redditData[nummertest + 1].title, midX, midY + 50);

    fill(50, 50, 50, alphaUps);
    text(redditData[nummertest +1].ups, midX, midY + 60);




    buttonAnswer1.mousePressed(button1Pressed = true);

    buttonAnswer2.mousePressed(button2Pressed = true);


    if(redditData[nummertest].ups > redditData[nummertest +1].ups){
        ersterRichtig = true
    }else {
        ersterRichtig = false
    }


    if(ersterRichtig == true && button1Pressed == true){
        fill(50, 50, 50, alphaWrong);
        text("This is Richtig", midX, midY - 50);
        button1Pressed = false;
        button2Pressed = false;
        ersterRichtig = undefined;
        ersterRichtig = undefined;
        buttonNext()


    }else if(ersterRichtig == false && button2Pressed == true){
        fill(50, 50, 50, alphaWrong);
        text("This is Richtig", midX, midY - 50);
        button1Pressed = false;
        button2Pressed = false;
        ersterRichtig = undefined;
        buttonNext()

    }
    else if(button1Pressed == true || button2Pressed == true && ersterRichtig != false && button2Pressed != true || ersterRichtig != true && button1Pressed != true){
        fill(50, 50, 50, alphaWrong);
        text("This is wrong", midX, midY - 50);
        button1Pressed = false;
        button2Pressed = false;
        ersterRichtig = undefined;

        buttonNext()

    }

    function buttonNext(){

        buttonnext = createButton('Next');
        buttonnext.position(midX - 250, midY + 100);




    }






}
