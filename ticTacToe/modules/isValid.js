function isValid(marked) {
  if (marked == "X" || marked == "O") {
    console.log("f");
    return false;
  } else {
    console.log("t");
    return true;
  }
}
module.exports.isValid = isValid;
