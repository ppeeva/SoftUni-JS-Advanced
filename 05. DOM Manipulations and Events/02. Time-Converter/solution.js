function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    buttons.forEach(x => {
        x.addEventListener('click', onClick);
    });

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    function onClick(ev) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        
        if (ev.target.id == 'daysBtn') {
            days = Number(daysInput.value);
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        }
        else if (ev.target.id == 'hoursBtn') {
            hours = Number(hoursInput.value);
            days = (hours / 24).toFixed(1);
            minutes = hours * 60;
            seconds = minutes * 60;
        }
        else if (ev.target.id == 'minutesBtn') {
            minutes = Number(minutesInput.value);
            hours = (minutes / 60).toFixed(1);
            days = (hours / 24).toFixed(1);
            seconds = minutes * 60;
        }
        else if (ev.target.id == 'secondsBtn') {
            seconds = Number(secondsInput.value);
            minutes = (seconds /  60).toFixed(1);
            hours = (minutes / 60).toFixed(1);
            days = (hours / 24).toFixed(1);
        }
        
        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }
}