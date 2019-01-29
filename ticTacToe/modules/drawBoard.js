const drawBoard = () => {
  var board = {
    across: 3,
    down: 3,
    space: " ",
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
};
module.exports.drawBoard = drawBoard;
