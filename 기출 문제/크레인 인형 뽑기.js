/* 2019 카카오 겨울 인턴 문제 */
function solution(board, moves) {
  let result = 0;
  let size = board.length;
  let basket = [];

  moves.forEach(move => {
    let count = 0;
    while(true) {
      if (board[count][move - 1] != 0) {
        if (basket.length !== 0 && basket[basket.length - 1] === board[count][move - 1]) {
          basket.pop();
          result += 2;
        } else {
          basket.push(board[count][move - 1]);
        }
        board[count][move - 1] = 0;
        break;
      }
      count++;

      if (count == size) {
        break;
      }
    }
  })
  return result;
}