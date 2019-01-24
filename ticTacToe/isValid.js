function isValid(...marked) {
  if (marked == "X" || marked == "O") {
    console.log("invalid move");
    return false;
  } else {
    console.log("vaild move");
    return true;
  }
}
module.exports.isValid = isValid;
