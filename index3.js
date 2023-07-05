var i = 0;
// var sec = 0;
// var min = 0;
// var hour = 0;
let winchance = 0;
var timeshown = 0;
var hS = [];
var j = 0;
var rowsss;
var columnsss;
var win;
//Takes the time when game is started
var countDownDate = new Date().getTime();

// Displays Time
var x = setInterval(function() {
    // Get today's date and time
   var now = new Date();    
    // Find the distance between now and the count down date
    var distance = now.getTime() - countDownDate;
     days = Math.floor(distance / (1000));
    document.getElementById("timee").innerHTML = days + "s "
  }, 1000);
  // Displays the time when the game is won
  let fun = () => {
    var now2 = new Date();      
    // Find the distance between now and the count down date
    var distance2 =   now2.getTime() - countDownDate;
    const sec1 = Math.floor(distance2 / (1000));
    localStorage.setItem('hS[j]',sec1);
    document.getElementById("timee1").innerHTML = sec1 + " s "
      
  }

//Swaps the slected box wit empty one
let change = (row,column) =>{
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if(tile != "tile9"){
        if (column<3){
            if(document.getElementById("cell"+row+(column+1)).className =="tile9"){
             swap("cell"+row+column,"cell"+row+(column+1));
             i++;
             document.getElementById('moves').innerHTML = i;
             return;           
            }
            if((column+1)<3){
                if(document.getElementById("cell"+row+(column+2)).className == "tile9"){
                 swap("cell"+row+(column+1),"cell"+row+(column+2));
                 i++;
                 swap("cell"+row+column,"cell"+row+(column+1));
                 i++;
                 document.getElementById('moves').innerHTML = i;
                 return;
                 }
            }
             
        }
        
    
       
        if(row<3){
            if(document.getElementById("cell"+(row+1)+column).className =="tile9"){
                swap("cell"+row+column,"cell"+(row+1)+column);
                i++;
                document.getElementById('moves').innerHTML = i;
                return;
            }
            if((row+1)<3){
                if(document.getElementById("cell"+(row+2)+column).className == "tile9"){
                    swap("cell"+(row+1)+column,"cell"+(row+2)+column);
                    i++;
                    swap("cell"+row+column,"cell"+(row+1)+column);
                    i++;
                    document.getElementById('moves').innerHTML = i;
                    return;
                }
            }
        }

        if(row>1){
            if(document.getElementById("cell"+(row-1)+column).className =="tile9"){
                swap("cell"+row+column,"cell"+(row-1)+column);
                i++;
                document.getElementById('moves').innerHTML = i;
                return;
            }
            if((row-1)>1){
                if(document.getElementById("cell"+(row-2)+column).className == "tile9"){
                    swap("cell"+(row-1)+column,"cell"+(row-2)+column);
                    i++;
                    swap("cell"+row+column,"cell"+(row-1)+column);
                    i++;
                    document.getElementById('moves').innerHTML = i;
                    return;
                }
            }
        }
            
        if(column>1){
            if(document.getElementById("cell"+row+(column-1)).className =="tile9") {
                swap("cell"+row+column,"cell"+row+(column-1));
                i++;
                document.getElementById('moves').innerHTML = i;
                return;
            }
        
         if((column-1)>1){
            if(document.getElementById("cell"+row+(column-2)).className == "tile9"){
             swap("cell"+row+(column-1),"cell"+row+(column-2));
             i++;
             swap("cell"+row+column,"cell"+row+(column-1));
             i++;
             document.getElementById('moves').innerHTML = i;
             return;
            }
          }
        }
    }
}

// Swaps the two selected boxes
function swap(cell1,cell2){
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

// Shuffles the boxes when we start the game
function shuffle() { 
    let row = 1;
    let column = 1;
    for( row = 1;row<=3;row++){
        for( column = 1;column<=3;column++){
            let row2 = Math.round(Math.random()*3 + 1);
            let column2 = Math.round(Math.random()*3 + 1);
            while(row2 == row && column == column2){
                row2 = Math.round(Math.random()*3 + 1);
                column2 = Math.round(Math.random()*3 + 1);
            }
            swap("cell"+row+column,"cell"+row2+column2);
            document.getElementById('moves').innerHTML = i;
            let timer = document.getElementById('timee');
            timer.style.display = 'block';
            btn.innerHTML = "Restart";
            let timenmoves = document.getElementById('timenmoves');     
            timenmoves.style.display = "flex";     
            winchance++;    
            let level = document.getElementById('level');
            level.style.display = "none";
            timeshown = 0;
            document.getElementById('timee1').style.display = "none";
            countDownDate = new Date().getTime();
            i = 0;
        }
    }
}

// Changes bgcolor of box if is at correct position
function color(){
    for(var rows = 1;rows<=3;rows++){
        for(columns = 1;columns<=3;columns++){
            let pos = (3*(rows-1))+columns;
            if(document.getElementById("cell"+rows+columns).className == "tile"+pos){
              document.getElementById("cell"+rows+columns).style.backgroundColor = "green";
            }
             else{
                 document.getElementById("cell"+rows+columns).style.backgroundColor = "brown";
            }
        }
    }
}
//Checks for correct position after every 100ms
setInterval(color,100);
// Takes input from keyboard
window.addEventListener("keydown", (e) =>{
 switch (e.key) {
     case 'ArrowLeft' :
         leftKey();
         break;
    case 'ArrowUp':
         upKey();
         break;
    case 'ArrowRight':
         rightKey();
         break;
    case 'ArrowDown':
         downKey();
         break;
  }
 });

var rowss;
var columnss;
function upKey(){
    for(rowss=2;rowss < 4;rowss++){
        for(columnss=1;columnss<4;columnss++){
            if(document.getElementById("cell"+rowss+columnss).className == "tile9"){
                swap("cell"+rowss+columnss,"cell"+(rowss-1)+columnss);
                i++;
                document.getElementById('moves').innerHTML = i;
            }
        }
    }
  }
 function downKey(){
     for(rowss=1;rowss <3;rowss++){
        for(columnss=1;columnss<4;columnss++){
            if(document.getElementById("cell"+rowss+columnss).className == "tile9"){
             swap("cell"+rowss+columnss,"cell"+(rowss+1)+columnss);
             i++;
             document.getElementById('moves').innerHTML = i;
             break;
            }
        }
    }
 }
 function leftKey(){
      for(rowss=1;rowss < 4;rowss++){
          for(columnss=2;columnss<4;columnss++){
             if(document.getElementById("cell"+rowss+columnss).className == "tile9"){
              swap("cell"+rowss+columnss,"cell"+rowss+(columnss-1));
              i++;
              document.getElementById('moves').innerHTML = i;
            }
        }
      }     
}
 function rightKey(){
         for(rowss=1;rowss<4;rowss++){
             for(columnss=1;columnss<3;columnss++){
                 if(document.getElementById("cell"+rowss+columnss).className == "tile9"){
                 swap("cell"+rowss+columnss,"cell"+rowss+(columnss+1));
                 i++;
                 document.getElementById('moves').innerHTML = i;
                 break;
                 }
            }
        }
 }
//Redirects to 3X3 Puzzle
 let moveTo3X3 = () => {
    location.replace("index3.html")
 }
 //Redirects to 4X4 Puzzle
 let moveTo4X4 = () => {
    location.replace("index.html")
 }
 //Redirects to 5X5 Puzzle
 let moveTo5X5 = () => {
    location.replace("index.html")
 }
//Checks if Won
function checkWin(){
     win = 0;
     if(winchance > 0 ){
        for(rowsss=1;rowsss<4;rowsss++){
            for(columnsss=1;columnsss<4;columnsss++){
              let  tilepos = (3*(rowsss-1))+columnsss;
                //If box is at correct position then increments the value of win
                if(document.getElementById("cell"+rowsss+columnsss).className == "tile"+tilepos){
                   win++;
                  }
                else {break;}
             }
        }
        //when all boxes is at correct position  then value of win = 16 so displays a message of winning
      if(win == 9 ){
         document.getElementById('win').innerHTML = " Congoo !!! You Won!!" ;
         timeshown++;
         if(timeshown == 1){
              document.getElementById('timee1').style.display = "block";  
             fun();
             document.getElementById('timee').style.display = "none"; 
             //Storing data in browser storage
             if(typeof(Storage) !== 'undefined'){
               var parElement = document.getElementById("highScore");
               var para =  document.createElement("li");
               para.innerHTML = localStorage.getItem('hS[j]')+"seconds"; 
               parElement.appendChild(para);
               j++;
              }
            }
        }
        //There is a case when all boxes is at correct postion when we first open the page 
      else {
         document.getElementById('win').innerHTML = "";
        
        }
      
    }
}
setInterval(checkWin,100); 

//Shows previous scores
function showPrevScore(){
    // j != 0 when user had won any game
    if(j != 0){
     document.getElementById('highScore').style.display = "block";
     document.getElementById('noneScore').style.display = "none";
    }
  if(j == 0) {
    document.getElementById('noneScore').style.display = "block";
      document.getElementById('noneScore').innerHTML = "You haven't completed any game";
  }
  
}


