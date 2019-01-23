const vBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//drawBoard(3, 3);
vBoard[9] = "X";
//play(9, "O");
console.log(vBoard);
isValid(0);

function isValid(marked) {
  console.log(vBoard[marked]);
  if (vBoard[marked] == "X" || vBoard[marked] == "O") {
    console.log("invalid move");

    return false;
  } else {
    console.log("vaild move");
    return true;
  }
}
//function play(move, token) {
// vBoard[--move] = token;
// return vBoard;
//}
function drawBoard(across, down) {
  var board = {
    across: across,
    down: down,
    space: "X",
    dash: "-",
    plus: "+",
    line: "|"
  };

  for (var grid = 1; grid <= board.down; grid++) {
    for (var space = 1; space <= board.across + 2; space++) {
      var spaceAcross =
        space % 2 !== 0
          ? process.stdout.write(board.space)
          : process.stdout.write(board.line);
    }
    process.stdout.write("\n");
    if (grid % 2 == 0 || grid == 1) {
      for (var divider = 1; divider <= board.down + 2; divider++) {
        var dividerDown =
          divider % 2 !== 0
            ? process.stdout.write(board.dash)
            : process.stdout.write(board.plus);
      }
      process.stdout.write("\n");
    }
  }
}
