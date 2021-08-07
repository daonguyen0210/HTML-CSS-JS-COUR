// ========================= CLOCK =========================
const hour = document.getElementById('clock-hours');
const minute = document.getElementById('clock-minutes');
const second = document.getElementById('clock-seconds');

const textHour = document.getElementById('text-hours');
const textMinute = document.getElementById('text-minutes');
const textAmpm = document.getElementById('text-ampm');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

let clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

    hour.style.transform = `rotateZ( ${ hh + mm/12}deg)`;
    minute.style.transform = `rotateZ( ${mm + ss/60}deg)`;
    second.style.transform = `rotateZ( ${ss}deg)`;
}


let clockText = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let isAmpm;
    let dd = date.getDate();
    let dm = date.getMonth();
    let dy = date.getFullYear();
    let month = ['Feb','Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



    // change the hour from 24hour to 12hour
    isAmpm = hh > 12 ? "PM" : "AM";
    hh = hh % 12 || 12;

    
    // Show time
    textHour.innerText = hh.toString().padStart( 2, "0");
    textMinute.innerText = mm.toString().padStart( 2, "0");
    textAmpm.innerText = isAmpm;
    dateDay.innerText = dd.toString().padStart( 2, "0");
    dateMonth.innerText = month[dm];
    dateYear.innerText = dy;
}
window.setInterval( clock, 1000);
window.setInterval( clockText, 1000);


// ========================= Dark Theme mode =========================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


