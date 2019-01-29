var a, b, c, i, token, places, spot;
const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//const z = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]; // X wins
//const z = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]; // O wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; //Draw
const z = ["O", "X", "O", "X", "X", "X", "X", "O", "O"]; // X wins
//const z = ["X", "O", "O", "O", "X", "X", "X", "O", "O"]; // O wins
//const z=[1,2,3,4,5,6,7,8,9];
//const z=[[1,2,3],[4,5,6],[7,8,9]];
//const z=[["X,"X","X"],["X","X","X"],["X","X","X"]];

//const x = ["X", "O"];
for (var i = 0; i < z.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(grid[i] + "[" + z[i] + "]");
}
console.log("\n");

for (var w = 0; w < z.length; w++) {
  token = z[w];
  places = w.toString();
  //process.stdout.write();
  console.log(typeof places);
  if (token == "X") {
    process.stdout.write(places);
    //console.log(win);
    //console.log("Win!");
  }
}
console.log("\n");
//i = 0;
//while (i < z.length) {
// across
//    if (z[i] == "X" && z[i] == "X" && z[i] == "X") {
//console.log("Wins!!! ");
//    break;
//  }
//  i++;
//}

//  Notes:
// math works as a 1 base index.
// space/int , X  , O
// a,b,c -check for same character
// across  +1
// down  +3
// diag:\:  +4
// diag:/:  +2
//
// Win totals
//  123  =  6
//  456  =  15
//  789  =  24
//  = = =
//  12 15 18
//
//  159  =  15
//  357  =  15
