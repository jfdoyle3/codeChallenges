const { drawBoard } = require("./drawBoard"),
  { isValid } = require("./isValid");
drawBoard();
const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var p1 = 2;
var p2 = 5;
vBoard[p1] = "X";
vBoard[p2] = "O";
for (var i = 0; i < vBoard.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(vBoard[i] + " ");
}
process.stdout.write("\nCan I play in position? " + ++p2 + "  ");
isValid(vBoard[--p2]);
