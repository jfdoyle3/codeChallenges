const {drawBoard}=require('./drawBoard');
const {isValid}=require('./isValid');
console.log(drawBoard(3, 3));
const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 vBoard[3]="X";
isValid()
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
