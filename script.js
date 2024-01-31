
// Timer funtionality
const time = document.querySelector('.clock');
const startelement = document.querySelector('.play');
let check = 'start';
let temp=true;
let intervalId; // Store the interval ID to control it

startelement.addEventListener('click', () => {
    if (check === 'start') {
        intervalId = window.setInterval(calculate, 1000);
        startelement.textContent = 'Pause';
        startelement.style.color = 'orange';
        check = 'stop'; // Update the check variable
    } else {
        clearInterval(intervalId); // Stop the interval
        startelement.innerText = 'Start';
        startelement.style.color = 'skyblue';
        check = 'start'; // Update the check variable
    }
});

let hours = 0;
let minutes = 0;
let seconds = 0;
function calculate() {

   
    seconds++;
    if (seconds > 60) {
        minutes += 1;
        seconds = 0;
        if (minutes > 60) {
            hours += 1;
            minutes = 0;
        }

    }
    let leadingsec = 0;
    let leadingminutes = 0;
    let leadinghours = 0;
    if (seconds < 10) {
        leadingsec = '0' + seconds.toString();
    }
    else {
        leadingsec = seconds;
    }
    if (minutes < 10) {
        leadingminutes = '0' + minutes.toString();
    } else {
        leadingminutes = minutes;
    }
    if (hours < 10) {
        leadinghours = '0' + hours.toString();
    } else {
        leadinghours = hours;
    }



    time.innerText = leadinghours + ':' + leadingminutes + ':' + leadingsec;

}


// Reset Funtionality
const resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', function () {
    clearInterval(intervalId); // Stop the interval on reset
    hours = 0;
    minutes = 0;
    seconds = 0;
    startelement.innerText = 'Start';
    startelement.style.color = 'skyblue';
    time.innerText = '00:00:00'; // Reset the displayed time
});


















