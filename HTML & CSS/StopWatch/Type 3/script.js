window.setInterval(setClock, 1000);


const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60; //the idea is 60s equal 180* and xs will be equaled ?? deg
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRatio( secondHand, secondRatio);
    setRatio( minuteHand, minuteRatio);
    setRatio( hourHand, hourRatio);
}


function setRatio(element, rotation){
    element.style.setProperty('--rotation', rotation* 360);
}