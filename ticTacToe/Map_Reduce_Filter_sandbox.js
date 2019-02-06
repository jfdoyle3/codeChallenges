//const drawBoard = () => {
const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//const z = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
//const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
//const z = ["X", "O", "X", "O", "X", "X", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "O", "O", "X"]; // X wins diag 0,4,8
//const z = ["O", "X", "O", "X", "O", "O", "X", "X", "O"]; // O wins diag 0,4,8
//const z = ["X", "O", "O", "O", "O", "X", "O", "O", "O"]; // O wins diag 2,4,6
const z = [" ", " ", " ", " ", "O", "X", "O", "O", "O"]; // X Win
//
for (var i = 0; i < z.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(grid[i] + "[" + z[i] + "]");
}
console.log("\n");
var token = z.map(token => {
  return token === "X";
});

console.log(token);
let wins = ["012", "123"];

if (token[0] && token[1] && token[2]) {
  console.log("X Win");
}

//for (var i = 0; i < xPlace.length; i++) {
//}
// console.log("\n");\\
// console.log(xLoCal);
//};
//module.exports.wins = wins;
