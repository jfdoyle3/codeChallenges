var z = [1, 2, 4, 3];
var found = [];
for (var i = 0; i < z.length; i++) {
  if (z[i] == 1 || z[i] == 2 || z[i] == 3) {
    found.push(z[i]);
    console.log(found + "    all numbers");
  } else {
    console.log("no numbers");
  }
}
