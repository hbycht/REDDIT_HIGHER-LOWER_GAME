/// <reference path="../TSDef/p5.global-mode.d.ts" />

let speakerVoice = 7;
let speaker = new p5.Speech(speakerVoice); // speech synthesis object
speaker.onEnd = function(e) {
    isSpeaking = false;
    speakerVoice = floor(random(60));
    speaker.setVoice(speakerVoice);
    console.log(speakerVoice);
}
let isSpeaking = false;

function speakKeyword(keyword) {
    isSpeaking = true;
    speaker.speak(keyword); // say something
    console.log("Speaker says: " + keyword);
}