function move(space, token) {
  vBoard[--space] = token;
  return move;
}
module.exports.move=move;
