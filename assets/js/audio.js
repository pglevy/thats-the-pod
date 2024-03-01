const audio = document.querySelector("audio");
console.log (audio);
const source = document.querySelector("source");
console.log (source);
const thisAudioSource = source.getAttribute("src");
console.log (thisAudioSource);
const article = document.querySelector("article");
const thisPost = article.getAttribute("id");
console.log (thisPost);
const thisAudio = document.querySelector('[src="thisAudioSource"]');
console.log (thisAudio);
const button = document.getElementById('mark-as-played');
var intervalId;

function getCurrentTime() {
    var currentTimeInSeconds = localStorage.getItem(thisPost);
    audio.currentTime = currentTimeInSeconds;
    console.log("I got current time: " + currentTimeInSeconds)
};

function setCurrentTime() {
    var currentTimeInSeconds = Math.floor(audio.currentTime);
    // Save the current time to local storage
    localStorage.setItem(thisPost, currentTimeInSeconds);
    console.log("The currentTime attribute has been updated: " + audio.currentTime);
    // console.log(audio.currentSrc);
}

audio.onloadedmetadata = (event) => {
    getCurrentTime();
};

audio.onplay = (event) => {
    // Set up the interval (10 seconds = 10000 milliseconds)
    var intervalTime = 5000;
    intervalId = setInterval(setCurrentTime, intervalTime);
};

audio.onpause = (event) => {
    clearInterval(intervalId);
};

button.addEventListener('click', function() {
    localStorage.removeItem(thisPost);
    audio.currentTime = 0;
    // To stop the interval (if needed):
    clearInterval(intervalId);
});