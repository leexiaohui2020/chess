import Chess from "../elements/chess";
import { Coord } from "../types";

class ChessChe extends Chess {

  getCanMoveCoord() {
    const list: Coord[] = []
    let { x, y } = this

    // 向左检查
    while (true) {
      if (!this.isValidCoord(--x, y)) break
      list.push({ x, y })
    }

    // 向右检查
    x = this.x
    y = this.y

    while (true) {
      if (!this.isValidCoord(++x, y)) break
      list.push({ x, y })
    }

    // 向上检查
    x = this.x
    y = this.y

    while (true) {
      if (!this.isValidCoord(x, ++y)) break
      list.push({ x, y })
    }

    // 向下检查
    while (true) {
      if (!this.isValidCoord(x, --y)) break
      list.push({ x, y })
    }

    return list
  }
}

export default ChessChe
