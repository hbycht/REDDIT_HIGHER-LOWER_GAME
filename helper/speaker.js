/// <reference path="../TSDef/p5.global-mode.d.ts" />

let speakingQueue = [];

let speakerVoice = 7;
let speaker = new p5.Speech(speakerVoice); // speech synthesis object
speaker.setRate(1.0);
speaker.setPitch(0.8);
speaker.onEnd = function(e) {
    speakingQueue.pop();
    isSpeaking = false;
    speakerVoice = floor(random(60));
    speaker.setVoice(speakerVoice);
    console.log("Voice: " + speakerVoice);
}
let isSpeaking = false;

function speakKeyword(keyword) {
    if(speakingQueue.length < 6) {
        speakingQueue.push(keyword);
        isSpeaking = true;
        speaker.speak(speakingQueue[speakingQueue.length - 1]); // say something
        console.log(speakingQueue);
    }
    
}

function stopSpeaking() {
    speaker.cancel();
    speakingQueue = [];
}
