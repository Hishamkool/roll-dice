let running = false;
var activeplayer = 0;
var sum = 0;
let cs = [0, 0]; //current score list
let ts = [0, 0]; //total score list
const limit = 20;
var flag = 0;

/* debug testing variables */
let enableLog = true; /* to see console.log */

const targetToWin = 100;/* 100 is the default win for a player, while hosting set 100 */

const debugDontSkipAtOne = false;/* change debugDontSkipAtOne flag to "false" when on production or hosting , this flag when false helps to skip to the next user when dice shows "one" */


var rollBtnOne = document.getElementById("rollOne");
var holdBtnOne = document.getElementById("holdOne");
var rollBtnTwo = document.getElementById("rollTwo");
var holdBtnTwo = document.getElementById("holdTwo");

var boxOne = document.getElementById("boxone");
var boxTwo = document.getElementById("boxtwo");

var start = document.getElementById("start");
var diceLogo = document.getElementById("Face");
let shouldScroll = true; //should scroll to active location when taping on rollon

var versusImg = document.getElementById("versusImg");



/* input fields */
const playerOneName = document.getElementById("player-one-name");
const playerTwoName = document.getElementById("player-two-name");

/* place holders */
const playerOnePlaceholder = document.getElementById("player-one-placeholder");
const playerTwoPlaceholder = document.getElementById("player-two-placeholder");
/* name in the congrats popup */
const playerWon = document.querySelector("#congrats-alert .player-name");
/* user submit button */
const submitUserBtn = document.getElementById("submit-user");

const popUpContent = document.querySelector(".popUpContent");

/* to show and hide the congrats popup  */
const popover = document.getElementById("congrats-alert");

/* show popup always during debug */
//  popover.showPopover();



/* default names */
let Player1 = "PLAYER 1";
let Player2 = "PLAYER 2";
/* to submit user names */
function setUsers(event) {
    event.preventDefault();

    Player1 = playerOneName.value.trim() || "PLAYER 1";
    playerOnePlaceholder.textContent = Player1.toUpperCase();


    Player2 = playerTwoName.value || "PLAYER 2";
    playerTwoPlaceholder.textContent = Player2.toUpperCase();

    closePopUp();
    /* clearing input fields after submit */
    event.target.reset();
}

/* function to show popup */
function showStartPopup() {
    popUpContent.classList.add("open");
}
/* function to close popup */
function closePopUp() {
    popUpContent.classList.remove("open");

}

// disabling all buttons initially 
disableAllButtons();
function disableAllButtons() {
    rollBtnOne.disabled = true;
    holdBtnOne.disabled = true;
    rollBtnTwo.disabled = true;
    holdBtnTwo.disabled = true;
}

//enabling and disabling buttons while switching players
function updateButtons() {
    // returns true if tablet
    const isTablet = checkIfTablet();
    if (activeplayer == 0) {
        rollBtnOne.disabled = false;
        holdBtnOne.disabled = false;

        rollBtnTwo.disabled = true;
        holdBtnTwo.disabled = true;
        //scrolling to the first player
        // rollBtnOne.scrollIntoView();
        //if not tablet then scroll
        if (!isTablet) {
            scrollToActiveLocation();
        }

    }
    if (activeplayer == 1) {
        rollBtnOne.disabled = true;
        holdBtnOne.disabled = true;

        rollBtnTwo.disabled = false;
        holdBtnTwo.disabled = false;

        //scrolling to the second player
        // rollBtnTwo.scrollIntoView();
        //if not tablet then scroll
        if (!isTablet) {
            scrollToActiveLocation();
        }

    }
}
// function to clear the scoreboard -usually while starting the game
function clearAllValues() {
    cs[0] = 0;
    cs[1] = 0;
    ts[0] = 0;
    ts[1] = 0;
    document.getElementById("cs2").innerHTML = 0;
    document.getElementById("cs1").innerHTML = 0;
    document.getElementById("ts1").innerHTML = 0;
    document.getElementById("ts2").innerHTML = 0;
}
// start and stop button click
function GameStart() {


    const targetImage = chooseTargetImage();

    if (targetImage == versusImg) {
        // versusImg.style.transform = `rotate(0deg) scale(3)`;
        versusImg.style.height = "120px";

    }


    if (!running) {
        /* show popup only when game not already running  */
        showStartPopup();
        //clearing values only while starting not stoping so that we can see our scores onces finished
        clearAllValues();

        flag = 1;
        // alert("Game has started");
        start.style.background = 'red ';
        start.value = "Stop Game";
        if (activeplayer == 0) {
            boxOne.style.boxShadow = "0px 0px  30px 15px lightgreen";
            boxTwo.style.boxShadow = "";
        }
        if (activeplayer == 1) {
            boxOne.style.boxShadow = "";
            boxTwo.style.boxShadow = "0px 0px  30px 15px lightgreen";
        }
        updateButtons();
        running = true;


    }
    else if (running) {
        stopGame();
    }


}

// function to stop game - called withing js
function stopGame() {
    if (mediaQuery.matches) {
        versusImg.style.height = "70px";

    } else {

        versusImg.style.height = "40px";
    }
    // versusImg.style.transform = `rotate(0deg) scale(1)`;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    running = false;
    flag = 0;
    activeplayer = 0;

    disableAllButtons();

    boxOne.style.boxShadow = "";
    boxTwo.style.boxShadow = "";
    versusImg.src = "images/vs.png";
    diceLogo.src = "images/Red-Dice-PNG-Transparent-File.png";
    start.style.background = '#33B30F';
    start.value = "Start Game";

    /* setting default player names */
    setDefaultPlayerNames();
}

function setDefaultPlayerNames() {
    Player1 = "PLAYER 1";
    playerOnePlaceholder.textContent = Player1;
    Player2 = "PLAYER 2";
    playerTwoPlaceholder.textContent = Player2;

}

let diceRotation = 0;
// animating the dices
function diceRoatationAnimation() {
    const targetImage = chooseTargetImage();

    // animation with rotation and scale
    // versusImg.classList.remove("diceThrown");
    // void versusImg.offsetWidth;
    // versusImg.classList.add("diceThrown");


    //animation with only rotation
    diceRotation = diceRotation + 360;
    targetImage.style.transition = ` transform 0.6s ease-out`;
    targetImage.style.transform = `rotateZ(${diceRotation}deg)`;

    /*  //trying with scale 
     diceRotation += 360; // increment rotation
     const scale = mediaQuery.matches ? 1 : 3; // scale depending on screen 
     // combine rotation + scale in a single transform
     targetImage.style.transition = "transform 0.6s ease-out";
     targetImage.style.transform = `rotate(${diceRotation}deg) scale(${scale})`; */
}

const mediaQuery = window.matchMedia("(min-width:768px)");

mediaQuery.addEventListener("change", checkIfTablet);

//function to notify changes of screensizes
function checkIfTablet() {
    chooseTargetImage();
    return mediaQuery.matches ? true : false;


}

// function to choose the target image to show dice based on the screen size 
function chooseTargetImage() {
    if (mediaQuery.matches) {
        var targetImage = diceLogo;
        // versusImg.style.height = "40px"; 
        versusImg.src = "images/vs.png";

    } else {
        var targetImage = versusImg;
        // versusImg.style.transform = `rotate(0deg) scale(3)`;
        versusImg.style.height = "120px";
        diceLogo.src = "images/Red-Dice-PNG-Transparent-File.png";
    }
    return targetImage;

}
// function to roll dice for first player
function rollOne() {
    diceRoatationAnimation();

    // runing and active player = 0
    if (flag == 1 && activeplayer == 0) {

        var diceValue = Math.floor((Math.random() * 6) + 1);
        const targetImage = chooseTargetImage();

        if (diceValue == 1) {
            targetImage.src = "images/1dice.png";

        }
        if (diceValue == 2) {
            targetImage.src = "images/2.png";
        }
        if (diceValue == 3) {
            targetImage.src = "images/3.png";
        }
        if (diceValue == 4) {
            targetImage.src = "images/4.png";
        }
        if (diceValue == 5) {
            targetImage.src = "images/5.png";
        }
        if (diceValue == 6) {
            targetImage.src = "images/6.png";
        }
        //adding values when not equal to 1
        if (diceValue != 1) {

            cs[0] = cs[0] + diceValue;
            document.getElementById("cs1").innerHTML = cs[0];

        }
        //set current score to zero when we get one on dice
        if (diceValue == 1 && debugDontSkipAtOne == false) {
            // sum=0;
            cs[0] = 0;


            document.getElementById("cs1").innerHTML = cs[0];
            boxOne.style.boxShadow = "";
            boxTwo.style.boxShadow = "0px 0px  30px 15px lightgreen";
            activeplayer = 1;
            updateButtons();
        }




    }

}

// function to roll dice for second  player
function rollTwo() {
    diceRoatationAnimation();
    if (flag == 1 && activeplayer == 1) {

        var diceValue = Math.floor((Math.random() * 6) + 1);
        const targetImage = chooseTargetImage();

        if (diceValue == 1) {
            targetImage.src = "images/1dice.png";

        }
        if (diceValue == 2) {
            targetImage.src = "images/2.png";
        }
        if (diceValue == 3) {
            targetImage.src = "images/3.png";
        }
        if (diceValue == 4) {
            targetImage.src = "images/4.png";
        }
        if (diceValue == 5) {
            targetImage.src = "images/5.png";
        }
        if (diceValue == 6) {
            targetImage.src = "images/6.png";
        }

        if (diceValue != 1) {

            cs[1] = cs[1] + diceValue;
            document.getElementById("cs2").innerHTML = cs[1];
        }
        if (diceValue == 1 && debugDontSkipAtOne == false) {

            cs[1] = 0;


            document.getElementById("cs2").innerHTML = cs[1];
            boxOne.style.boxShadow = "0px 0px  30px 15px lightgreen";
            boxTwo.style.boxShadow = "";
            activeplayer = 0;
            updateButtons();
        }




    }

}


function hold() {
    var congratsLottie = document.querySelector(".congrats-lottie");

    if (flag == 1 && activeplayer == 0) {

        ts[0] = ts[0] + cs[0];
        cs[0] = 0;
        document.getElementById("ts1").innerHTML = ts[0];
        document.getElementById("cs1").innerHTML = 0;
        boxOne.style.boxShadow = "";
        boxTwo.style.boxShadow = "0px 0px  30px 15px lightgreen";
        activeplayer = 1;
        updateButtons();
        if (ts[0] >= targetToWin) {
            /* show popup */
            popover.showPopover();


            playerWon.textContent = Player1 || "Player 1 ";

            stopGame();

        }

    }


    else if (flag == 1 && activeplayer == 1) {

        ts[1] = ts[1] + cs[1];
        cs[1] = 0;
        document.getElementById("ts2").innerHTML = ts[1];
        document.getElementById("cs2").innerHTML = 0;
        boxOne.style.boxShadow = "0px 0px  30px 15px lightgreen";
        boxTwo.style.boxShadow = "";
        activeplayer = 0;
        updateButtons();
        if (ts[1] >= targetToWin) {
            /* show popup */
            playerWon.textContent = Player2 || "Player 2 ";
            popover.showPopover();



            stopGame();
        }
    }

}

// function to scroll the screen when switching players
function scrollToActiveLocation() {


    const rollTwoTop = rollBtnTwo.getBoundingClientRect().top + window.scrollY;

    const vsBottom = versusImg.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;



    if (activeplayer == 0) {
        window.scrollTo({
            top: vsBottom + 70,
            behavior: "smooth",

        });
    } else if (activeplayer == 1) {
        window.scrollTo({
            top: rollTwoTop + 50,
            behavior: "smooth",
        });
    }
}







