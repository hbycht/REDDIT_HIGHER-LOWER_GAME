/// <reference path="../TSDef/p5.global-mode.d.ts" />

let speakingQueue = [];

let speakerVoice = 0;
let speakerVoices = [0, 1, 5, 7, 10, 11, 17, 25, 28, 32, 33, 37, 40, 41, 51];


let speaker = new p5.Speech(speakerVoices[Math.floor(Math.random(speakerVoices.length - 1))]); // speech synthesis object
speaker.setRate(0.9);
speaker.setPitch(0.8);
speaker.onEnd = function(e) {
    speakingQueue.pop();
    isSpeaking = false;
    speakerVoice = random(speakerVoices);
    speaker.setVoice(speakerVoice);
}
let isSpeaking = false;

// function speakTest(){
//     console.log(speakerVoice);
//     speaker.setVoice(speakerVoice);
//     speaker.speak("This is a test speech.");
//     speakerVoice++;
// }

function speakKeyword(keyword) {
    isSpeaking = true;
    speaker.speak(keyword);
    console.log(keyword);
    
}

function speakComments(comments) {
    speakingQueue = shuffle(comments);
    isSpeaking = true;
    console.log("With voice: " + speakerVoice);
    speaker.speak(speakingQueue[0]);
    console.log(speakingQueue[0]);
    speakingQueue.shift();
}

function stopSpeaking() {
    speaker.cancel();
    speakingQueue = [];
    isSpeaking = false;
}
