import Chess from "../elements/chess";
import { Coord } from "../types";

class ChessJiang extends Chess {
  filterHouse = true

  getCanMoveCoord() {
    const { x, y } = this
    const list: Coord[] = [
      { x: x - 1, y },
      { x: x + 1, y },
      { x, y: y + 1 },
      { x, y: y - 1 },
    ]
    return list.filter(({ x, y }) => this.isValidCoord(x, y))
  }
}

export default ChessJiang
