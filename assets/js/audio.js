// Set constant for the article element
const article = document.querySelector("article");
// Set constant for post with id of article, the post slug
const post = article.getAttribute("id");
// Set constant for audio element
const audio = document.querySelector("audio");
// Set constant for button used to mark as played
const button = document.getElementById('mark-as-played');
// Set global variable for starting and stopping function to set current time
var intervalId;

// Get the current time for this post saved in localStorage
function getCurrentTime() {
    var currentTimeInSeconds = localStorage.getItem(post);
    audio.currentTime = currentTimeInSeconds;
};

// Save the current time to localStorage
function setCurrentTime() {
    var currentTimeInSeconds = Math.floor(audio.currentTime);
    localStorage.setItem(post, currentTimeInSeconds);
};

// When audio metadata is loaded, run the function to get saved time
audio.onloadedmetadata = (event) => {
    getCurrentTime();
};

// When audio is played, start timer that saves current time every 5 seconds
audio.onplay = (event) => {
    // Set up the interval (10 seconds = 10000 milliseconds)
    var intervalTime = 5000;
    intervalId = setInterval(setCurrentTime, intervalTime);
};

// When audio is paused, stop the timer so it stops saving to local storage
audio.onpause = (event) => {
    clearInterval(intervalId);
};

// When button is clicked:
// 1. pause playback
// 2. remove saved time from local storage
// 3. set current time to 0 (so it would start from beginning again)
// 4. stop the timer so it stops saving to local storage
button.addEventListener('click', function() {
    audio.pause();
    localStorage.removeItem(post);
    audio.currentTime = 0;
    // To stop the interval (if needed):
    clearInterval(intervalId);
});