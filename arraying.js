const a = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const b = ["048"];
const c = [1, 2, 3, 4];
const d = ["_", "_", "X", "_", "_", "X", "_", "_", "X"];
//various boards
//const z = ["X", "O", "X", "X", "O", "O", "X", " ", " "]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
//const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
//const z = ["X", "O", "O", "O", "X", "X", "O", "O", "O"]; // O wins
const z = ["X", "O", "O", "O", "X", "X", "O", " ", "X"]; // X wins diag 0,4,8
//const z = ["X", "O", "O", "O", "O", "X", "O", "O", "O"]; // O wins diag 2,4,6
//const z = [" ", " ", " ", " ", "O", "X", "O", "O", "O"]; // O Win

// Draw Board
for (var i = 0; i < a.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(z[i]);
}
process.stdout.write("\n");

//Determine Win

let moves = 9;

let x = [];
let o = [];
var i = 0;
while (i < moves) {
  if (z[i] === "X") {
    x.push(i);
  } else {
    if (z[i] === "O") {
      o.push(i);
    }
  }
  i++;
}
console.log("x: ", x);
console.log("o: ", o);
console.log("win: ", b);
let zz = x[0] + c[3];
console.log(zz);
