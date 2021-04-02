import Chess from "../elements/chess";
import { Coord } from "../types";

class ChessMa extends Chess {
  transActionXY = true
  getCanMoveCoord() {
    const { x, y, chessboard } = this
    const list: Coord[] = []

    if (!chessboard.findChessByCoord(x - 1, y)) {
      list.push({ x: x - 2, y: y + 1 })
      list.push({ x: x - 2, y: y - 1 })
    }

    if (!chessboard.findChessByCoord(x + 1, y)) {
      list.push({ x: x + 2, y: y + 1 })
      list.push({ x: x + 2, y: y - 1 })
    }

    if (!chessboard.findChessByCoord(x, y - 1)) {
      list.push({ x: x + 1, y: y - 2 })
      list.push({ x: x - 1, y: y - 2 })
    }

    if (!chessboard.findChessByCoord(x, y + 1)) {
      list.push({ x: x + 1, y: y + 2 })
      list.push({ x: x - 1, y: y + 2 })
    }

    return list.filter(({ x, y }) => this.isValidCoord(x, y))
  }
}

export default ChessMa
