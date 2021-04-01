import actions from "../config/actions"
import { ChessConfig } from "../config/chess"
import { resolveSuffix } from "../utils/cmd"
import Chessboard from "./chessboard"

class Chess {
  x: number
  y: number

  constructor(public chessboard: Chessboard, private opts: ChessConfig) {
    this.x = opts.Coord[0]
    this.y = opts.Coord[1]
  }

  get name() {
    return this.opts.Name
  }

  get color() {
    return this.opts.Color
  }

  moveTo(x: number, y: number) {
    if (x < this.chessboard.MIN_X
      || x > this.chessboard.MAX_X
      || y < this.chessboard.MIN_Y
      || y > this.chessboard.MAX_Y) {
        throw new Error(`Unexpected Coord: ${x}, ${y}`)
      }
    this.x = x
    this.y = y
  }

  moveBy(bx: number, by: number) {
    const x = this.x + bx
    const y = this.y + by
    this.moveTo(x, y)
  }

  exec(cmd: string) {
    const info = resolveSuffix(cmd)
    if (info.color !== this.color) {
      throw new Error(`Chess.exec Error Commend: ${cmd}`)
    }

    const action = actions.find(v => v.label === info.label)
    const coord = action.content(this, info.co)
    this.moveTo(coord[0], coord[1])
  }
}

export default Chess
