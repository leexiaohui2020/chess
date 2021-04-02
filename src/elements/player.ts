import { ChessColor } from "../types"
import Chessboard from "./chessboard"

class Player {
  color: ChessColor
  nextPlayer: Player
  chessBoard: Chessboard

  setColor(color: ChessColor) {
    if (!this.color) {
      this.color = color
    }
  }

  phase() {}

  get chess() {
    return this.chessBoard.chesses.filter(v => v.color === this.color)
  }
}

export default Player
