import { EventEmitter } from 'events'
import Chess from "./chess"
import chessAssets from '../config/assets/chess'
import chessConfigs from '../config/chess'
import { ChessColor, ChessName, EventMap } from "../types"
import { resolveCommand, resolvePrefix } from "../utils/cmd"
import Player from "./player"
import { randomSort } from "../utils/arr"

class Chessboard extends EventEmitter {
  MIN_X = 0
  MAX_X = 8
  MIN_Y = 0
  MAX_Y = 9

  chesses: Chess[] = []
  outerChess: Chess[] = []

  playerA: Player
  playerB: Player
  isReady = false
  currentPlayer: Player

  constructor() {
    super()
    chessConfigs.forEach((config) => {
      const item = chessAssets.find(v => v.ID === config.ID)
      const chess = new item.Target(this, config)
      this.chesses.push(chess)
    })
  }

  findChessByCoord(x: number, y: number) {
    return this.chesses.find(v => v.x === x && v.y === y)
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
    try {
      const info = resolveCommand(cmd)
      const chess = this.findChess(info.prefix)
      if (!chess) {
        throw new Error(`Error Command: ${cmd}`)
      }
      chess.exec(info.suffix)
    } catch (e) {
      e.message = `[${cmd}]${e.message}`
      throw Error(e)
    }
  }

  ready(playerA: Player, playerB: Player) {
    if (this.isReady) return
    this.playerA = playerA
    this.playerB = playerB
    const colors = randomSort([ChessColor.RED, ChessColor.BLACK])
    playerA.setColor(colors[0])
    playerB.setColor(colors[1])
    playerA.nextPlayer = playerB
    playerB.nextPlayer = playerA
    playerA.chessBoard = this
    playerB.chessBoard = this
    
    if (playerA.color === ChessColor.RED) {
      this.currentPlayer = playerA
    } else {
      this.currentPlayer = playerB
    }
  }

  start() {
    this.on(EventMap.CHESS_EAT, this.eatChessHandler)
    this.on(EventMap.CHESS_MOVE, this.moveChessHandler)
    this.currentPlayer.phase()
  }

  over() {
    this.off(EventMap.CHESS_EAT, this.eatChessHandler)
    this.off(EventMap.CHESS_MOVE, this.moveChessHandler)
    this.currentPlayer.phase()
  }

  moveChessHandler = () => {
    this.currentPlayer = this.currentPlayer.nextPlayer
    this.currentPlayer.phase()
  }

  eatChessHandler = () => {

  }

  // 是否是有效坐标
  isValidCoord(x: number, y: number) {
    return x >= this.MIN_X && x <= this.MAX_X && y >= this.MIN_Y && y <= this.MAX_Y
  }

  // 点是否在九宫
  isHouseCoord(x: number, y: number, color?: ChessColor) {
    if (!this.isValidCoord(x, y)) return false
    if (x < 3 || x > 5) return false
    if (y > 2 && y < 7) return false
    if (color === ChessColor.RED) return y <= 2
    if (color === ChessColor.BLACK) return y >= 7
    return true
  }

  // 点是否在势力范围内
  isGroupCoord(x:number, y: number, color: ChessColor) {
    if (!this.isValidCoord(x, y)) return false
    if (color === ChessColor.RED) return y <= 4
    if (color === ChessColor.BLACK) return y >= 5
    return false
  }
}

export default Chessboard
