// Constants
const article = document.querySelector("article");
const post = article.getAttribute("id");
const audio = document.querySelector("audio");
const button = document.getElementById('mark-as-played');

// Functions
const getCurrentTime = () => {
    const currentTimeInSeconds = localStorage.getItem(post);
    if (currentTimeInSeconds !== null) {
        audio.currentTime = parseFloat(currentTimeInSeconds);
    };
    console.log("get time: " + currentTimeInSeconds);
};

const setCurrentTime = () => {
    const currentTimeInSeconds = Math.floor(audio.currentTime);
    localStorage.setItem(post, currentTimeInSeconds);
    console.log("set time: " + currentTimeInSeconds);
};

const startSavingTime = () => {
    const intervalTime = 5000; // 5 seconds
    return setInterval(setCurrentTime, intervalTime);
}

const stopSavingTime = () => {
    clearInterval(intervalId);
}

// Event listeners
audio.addEventListener('loadedmetadata', getCurrentTime);

audio.addEventListener('play', () => {
    setCurrentTime();
    intervalId = startSavingTime();
});

audio.addEventListener('pause', () => {
    stopSavingTime(intervalId);
});

button.addEventListener('click', () => {
    audio.pause();
    localStorage.removeItem(post);
    audio.currentTime = 0;
    stopSavingTime(intervalId);
});