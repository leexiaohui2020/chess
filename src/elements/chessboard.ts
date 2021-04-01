import Chess from "./chess"
import chessAssets from '../config/assets/chess'
import chessConfigs from '../config/chess'
import { ChessName } from "../types"
import { resolveCommand, resolvePrefix } from "../utils/cmd"

class Chessboard {
  MIN_X = 0
  MAX_X = 8
  MIN_Y = 0
  MAX_Y = 8

  chesses: Chess[] = []

  constructor() {
    chessConfigs.forEach((config) => {
      const item = chessAssets.find(v => v.ID === config.ID)
      const chess = new item.Target(this, config)
      this.chesses.push(chess)
    })
  }

  findChessByName(name: ChessName) {
    return this.chesses.filter(v => v.name === name);
  }

  findChess(cmd: string) {
    const info = resolvePrefix(cmd)
    const chesses = this.findChessByName(info.name)
      .filter(v => v.color === info.color && info.x === v.x)
    if (chesses.length === 1) {
      return chesses[0]
    }
    return null
  }

  exec(cmd: string) {
    const info = resolveCommand(cmd)
    const chess = this.findChess(info.prefix)
    chess.exec(info.suffix)
  }
}

export default Chessboard
