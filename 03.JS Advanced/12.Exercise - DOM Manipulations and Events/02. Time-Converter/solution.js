function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let input;
    daysInput.addEventListener('change', ()=>{input = daysInput.value});
    hoursInput.addEventListener('change', ()=>{input = hoursInput.value});
    minutesInput.addEventListener('change', ()=>{input = minutesInput.value});
    secondsInput.addEventListener('change', ()=>{input = secondsInput.value});
    input = Number(input);
    
    

    daysBtn.addEventListener('click', () => {
        daysInput.value = input;
        hoursInput.value = input * 24;
        minutesInput.value = input * 1440;
        secondsInput.value = input * 86400;
    });
    hoursBtn.addEventListener('click', () => {

        daysInput.value = input / 24;
        hoursInput.value = input;
        minutesInput.value = input * 60;
        secondsInput.value = input * 3600;
    });

}