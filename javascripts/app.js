// Rover Object Goes Here
var rover = {direction:'N',x:0,y:0}
// ======================

// ======================
function turnLeft(rover){
  if(rover.direction == 'N'){
   rover.direction = 'W';
  }else if (rover.direction == 'W'){
   rover.direction = 'S';
  }
}

function turnRight(rover){
  if(rover.direction=='N'){
     rover.direction='E'
  }
}

function moveForward(rover){
  if(rover.direction=='N'){
    rover.y = rover.y - 1
  }else if(rover.direction=='S'){
    rover.y = rover.y + 1
  }
  console.log("moveForward was called")
  console.log(rover)

}

function commands(rover, a){
  for(let r=0 ; r < a.length ; r++){
     switch (a[r]){
        case 'r': turnRight(rover)
        case 'f': moveForward(rover)
        case 'l': turnLeft(rover)
     }
  }
}
commands(rover, 'rffrfflfrff')
console.log(rover)
