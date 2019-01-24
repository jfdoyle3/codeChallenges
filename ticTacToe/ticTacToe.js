const { drawBoard } = require("./drawBoard"),
  { isValid } = require("./isValid");
drawBoard();
const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
vBoard[4] = "X";
vBoard[6] = "O";
isValid(vBoard[6]);
console.log(vBoard);

// Extra Code
//--------------
//isValid(marked);
//{ move } = require("./move"),
//{ isValid } = require("./isValid");

//
//vBoard[9] = "X";
//marked = vBoard[9];
//console.log(move(9, "O"));
