const z = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
//const z= ["O", "O", "O", "O", "O", "O", "O", "O", "O"];
//const draw = ["X", "O", "O", "O", "X", "X", "X", "O", "O"];
//const z = ["X","X","X","X","X","X","X","X","X"];
//const z = ["X","X","X","X","X","X","X","X","X"];

for (var i = 0; i < z.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(z[i] + " ");
}
console.log("\n");
