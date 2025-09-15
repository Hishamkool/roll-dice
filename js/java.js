let running = false;
var activeplayer = 0;
var sum = 0;
let cs = [0, 0]; //current score list
let ts = [0, 0]; //total score list
const limit = 20;
var flag = 0;


var rollBtnOne = document.getElementById("rollOne");
var holdBtnOne = document.getElementById("holdOne");
var rollBtnTwo = document.getElementById("rollTwo");
var holdBtnTwo = document.getElementById("holdTwo");

var boxOne = document.getElementById("boxone");
var boxTwo = document.getElementById("boxtwo");

var start = document.getElementById("start");
var diceLogo = document.getElementById("Face");

var versusImg = document.getElementById("versusImg");
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


    if (activeplayer == 0) {
        rollBtnOne.disabled = false;
        holdBtnOne.disabled = false;

        rollBtnTwo.disabled = true;
        holdBtnTwo.disabled = true;
        //scrolling to the first player
        // rollBtnOne.scrollIntoView();
        scrollToActiveLocation();
    }
    if (activeplayer == 1) {
        rollBtnOne.disabled = true;
        holdBtnOne.disabled = true;

        rollBtnTwo.disabled = false;
        holdBtnTwo.disabled = false;

        //scrolling to the second player
        // rollBtnTwo.scrollIntoView();
        scrollToActiveLocation();
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

    versusImg.style.height = "120px";


    if (!running) {
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
    versusImg.style.height = "40px";
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
    start.style.background = '#33B30F';
    start.value = "Start Game";

}

let diceRotation = 0;
// animating the dices
function diceRoatationAnimation() {

    // animation with rotation and scale
    // versusImg.classList.remove("diceThrown");
    // void versusImg.offsetWidth;
    // versusImg.classList.add("diceThrown");
    
    
    //animation with only rotation
    diceRotation = diceRotation + 360;
    versusImg.style.transition = ` transform 0.6s ease-out`;
    versusImg.style.transform = `rotateZ(${diceRotation}deg)`;
}


// function to roll dice for first player
function rollOne() {
    diceRoatationAnimation();

    // runing and active player = 0
    if (flag == 1 && activeplayer == 0) {


        var diceValue = Math.floor((Math.random() * 6) + 1);

        if (diceValue == 1) {
            versusImg.src = "images/1dice.png"; 

        }
        if (diceValue == 2) {
            versusImg.src = "images/2.png";
        }
        if (diceValue == 3) {
            versusImg.src = "images/3.png";
        }
        if (diceValue == 4) {
            versusImg.src = "images/4.png";
        }
        if (diceValue == 5) {
            versusImg.src = "images/5.png";
        }
        if (diceValue == 6) {
            versusImg.src = "images/6.png";
        }
        //adding values when not equal to 1
        if (diceValue != 1) {

            cs[0] = cs[0] + diceValue;
            document.getElementById("cs1").innerHTML = cs[0];

        }
        //set current score to zero when we get one on dice
        if (diceValue == 1) {
            // sum=0;
            cs[0] = 0;

            // alert("nextplayer")
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


        if (diceValue == 1) {
            versusImg.src = "images/1dice.png";

        }
        if (diceValue == 2) {
            versusImg.src = "images/2.png";
        }
        if (diceValue == 3) {
            versusImg.src = "images/3.png";
        }
        if (diceValue == 4) {
            versusImg.src = "images/4.png";
        }
        if (diceValue == 5) {
            versusImg.src = "images/5.png";
        }
        if (diceValue == 6) {
            versusImg.src = "images/6.png";
        }

        if (diceValue != 1) {

            cs[1] = cs[1] + diceValue;
            document.getElementById("cs2").innerHTML = cs[1];
        }
        if (diceValue == 1) {

            cs[1] = 0;
            // alert("nextplayer")

            document.getElementById("cs2").innerHTML = cs[1];
            boxOne.style.boxShadow = "0px 0px  30px 15px lightgreen";
            boxTwo.style.boxShadow = "";
            activeplayer = 0;
            updateButtons();
        }




    }

}


function hold() {
    if (flag == 1 && activeplayer == 0) {

        ts[0] = ts[0] + cs[0];
        cs[0] = 0;
        document.getElementById("ts1").innerHTML = ts[0];
        document.getElementById("cs1").innerHTML = 0;
        boxOne.style.boxShadow = "";
        boxTwo.style.boxShadow = "0px 0px  30px 15px lightgreen";
        activeplayer = 1;
        updateButtons();
        if (ts[0] >= 100) {
            alert("Player 1 wins");
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
        if (ts[1] >= 100) {
            alert("Player 2 wins");
            stopGame();
        }
    }

}

//function to scroll the screen when switching players
function scrollToActiveLocation() {

    const rollBtnOneLocation = rollBtnOne.getBoundingClientRect().top + window.scrollY;
    const rolBtnTwoLocation = rollBtnTwo.getBoundingClientRect().top + window.scrollY;
    const diceBottomLocation = diceLogo.getBoundingClientRect().bottom + window.scrollY;
    if (activeplayer == 0) {
        window.scrollTo({
            // top: rollBtnOneLocation - 200,
            // top: rollBtnOneLocation ,
            top: diceBottomLocation,
            behavior: "smooth",

        });
    } else if (activeplayer == 1) {
        window.scrollTo({
            top: rolBtnTwoLocation + 50,
            behavior: "smooth",
        });
    }




}





