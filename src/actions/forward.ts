import { Action, ChessColor } from "../types";

export default <Action>{
  label: '进',
  content(item, num) {
    if (item.color === ChessColor.RED) {
      return [item.x, item.y + num]
    }
    return [item.x, item.y - num]
  },
}
