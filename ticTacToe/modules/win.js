const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//const z = ["X", "O", "X", "X", "O", "O", "X", " ", " "]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
//const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
//const z = ["X", "O", "O", "O", "X", "X", "O", "O", "O"]; // O wins
const z = ["X", "O", "O", "O", "X", "X", "O", "O", "X"]; // X wins diag 0,4,8
//const z = ["X", "O", "O", "O", "O", "X", "O", "O", "O"]; // O wins diag 2,4,6
//const z = [" ", " ", " ", " ", "O", "X", "O", "O", "O"]; // X Win
//
for (var i = 0; i < z.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(grid[i] + "[" + z[i] + "]");
}
console.log("\n");

var x = [];
var o = [];

for (var w = 0; w < z.length; w++) {
  var token = z[w];
  if (token == "X" || token == "x") {
    x.push(w);
  } else if (token == "O" || token == "o") {
    o.push(w);
  }
}
var winX = x.join("");
var winO = o.join("");
console.log(winX+"   "+winO);
const everyWin=[/012/g,/345/g,/678/g,/036/g,/147/g,/258/g,/047/g,/246/g];
console.log(everyWin[0]);
for (var s=0; s<.length; s++)
if (winX.match(everyWin[spaces])) {
      console.log("X Wins");
      break;
    } else if (winO.match(everyWin[spaces])){
  console.log("O Wins");
  break;
    } else {
  console.log("Draw");
   break;
  }
console.log("X: " + winX + " | O: " + winO);
// Process string remove useless moves /sort win
//console.log(winX+" | "+winO);

var wins=[1,2,3,4];
for (var p=0; p<z.length; p++){
  for (var a=0; a<wins.length; a++){
  if (z[p]=="X" ){ 
   var e=[];

  }
   }
 }

//    /(?!.*[567])(?=.*048)/g
//const allWins = [/012/g, /345/g, /678/g, /036/g, /147/g, /258/g, /048/g, /246/g];
//const allWins = [/012/g, /345/g, /678/g, /036/g, /147/g, /258/g, /048/g, /246/g];
//
//for (var result = 0; result < allWins.length; result++) {
//
//  if (winX.match(allWins[result])) {
//    console.log("found: " + allWins[result] + " X Wins");
//    break;
//  } else if (winO.match(allWins[result])) {
//    console.log("found: " + allWins[result] + " O Wins");
//    break;
//  }
//}
