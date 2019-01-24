function isValid(marked) {
  if (marked == "X" || marked == "O") {
    console.log("invalid move");
    return false;
  } else {
    console.log("vaild move");
    return true;
  }
}
const _isValid = isValid;
export { _isValid as isValid };
