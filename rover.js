var myRover = {
  position: [0,0],
  direction: 'N'
};



//-----------
// Set up of goForward
function goForward(rover){

  switch(rover.direction) {

    case 'E':
      rover.position[0]++;
    break;

    case 'N':
      rover.position[1]++;
    break;

    case 'W':
      rover.position[0]--;
    break;

    case 'S':
      rover.position[1]--;
    break;
  }

  backToMap(rover);
  askDirection();
}
//-----------





//-----------
// Set up of goBackward
function goBackward(rover){

  switch(rover.direction) {

    case 'E':
      rover.position[0]--;
    break;

    case 'N':
      rover.position[1]--;
    break;

    case 'W':
      rover.position[0]++;
    break;

    case 'S':
      rover.position[1]++;
    break;
  }

  backToMap(rover);
  askDirection();
}
//-----------




//-----------
// Set up of turnRight
function turnRight(rover){

switch(rover.direction) {

  case 'N':
    rover.direction = 'E';
  break;

  case 'E':
    rover.direction = 'S';
  break;

  case 'S':
    rover.direction = 'W';
  break;

  case 'W':
    rover.direction = 'N';
  break;
}
//backToMap(rover0, rover1);
askDirection();
}
//-----------








//-----------
// Set up of turnLeft
function turnLeft(rover){

 switch(rover.direction) {

   case 'N':
     rover.direction = 'W';
   break;

   case 'E':
     rover.direction = 'N';
   break;

   case 'S':
     rover.direction = 'E';
   break;

   case 'W':
     rover.direction = 'S';
   break;
 }
 //backToMap(rover0, rover1);
 askDirection();
}
//-----------



//-----------
// SET UP OF THE PROMPT
function askDirection (){
var answer = prompt ('Your are at position ' + myRover.position + ' and orientation ' + myRover.direction +
' Where do you wanna go? "F" for Forward, "B" for Backwards, "R" to turn right and "L" to turn left.' );



// SET UP OF THE ANSWER
switch (answer){

    case "f":
      goForward(myRover);
    break;
    case "F":
      goForward(myRover);
     break;

    case "b":
      goBackward(myRover);
    break;
    case "B":
      goBackward(myRover);
    break;

    case "r":
      turnRight(myRover);
    break;
    case "R":
      turnRight(myRover);
    break;

    case "l":
      turnLeft(myRover);
    break;
    case "L":
      turnLeft(myRover);
    break;
  }
}
//-----------



askDirection();




//-----------
//MAP WRAPPING FUNCTION
function backToMap(rover1){

console.log(rover1);


  switch (rover1.position[0]){

    case 11:
      rover1.position[0]=0;
      console.log('You were saved from the abysm');
    break;

    case -1:
      rover1.position[0]=10;
      console.log('You were saved from the abysm');
    break;

  }//-----------End Switch myRover.position[0]

  switch (rover1.position[1]){

    case -11:
      rover1.position[1]=0;
      console.log('You were saved from the abysm');
    break;

    case 1:
      rover1.position[1]=-10;
      console.log('You were saved from the abysm');
    break;

  }//-----------End Switch myRover.position[1]
}
//---------------- End function backToMap
