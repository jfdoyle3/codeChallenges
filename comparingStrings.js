var compare = ["bear", "this", 4];
var output = [];
var total = 0;
for (var i = 0; i < compare[2]; i++) {
  word1 = compare[0].charCodeAt(i);
  word2 = compare[1].charCodeAt(i);

  word3 = word2 - word1;
  output.push(word3);

  var total = total + output[i];
}
process.stdout.write(output.join(","));
process.stdout.write(" = " + total + "\n");
// TODO: add numbers
