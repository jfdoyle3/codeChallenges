function isValid(marked) {
  console.log(vBoard[marked]);
  if (vBoard[marked] == "X" || vBoard[marked] == "O") {
    console.log("invalid move");
    return false;
  } else {
    console.log("vaild move");
    return true;
  }
}
