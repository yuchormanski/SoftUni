function attachEventsListeners() {

    // input fields
    const days = document.getElementById('days');
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');


    const obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    // buttons
    const dayBtn = document.getElementById('daysBtn').addEventListener('click', calculate);
    const minutesBtn = document.getElementById('minutesBtn').addEventListener('click', calculate);
    const hoursBtn = document.getElementById('hoursBtn').addEventListener('click', calculate);
    const secondsBtn = document.getElementById('secondsBtn').addEventListener('click', calculate);

    function converts(value, id) {
        let days = value / obj[id];

        return {
            days: days,
            hours: days * obj.hours,
            minutes: days * obj.minutes,
            seconds: days * obj.seconds
        }

    }


    function calculate(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]')

        let time = converts(Number(input.value), input.id);
        
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds
    }
}