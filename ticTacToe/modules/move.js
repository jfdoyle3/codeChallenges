const move=(vBoard, token)=> {
  const readline = require("readline"),
    rl = readline.createInterface(process.stdin, process.stdout);
  //  rl.question("Move " + token[0] + " ", move => {
  rl.setPrompt("Move " + token[0]);
  rl.prompt();
  rl.on("line", vBoard => {
    console.log(token[0] + ` has been placed at ${move}`);
    vBoard[move] = token[0];
    console.log(vBoard);
    for (var i = 0; i < vBoard.length; i++) {
      if (i % 3 == 0) {
        process.stdout.write("\n");
      }
      process.stdout.write(vBoard[i] + " ");
    }
    rl.close();
  });
  //  });
};
module.exports.move = move;

//rl.setPrompt("guess> ");
//rl.prompt();
//rl.on("line", function(line) {
//  if (line === "right") rl.close();
//  rl.prompt();
//}).on("close", function() {
//  process.exit(0);
//});
