var buzzSound = new Audio('./audio/buzz.wav');
var tickSounds = [new Audio('./audio/tick-1.wav'), new Audio('./audio/tick-2.wav'), new Audio('./audio/tick-3.wav')];
var clickSound = new Audio("./audio/click.wav");
let countdown; // setInterval function for countdown clock
const timerPanel = document.getElementById('panel');
const button = document.getElementById('button');
const clock = document.getElementById('clock');// div that controls the clock container 
const timerInput = document.getElementById('timer-input');
const hoursDisplay = document.getElementById('hours-number');
const minutesDisplay = document.getElementById('minutes-number');
const secondsDisplay = document.getElementById('seconds-number');
const footer = document.getElementById('footer');
const themeDropdown = document.getElementById('theme-dropdown');

function playAudio(audioObject){
	// helper function to prevent ugly error messages
	if (audioObject.readyState != 0){
		audioObject.play();
	} else{
		console.log(`error, could not play audio: ${audioObject}`)
	}
}

function initTimer(){
	let time = Number(timerInput.value);
	playAudio(clickSound);
	clearInterval(countdown)
	startTimer(time);
}

function startTimer(seconds){
	const timeLimit = seconds * 1000;
	let timeCounter = 0;
	updateDisplayTimer(timeLimit);
	countdown = setInterval(()=>{
		timeCounter = timeCounter + 1000;
		let differenceInTime = timeLimit - timeCounter;
		updateDisplayTimer(differenceInTime);
		if(differenceInTime <= 0){
			clearInterval(countdown);// clear timer
			playAudio(buzzSound);
			// TODO: flash colors somewhere
			return;
		}
		if(differenceInTime < 5 * 1000 && differenceInTime > 500){
			let randomIndex = Math.floor(Math.random() * tickSounds.length);
			playAudio(tickSounds[randomIndex]);
			// TODO: change style somehow?
		}
	}, 1000); // every 1 second
}
// timeLeft function takes a time as a parameter in milliseconds and displays it in Hours, Minutes, and Seconds
function updateDisplayTimer(time){
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// milliseconds into hours
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// milliseconds into minutes
		const seconds = Math.floor((time % (1000 * 60)) / 1000);// milliseconds into seconds
		// conditional added to each portion of the time that will be displayed adds a zero to the front of numbers < 10
		const displayHours = `${hours < 10 ? '0' : ''}${hours}`;// hours string that will be displayed
		const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;// minutes string that will be displayed
		const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;// seconds string that will be displayed
		//displays the time strings on the page individually
		hoursDisplay.textContent = displayHours;
		minutesDisplay.textContent = displayMinutes;
		secondsDisplay.textContent = displaySeconds;
}

// add themes options
for ([id, theme] of themes){
    let option = document.createElement("option");
    option.value = id;
    option.textContent = theme.displayName;
    themeDropdown.appendChild(option);
}

function updateTheme(){
    let newTheme = themes.get(themeDropdown.value);
    timerPanel.style.background = newTheme.colors.get("timerPanelColor");
    hoursDisplay.style.background = newTheme.colors.get("hoursPanelColor");
    minutesDisplay.style.background = newTheme.colors.get("minutesPanelColor");
    secondsDisplay.style.background = newTheme.colors.get("secondsPanelColor");
    button.style.background = newTheme.colors.get("buttonColor");
    button.style.color = newTheme.colors.get("buttonActiveColor");
    footer.style.background = newTheme.colors.get("footerColor");

    let backgroundImage = document.getElementById("background-image");
    backgroundImage.src = newTheme.backgroundImage;
    backgroundImage.style.visibility = (newTheme.backgroundImage == "none") ? "hidden" : "visible";
}

updateTheme();
