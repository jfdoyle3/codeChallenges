const { drawBoard } = require("./drawBoard"),
  { isValid } = require("./isValid");
drawBoard();
const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
vBoard[4] = "X";
vBoard[6] = "O";
console.log(vBoard);
isValid(vBoard[6]);
