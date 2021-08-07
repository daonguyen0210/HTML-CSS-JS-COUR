class digitalClock {
    constructor(element){
        this.element = element;
    }

    start() {
        window.setInterval( ()=>{
            this.update()
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        let minuteFormated = parts.minute.toString().padStart(2, '0');
        let hourFormated = parts.hour.toString().padStart(2, '0');
        let timeFormated = hourFormated + " : "  + minuteFormated;
        let amPm = parts.isAm ? "AM" : "PM";

        document.querySelector('.clock-time').textContent = timeFormated;
        document.querySelector('.clock-ampm').textContent = amPm;
    }

    getTimeParts (){
        let now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12 
        };
    }
}


const clockElement = document.querySelector('.clock');
const clockObj = new digitalClock(clockElement);

clockObj.start();