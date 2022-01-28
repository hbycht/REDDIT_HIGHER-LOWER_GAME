/// <reference path="../TSDef/p5.global-mode.d.ts" />

// Input GUI to add subreddits by user
let subredditSubmissionInput, subredditSubmissionText, subredditSubmissionButton;

// Function fires if submit-button is pressed
function addSubreddit() {
    let n = document.getElementById("subredditSubmission").value;
    console.log("input: " + n);
    listOfSubredditNames.push(n);
    console.log(listOfSubredditNames);
    document.getElementById("subredditSubmission").value = "";
    
}

// Create and display all GUI elements
function initSubmitGUI() {
    // Creation
    subredditSubmissionText = createElement('h2', 'Add your own subreddit :)');
    subredditSubmissionInput = createInput();
    subredditSubmissionButton = createButton('add');
    
    // Display
    subredditSubmissionText.position(20, -5);
    // subredditSubmissionText.style("position", "relative");
    subredditSubmissionText.style("color", "#ffe7b3");
    subredditSubmissionInput.id("subredditSubmission");
    subredditSubmissionInput.position(20, 48);
    subredditSubmissionButton.position(subredditSubmissionInput.x + subredditSubmissionInput.width, subredditSubmissionInput.y);
    subredditSubmissionButton.id("submissionButton");
    // document.getElementById("submissionButton").onSubmit = addSubreddit;

    // Event-listener for button pressed
    subredditSubmissionButton.mousePressed(addSubreddit);
}