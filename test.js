drawBoard(6, 2);

function drawBoard(across, down) {
  var board = {
    across: across,
    down: down,
    space: "X",
    dash: "-",
    plus: "+",
    line: "|"
  };

  for (var space = 1; space <= board.across; space++) {
    var spaceAcross =
      space % 2 !== 0
        ? process.stdout.write(board.space)
        : process.stdout.write(board.line);
  }

  console.log("\n", board);
}
