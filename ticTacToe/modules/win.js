const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//const z = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
//const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
const z = ["X", "O", "O", "O", "X", "X", "O", "O", "O"]; // O wins
//const z=["X","X","X","O"," ","O"]; // X wins easily - unfinished game
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
  if (token == "X") {
    x.push(w);
  } else if (token == "O") {
    o.push(w);
  }
}
var winX = x.join("");
var winO = o.join("");
console.log(winX + "   " + winO);
const everyWin = [
  /012/g,
  /345/g,
  /678/g,
  /036/g,
  /147/g,
  /258/g,
  /047/g,
  /246/g
];
//console.log(everyWin[0]);
for (var s = 0; s < everyWin.length; s++)
  if (winX.match(everyWin[s])) {
    console.log("X Wins");
  } else if (winO.match(everyWin[s])) {
    console.log("O Wins");
  } else {
    console.log("Draw");
  }
