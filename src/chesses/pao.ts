import Chess from "../elements/chess";
import { Coord } from "../types";

class ChessPao extends Chess {
  getCanMoveCoord() {
    const list: Coord[] = []
    const { chessboard } = this
    let { x, y } = this
    let flag = false

    // 向左检查
    while (true) {
      x -= 1
      if (!chessboard.isValidCoord(x, y)) break
      const item = chessboard.findChessByCoord(x, y)
      if (!item && !flag) {
        list.push({ x, y })
        continue
      }

      if (!flag) {
        flag = true
        continue
      }

      if (item && item.color !== this.color) {
        list.push({ x, y })
        break
      }
    }

    // 向右检查
    x = this.x
    flag = false
    while (true) {
      x += 1
      if (!chessboard.isValidCoord(x, y)) break
      const item = chessboard.findChessByCoord(x, y)
      if (!item && !flag) {
        list.push({ x, y })
        continue
      }

      if (!flag) {
        flag = true
        continue
      }

      if (item && item.color !== this.color) {
        list.push({ x, y })
        break
      }
    }

    // 向上检查
    x = this.x
    flag = false
    while (true) {
      y += 1
      if (!chessboard.isValidCoord(x, y)) break
      const item = chessboard.findChessByCoord(x, y)
      if (!item && !flag) {
        list.push({ x, y })
        continue
      }

      if (!flag) {
        flag = true
        continue
      }

      if (item && item.color !== this.color) {
        list.push({ x, y })
        break
      }
    }
    
    // 向下检查
    y = this.y
    flag = false
    while (true) {
      y -= 1
      if (!chessboard.isValidCoord(x, y)) break
      const item = chessboard.findChessByCoord(x, y)
      if (!item && !flag) {
        list.push({ x, y })
        continue
      }

      if (!flag) {
        flag = true
        continue
      }

      if (item && item.color !== this.color) {
        list.push({ x, y })
        break
      }
    }

    return list
  }
}

export default ChessPao
