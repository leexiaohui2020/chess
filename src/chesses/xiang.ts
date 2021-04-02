import Chess from "../elements/chess";
import { Coord } from "../types";

class ChessXiang extends Chess {
  filterGroup = true
  transActionXY = true
  getCanMoveCoord() {
    const { x, y, chessboard } = this
    const list: Coord[] = []

    if (!chessboard.findChessByCoord(x - 1, y - 1)) {
      list.push({ x: x - 2, y: y - 2 })
    }
    if (!chessboard.findChessByCoord(x - 1, y + 1)) {
      list.push({ x: x - 2, y: y + 2 })
    }
    if (!chessboard.findChessByCoord(x + 1, y - 1)) {
      list.push({ x: x + 2, y: y - 2 })
    }
    if (!chessboard.findChessByCoord(x + 1, y + 1)) {
      list.push({ x: x + 2, y: y + 2 })
    }

    return list.filter(({ x, y }) => this.isValidCoord(x, y))
  }
}

export default ChessXiang
