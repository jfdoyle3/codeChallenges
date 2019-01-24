function move(space, token) {
  vBoard[--space] = token;
  return move;
}
const _move = move;
export { _move as move };
