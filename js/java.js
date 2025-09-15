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
    }
    if (activeplayer == 1) {
        rollBtnOne.disabled = true;
        holdBtnOne.disabled = true;

        rollBtnTwo.disabled = false;
        holdBtnTwo.disabled = false;
    }

}

// when start button is clicked
function GameStart() {


    cs[0] = 0;
    cs[1] = 0;
    ts[0] = 0;
    ts[1] = 0;
    document.getElementById("cs2").innerHTML = 0;
    document.getElementById("cs1").innerHTML = 0;
    document.getElementById("ts1").innerHTML = 0;
    document.getElementById("ts2").innerHTML = 0;

    if (!running) {
        flag = 1;
        // alert("Game has started");
        start.style.background = 'red ';
        start.value = "STOP";
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
        diceLogo.src = "images/Red-Dice-PNG-Transparent-File.png";

    }


}

// function to stop game
function stopGame() {
    running = false;
    flag = 0;
    activeplayer = 0;

    disableAllButtons();

    boxOne.style.boxShadow = "";
    boxTwo.style.boxShadow = "";
    diceLogo.src = "images/Red-Dice-PNG-Transparent-File.png";
    start.style.background = '#33B30F';
    start.value = "START";

}


function rollOne() {
    if (flag == 1 && activeplayer == 0) {

        // var df=diceLogo;
        // df.style.color= 'white';
        var no = Math.floor((Math.random() * 6) + 1);

        // boxOne.style.boxShadow="0px 0px  30px 15px lightgreen";
        if (no == 1) {
            diceLogo.src = "images/1.png";

        }
        if (no == 2) {
            diceLogo.src = "images/2.png";
        }
        if (no == 3) {
            diceLogo.src = "images/3.png";
        }
        if (no == 4) {
            diceLogo.src = "images/4.png";
        }
        if (no == 5) {
            diceLogo.src = "images/5.png";
        }
        if (no == 6) {
            diceLogo.src = "images/6.png";
        }
        //adding values when not equal to 1
        if (no != 1) {

            cs[0] = cs[0] + no;
            document.getElementById("cs1").innerHTML = cs[0];

        }
        //set current score to zero when we get one on dice
        /*   if (no == 1) {
              // sum=0;
              cs[0] = 0;
  
              // alert("nextplayer")
              document.getElementById("cs1").innerHTML = cs[0];
              boxOne.style.boxShadow = "";
              boxTwo.style.boxShadow = "0px 0px  30px 15px lightgreen";
              activeplayer = 1;
              updateButtons();
          } */




    }

}

function rollTwo() {
    if (flag == 1 && activeplayer == 1) {

        var no = Math.floor((Math.random() * 6) + 1);


        if (no == 1) {
            diceLogo.src = "images/1.png";

        }
        if (no == 2) {
            diceLogo.src = "images/2.png";
        }
        if (no == 3) {
            diceLogo.src = "images/3.png";
        }
        if (no == 4) {
            diceLogo.src = "images/4.png";
        }
        if (no == 5) {
            diceLogo.src = "images/5.png";
        }
        if (no == 6) {
            diceLogo.src = "images/6.png";
        }

        if (no != 1) {

            cs[1] = cs[1] + no;
            document.getElementById("cs2").innerHTML = cs[1];
        }
        /*   if (no == 1) {
  
              cs[1] = 0;
              // alert("nextplayer")
  
              document.getElementById("cs2").innerHTML = cs[1];
              boxOne.style.boxShadow = "0px 0px  30px 15px lightgreen";
              boxTwo.style.boxShadow = "";
              activeplayer = 0;
              updateButtons();
          } */




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



