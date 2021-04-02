import Chess from "../elements/chess";
import { Coord } from "../types";

class ChessShi extends Chess {
  filterHouse = true
  transActionXY = true
  getCanMoveCoord() {
    const { x, y } = this
    const list: Coord[] = [
      { x: x - 1, y: y + 1 },
      { x: x - 1, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x + 1, y: y + 1 },
    ]
    return list.filter(({ x, y }) => this.isValidCoord(x, y))
  }
}

export default ChessShi
