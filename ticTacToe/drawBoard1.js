drawBoard(3, 3);
play(1, 2, "X");
function play(x, y, mark) {
  //var vBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  //vBoard[x][y] = mark;
  //  vBoard[0][0] = "X";
  var vBoard=[1,2,3,4,5,6,7,8,9];
 for (var i=1; i<=vBoard.length; i++){
   console.log(i);
 }

  
}
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
        space % 2 !== 0 ? process.stdout.write(board.space) : process.stdout.write(board.line);
    }
    process.stdout.write("\n");
    if (grid % 2 == 0 || grid == 1) {
      for (var divider = 1; divider <= board.down + 2; divider++) {
        var dividerDown =
          divider % 2 !== 0 ? process.stdout.write(board.dash) : process.stdout.write(board.plus);
      }
      process.stdout.write("\n");
    }
  }
  // console.log("\n", board);
}
