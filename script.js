const display = document.getElementById('timeDisplay');
const displayMillisecond = document.getElementById('miliSecond');

let nowTime = 0;
let minusTime = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let added = 0;
let displaying;

function start(){
    isRunning = true;
    seconds = 0;
    minutes = 0;
    hours = 0;
    if (isRunning === true){
        nowTime = Date.now();
        if (minusTime === 0){
            minusTime = Date.now();
        }
        displaying = nowTime - minusTime;
        displaying += added;
        console.log(displaying);
        while (displaying > 1000){
            if (seconds >= 59){
                seconds = 0;
                minutes++;
            }
            else if (minutes >= 59){
                hours++;
                minutes = 0;
            }
            else{
                seconds++;
            }
            displaying -= 1000;
        }
        hours = hours.toString().padStart(2, 0);
        minutes = minutes.toString().padStart(2, 0);
        seconds = seconds.toString().padStart(2, 0);
        displaying = displaying.toString().padStart(3, 0);
        display.textContent = `${hours}:${minutes}:${seconds}`;
        displayMillisecond.textContent = `.${displaying}`;
    }
    setInterval(update, 1);
}

function reset(){
    minusTime = 0;
    display.textContent = `00:00:00`;
    displayMillisecond.textContent = `.000`;
}

function stop(){
    isRunning = false;
    added = displaying;
}

function update(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    if (isRunning === true){
        nowTime = Date.now();
        let displaying = nowTime - minusTime;
        console.log(displaying);
        while (displaying > 1000){
            if (seconds >= 59){
                seconds = 0;
                minutes++;
            }
            else if (minutes >= 59){
                hours++;
                minutes = 0;
            }
            else{
                seconds++;
            }
            displaying -= 1000;
        }
        hours = hours.toString().padStart(2, 0);
        minutes = minutes.toString().padStart(2, 0);
        seconds = seconds.toString().padStart(2, 0);
        displaying = displaying.toString().padStart(3, 0);
        display.textContent = `${hours}:${minutes}:${seconds}`;
        displayMillisecond.textContent = `.${displaying}`;
    }
    setInterval(update, 1);
}