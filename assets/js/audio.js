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

function getCurrentTime() {
    var currentTimeInSeconds = localStorage.getItem(thisPost);
    audio.currentTime = currentTimeInSeconds;
    console.log("I got current time: " + currentTimeInSeconds)
}

function setCurrentTime() {
    var currentTimeInSeconds = Math.floor(audio.currentTime);
    // Save the current time to local storage
    localStorage.setItem(thisPost, currentTimeInSeconds);
    console.log("The currentTime attribute has been updated: " + audio.currentTime);
    // console.log(audio.currentSrc);
}

getCurrentTime()

audio.onplay = (event) => {
    // Set up the interval (10 seconds = 10000 milliseconds)
    const intervalTime = 5000;
    const intervalId = setInterval(setCurrentTime, intervalTime);
}

// To stop the interval (if needed):
// clearInterval(intervalId);