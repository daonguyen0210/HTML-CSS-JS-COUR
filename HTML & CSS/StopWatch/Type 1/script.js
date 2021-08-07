let minute = 00;
let second = 00;
const appendSecond = document.getElementById('seconds');
const appendMinute = document.getElementById('minutes');
const btnStart = document.getElementById('button-start');
const btnStop = document.getElementById('button-stop');
const btnReset = document.getElementById('button-reset');

let interval = 0; //to store timer values


//this function will be invoked when user clicks on button
function startTimer(){

    second++;
    if( second < 10){
        appendSecond.innerHTML = "0" + second.toString();
    }else{
        appendSecond.innerHTML = second;
    }

    if (second / 60 == 1){
        minute++;
        if( minute  < 10){
            appendMinute.innerHTML = "0" + minute.toString();
        }
        else{
            appendMinute.innerHTML = minute;
        }
        second = 0;
        appendSecond.innerHTML = "0" + second;
    }
    
}

btnStart.addEventListener('click', () => {
    interval = window.setInterval(startTimer, 1000);
});

btnStop.addEventListener('click', () => {
    window.clearInterval(interval);
});


btnReset.addEventListener('click', () => {
    window.clearInterval(interval);
    second = minute = "00";
    appendSecond.innerHTML = second;
    appendMinute.innerHTML = minute;
});