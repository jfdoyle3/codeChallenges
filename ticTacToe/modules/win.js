//TODO: refactor!!
const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//const z = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
//const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
//const z = ["X", "O", "O", "O", "X", "X", "O", "O", "O"]; // O wins
//const z=["X","X","X","O"," ","O"];


//const x = ["X", "O"];
for (var i = 0; i < z.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(grid[i] + "[" + z[i] + "]");
}
console.log("\n");
var x = [];
var o=[];

for (var w = 0; w < z.length; w++) {
  token = z[w];
  if (token == "X") {
    x.push(w);
  }
  if(token=="O"){
    o.push(w);
}
}
var winX = x.join("");
var winO = o.join("");
console.log (winX,winO);

const wins=[/012/g,/345/g,/678/g,/036/g,/147/g,/258/g,/047/g,/246/g];
for (var p=0; p<wins.length; p++)
if (winX.match(wins[p])) {
  console.log("X Wins");
  break;
} else if (winO.match(wins[p])){
  console.log("O Wins");
  break;
} else {
  console.log("Draw");
  break;
}
console.log("\n");

//  Notes:
// TODO: refactor to: check indexof for X/O if so, then indexof +dir to check for win : have it calculating a win of the fly.
// IDEA: TODO: after game is played make 2 arrays and pas through wins to determine win, finding out who wins after game is played.
// space/int , X  , O
// a,b,c -check for same character
// across  +1
// down  +3
// diag:\:  +4
// diag:/:  +2
//
// Win totals: 
//  123  =  6
//  456  =  15
//  789  =  24
//  = = =
//  12 15 18
//
//  159  =  15
//  357  =  15
