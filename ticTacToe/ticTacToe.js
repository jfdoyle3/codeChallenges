const { drawBoard } = require("./drawBoard");
// const { move } = require("./move");
// const { isValid } = require("./isValid");

const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
vBoard[9] = "X";
marked = vBoard[9];
// console.log(move(9, "O"));

console.log(drawBoard(3, 3));
// isValid(marked);
