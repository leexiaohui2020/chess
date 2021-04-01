import { Action, ChessColor } from "../types";

export default <Action>{
  label: '平',
  moveTo: true,
  content(item, num) {
    if (item.color === ChessColor.RED) {
      return [item.chessboard.MAX_X - num, item.y]
    }
    return [num, item.y]
  },
}
