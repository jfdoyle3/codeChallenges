var a = ["ab", "ba", 2];
for (var i = 0; i < a[2]; i++) {
  word1 = a[0].charCodeAt(i);
  word2 = a[1].charCodeAt(i);
  word3 = word2 - word1;
  process.stdout.write(word3);
}
// TODO: add numbers
