/// <reference path="../TSDef/p5.global-mode.d.ts" />

let speakingQueue = [];

let speakerVoice = 7;
let speaker = new p5.Speech(speakerVoice); // speech synthesis object
speaker.setRate(1.0);
speaker.setPitch(0.8);
speaker.onEnd = function(e) {
    isSpeaking = false;
    speakerVoice = floor(random(60));
    speaker.setVoice(speakerVoice);
    console.log("Voice: " + speakerVoice);
}
let isSpeaking = false;

function speakKeyword(keyword) {
    speakingQueue.push(keyword);
    isSpeaking = true;
    speaker.speak(speakingQueue.pop()); // say something
    // console.log("Speaker says: " + keyword);
}

function stopSpeaking() {
    speaker.cancel();
    speakingQueue = [];
}
