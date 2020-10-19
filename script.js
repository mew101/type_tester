const testWrapper = document.querySelector(".test-wrapper");
const textArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0]


// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9){
        time = "0" + time
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function startTimer() {
    let currentTime = timer[0]+ ":" + timer[1]+ ":" + timer[2]+ ":"
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}
 

// Match the text entered with the provided text on the page:
function spellcheck() {
    let textEntered = textArea.value;
    console.log(textEntered)
}

// Start the timer:
function start(){
    let textEnteredLength = textArea.value.length;
    if (textEnteredLength === 0) {
        setInterval(startTimer, 10);
    };
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    console.log("reset button has been pressed");
}

// Event listeners for keyboard input and the reset button:
textArea.addEventListener("keypress", start, false);
textArea.addEventListener("keyup", spellcheck, false);
resetButton.addEventListener("click", reset, false);