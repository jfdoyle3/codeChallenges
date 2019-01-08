drawBoard(0, 5);

function drawBoard(across, down) {
  for (var i = 1; i <= down; i++) {
    var even = i % 2 == 0 ? console.log("-+-+-") : console.log(" | | ");
  }
}
