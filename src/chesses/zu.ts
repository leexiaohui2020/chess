import Chess from "../elements/chess";
import { ChessColor, Coord } from "../types";

class ChessZu extends Chess {

  get isInGroup() {
    return this.chessboard.isGroupCoord(this.x, this.y, this.color)
  }

  getCanMoveCoord() {
    const { x, y } = this
    const list: Coord[] = []

    if (this.color === ChessColor.RED) {
      list.push({ x, y: y + 1 })
    } else {
      list.push({ x, y: y - 1 })
    }

    if (!this.isInGroup) {
      list.push({ x: x - 1, y })
      list.push({ x: x + 1, y })
    }
    return list.filter(({ x, y }) => this.isValidCoord(x, y))
  }
}

export default ChessZu
