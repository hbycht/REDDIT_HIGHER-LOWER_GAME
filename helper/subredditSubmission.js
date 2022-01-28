/// <reference path="../TSDef/p5.global-mode.d.ts" />

// Input GUI to add subreddits by user
let subredditSubmissionInput, subredditSubmissionText, subredditSubmissionButton, subredditSubmissionHint;

// Function fires if submit-button is pressed
function addSubreddit() {
    let n = document.getElementById("subredditSubmission").value;
    console.log("input: " + n);
    listOfSubredditNames.push(n);
    console.log(listOfSubredditNames);
    document.getElementById("subredditSubmission").value = "";
    subredditSubmissionHint.html("(Added \"r/" + n + "\" to list of subreddits.)");
    
}

// Create and display all GUI elements
function initSubmitGUI() {
    // Creation
    subredditSubmissionText = createElement('h2', 'Add your own subreddit :)');
    subredditSubmissionInput = createInput();
    subredditSubmissionButton = createButton('add');
    subredditSubmissionHint = createElement("p", '');
    
    // Display
    subredditSubmissionText.position(20, -5);
    subredditSubmissionInput.id("subredditSubmission");
    subredditSubmissionInput.position(20, 48);
    subredditSubmissionInput.size(240, 30);
    subredditSubmissionButton.position(subredditSubmissionInput.x + subredditSubmissionInput.width, subredditSubmissionInput.y);
    subredditSubmissionButton.size(50, 36);
    subredditSubmissionButton.id("submissionButton");
    subredditSubmissionHint.position(30, 72);

    // Event-listener for button pressed
    subredditSubmissionButton.mousePressed(addSubreddit);
}