let running =false;
var activeplayer=0;
var sum=0;
let cs=[0,0];
let ts=[0,0];
const limit=20;
var flag=0;


function GameStart(){
    
     var start=document.getElementById("start");
    cs[0]=0;
    cs[1]=0;
    ts[0]=0;
    ts[1]=0;
    document.getElementById("cs2").innerHTML = 0;
    document.getElementById("cs1").innerHTML = 0;
    document.getElementById("ts1").innerHTML = 0;
    document.getElementById("ts2").innerHTML = 0;

    if(!running){
        flag=1;

        
        // alert("Game has started");
        start.style.background = 'red ';
        start.value="STOP";
            if(activeplayer==0){
                document.getElementById("boxone").style.boxShadow="0px 0px  30px 15px lightgreen";
                document.getElementById("boxtwo").style.boxShadow="";
            }
            if(activeplayer==1){
                document.getElementById("boxone").style.boxShadow="";
                document.getElementById("boxtwo").style.boxShadow="0px 0px  30px 15px lightgreen";
            }
            
        running=true;

        
    }
    else if(running){   
        flag=0;
        // alert("Game has stopped");
        start.style.background = '#33B30F';
        start.value="START"; 
        document.getElementById("boxone").style.boxShadow="";
        document.getElementById("boxtwo").style.boxShadow="";
        activeplayer=0;
        running=false;
        
    }
    if(flag==0){
        document.getElementById("Face").src="images/Red-Dice-PNG-Transparent-File.png"
    }

}
function rollOne(){
    if(flag==1 && activeplayer==0){

        // var df=document.getElementById("Face");
        // df.style.color= 'white';
        var no = Math.floor((Math.random() *6) +1);
        
        // document.getElementById("boxone").style.boxShadow="0px 0px  30px 15px lightgreen";
        if(no==1){
            document.getElementById("Face").src="images/1.png";
            // sum=0;
            // cs[activeplayer]=sum;
            // document.getElementById("cs1").innerHTML = cs[1];
            // activeplayer=1;
            // document.getElementById("boxone").style.boxShadow="";
            // document.getElementById("boxtwo").style.boxShadow="0px 0px  30px 15px lightgreen";
        }
        if(no==2){
            document.getElementById("Face").src="images/2.png";
        }
        if(no==3){
            document.getElementById("Face").src="images/3.png";
        }
        if(no==4){
            document.getElementById("Face").src="images/4.png";
        }
        if(no==5){
            document.getElementById("Face").src="images/5.png";
        }
        if(no==6){
            document.getElementById("Face").src="images/6.png";
        }
    
        if(no!=1 ){
            
            cs[0]=cs[0]+no;
            document.getElementById("cs1").innerHTML = cs[0];
            
        } 
        if(no==1){
            // sum=0;
            cs[0]=0;

            // alert("nextplayer")
            document.getElementById("cs1").innerHTML = cs[0];
            document.getElementById("boxone").style.boxShadow="";
            document.getElementById("boxtwo").style.boxShadow="0px 0px  30px 15px lightgreen";
            activeplayer=1;
        } 
        
        // if(no!=1 && activeplayer==1){
        //     cs[activeplayer]=cs[activeplayer]+no;
        //     document.getElementById("cs2").innerHTML = cs;
        // } 
        

    }
    
}

function rollTwo(){
    if(flag==1 && activeplayer==1){

        var no=Math.floor((Math.random() *6) +1);
        
        
        if(no==1){
            document.getElementById("Face").src="images/1.png";
          
        }
        if(no==2){
            document.getElementById("Face").src="images/2.png";
        }
        if(no==3){
            document.getElementById("Face").src="images/3.png";
        }
        if(no==4){
            document.getElementById("Face").src="images/4.png";
        }
        if(no==5){
            document.getElementById("Face").src="images/5.png";
        }
        if(no==6){
            document.getElementById("Face").src="images/6.png";
        }
    
        if(no!=1 ){
            
            cs[1]=cs[1]+no;
            document.getElementById("cs2").innerHTML = cs[1];
        } 
        if(no==1 ){
            
            cs[1]=0;
            // alert("nextplayer")
           
            document.getElementById("cs2").innerHTML = cs[1];
            document.getElementById("boxone").style.boxShadow="0px 0px  30px 15px lightgreen";
            document.getElementById("boxtwo").style.boxShadow="";
            activeplayer=0;
        } 
        
      
        

    }
    
}


function hold(){
    
    
        
    if(flag==1 && activeplayer==0){
            
            ts[0]=ts[0]+cs[0];
            cs[0]=0;
            document.getElementById("ts1").innerHTML =ts[0];
            document.getElementById("cs1").innerHTML = 0;
            document.getElementById("boxone").style.boxShadow="";
            document.getElementById("boxtwo").style.boxShadow="0px 0px  30px 15px lightgreen";
            activeplayer=1;
            if(ts[0]>=100){
                alert("Player 1 wins")
            }

    }

    
    else if(flag==1 && activeplayer==1){
            
            ts[1]=ts[1]+cs[1];
            cs[1]=0; 
            document.getElementById("ts2").innerHTML =ts[1];
            document.getElementById("cs2").innerHTML = 0;
            document.getElementById("boxone").style.boxShadow="0px 0px  30px 15px lightgreen";
            document.getElementById("boxtwo").style.boxShadow="";
            activeplayer=0;
            
            if(ts[1]>=100){
                alert("Player 2 wins")
            }
    }

}

    

