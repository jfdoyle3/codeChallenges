//const drawBoard = () => {
const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//const z = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
//const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
const z = ["X", "O", "O", "O", "X", "X", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "O", "O", "X"]; // X wins diag 0,4,8
//const z = ["X", "O", "O", "O", "O", "X", "O", "O", "O"]; // O wins diag 2,4,6
//const z = [" ", " ", " ", " ", "O", "X", "O", "O", "O"]; // X Win
//
for (var i = 0; i < z.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(grid[i] + "[" + z[i] + "]");
}
var xPlace = z.map(x => {
  return x === "X";
});
console.log(xPlace);
//for (var i = 0; i < xPlace.length; i++) {
console.log(xPlace[0]);
//}
// console.log("\n");\\
// console.log(xLoCal);
//};
//module.exports.wins = wins;
