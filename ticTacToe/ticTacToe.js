const { drawBoard } = require("./modules/drawBoard"),
  { isValid } = require("./modules/isValid"),
  { move } = require("./modules/move"),
  vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
token = ["X", "O"];
drawBoard();

//const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
vBoard[4] = "X";
vBoard[6] = "O";
move(vBoard, token);
console.log(vBoard);

//win(a,b,c);
//process.stdout.write("\nCan I play in position? " + p2 + "  ");
//isValid(vBoard[p2]);
//
// space , X  , O
// a,b,c -check for same character
// across  +1
// down %3 +3
// diag:\: %4 +4
// diag:/: %2 +2
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
//
//
//
//const readline = require("readline");
//const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});
//
//rl.question("What do you think of Node.js? ", answer => {
// TODO: Log the answer in a database
//  console.log(`Thank you for your valuable feedback: ${answer}`);
//
// rl.close();
//});
//
//const readline = require("readline");
//var rl = readline.createInterface(process.stdin, process.stdout);
//rl.setPrompt("guess> ");
//rl.prompt();
//rl.on("line", function(line) {
//  if (line === "right") rl.close();
//  rl.prompt();
//}).on("close", function() {
//  process.exit(0);
//});
//
