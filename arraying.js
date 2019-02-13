const a = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const b = [258];
const c = [1, 2, 3, 4];
const d = ["_", "_", "X", "_", "_", "X", "_", "_", "X"];

// Draw Board
for (var i = 0; i < a.length; i++) {
  if (i % 3 == 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(a[i]);
}
process.stdout.write("\n");

//Determine Win

let moves = 9;

while (i < moves) {
  let find = "X";
  if (d[i] == find) {
  }
  i++;
}
