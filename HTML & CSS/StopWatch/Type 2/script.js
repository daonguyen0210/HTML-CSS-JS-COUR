let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

const timeRef = document.querySelector('.display');
const btnStart = document.getElementById('startTimer');
const btnPause = document.getElementById('pauseTimer');
const btnReset = document.getElementById('resetTimer');

let interval;

btnStart.addEventListener('click', () => {
    interval = window.setInterval( displayTimer, 10);
});


function displayTimer () {
    milliseconds += 10;
    if( milliseconds / 1000 == 1){
        milliseconds = 0;
        seconds++;
        if( seconds / 60 == 1){
            seconds = 0;
            minutes++;
            if( minutes / 60 == 1){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours.toString() : hours;
    let m = minutes < 10 ? "0" + minutes.toString() : minutes;
    let s = seconds < 10 ? "0" + seconds.toString() : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds.tostring() : milliseconds < 100 ? "0" + milliseconds.tostring() : milliseconds;

    timeRef.innerHTML = h + " : " +  m + " : " + s + " : " + ms;
}


btnPause.addEventListener('click', () => {
    window.clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    window.clearInterval(interval);
    [milliseconds, seconds, minutes, hours]  = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});