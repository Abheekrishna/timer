const timeText = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const year = document.getElementById('year');


let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const stopWatch = () => {
    seconds++;
    if(seconds === 60) {
        seconds = 0;
        minutes++;
        if(minutes === 60) {
            minutes = 0;
            hours++
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;


    timeText.innerText = `${h}:${m}:${s}`
}

const startWatch = () => {
    if(timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
    isRunning = true;
}

const pauseWatch = () => {
    clearInterval(timer);
    isRunning = false;
}

let isRunning = false;


const toggleWatch = () => {
    if(isRunning) {
        pauseWatch();
    } else {
        startWatch();
    }
}


startBtn.addEventListener('click', toggleWatch);


resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeText.innerText = '00:00:00'
})

const newYear = (new Date()).getFullYear();
year.innerText = newYear;


console.log('Hey I know you\'re a dev!! \nGot an idea 💡. Let\'s work together, contact me 👇🏻 \nabheekrishna17@gmail.com');
