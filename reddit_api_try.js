let redditJson;
let redditData;


function preload(){
    redditJson = loadJSON("https://www.reddit.com/r/AMA/.json");
}

function setup(){
    print("API data: ");
    print(JSON.stringify(redditJson, undefined, 2));

    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    colorMode(HSB, 360, 100, 100, 100);
    textAlign(CENTER);

    for (let i = 0; i < redditJson.data.children.length; i++) {
        redditData.push({
            "ups": requestedData.data.children[i].data.ups,
            "title": requestedData.data.children[i].data.title,
        });
    }
}