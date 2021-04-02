import actions from "../config/actions"
import { ChessConfig } from "../config/chess"
import { resolveSuffix } from "../utils/cmd"
import Chessboard from "./chessboard"
import { ActionLabel, ChessColor, Coord, EventMap } from '../types'
import { getCNNumber, getCoordCN } from "../utils/coord"

class Chess {
  x: number
  y: number
  filterHouse = false
  filterGroup = false
  transActionXY = false

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

    // 检查是否吃子
    const item = this.chessboard.findChessByCoord(x, y)
    item && item.beEat(this)

    this.chessboard.emit(EventMap.CHESS_MOVE, {
      type: EventMap.CHESS_MOVE,
      target: this,
      coordFrom: [this.x, this.y],
      coordTo: [x, y],
    })

    this.x = x
    this.y = y
  }

  moveBy(bx: number, by: number) {
    const x = this.x + bx
    const y = this.y + by
    this.moveTo(x, y)
  }

  exec(cmd: string) {
    const coords = this.getCanMoveCoord2()
    const coord = coords.find(v => this.coordToCmdSuffix(v) === cmd)
    if (!coord) {
      throw new Error(`Chess.exec Error Commend: ${cmd}`)
    }
    this.moveTo(coord.x, coord.y)
  }

  // 被吃子
  beEat(source: Chess) {
    this.chessboard.emit(EventMap.CHESS_EAT, {
      type: EventMap.CHESS_EAT,
      source: source,
      target: this,
      coord: [this.x, this.y],
    })

    const index = this.chessboard.chesses.indexOf(this)
    this.chessboard.chesses.splice(index, 1)
    this.chessboard.outerChess.push(this)
    this.x = -1
    this.y = -1
    this.beEatAfter()
  }

  beEatAfter() {}

  // 是否可移动到此点
  canMove(x: number, y: number) {
    const item = this.chessboard.findChessByCoord(x, y)
    if (item && item.color === this.color) return false
    return this.checkCanMove(x, y)
  }

  checkCanMove(x: number, y: number) {
    return false
  }

  getCanMoveCoord(): Coord[] {
    return []
  }

  getCanMoveCoord2() {
    return this.getCanMoveCoord()
      .reduce((arr, item) => {
        if (!arr.find(v => v.x === item.x && v.y === item.y)) {
          arr.push(item)
        }
        return arr
      }, [] as Coord[])
  }

  isValidCoord(x: number, y: number) {
    const { chessboard } = this
    if (!chessboard.isValidCoord(x, y)) return false
    if (this.filterHouse && !chessboard.isHouseCoord(x, y, this.color)) return false
    if (this.filterGroup && !chessboard.isGroupCoord(x, y, this.color)) return false
    const item = chessboard.findChessByCoord(x, y)
    if (!item) return true
    return item.color !== this.color
  }

  // 指令前缀
  get cmdPrefix() {
    const items = this.chessboard.chesses
      .filter(v => v.name === this.name && v.color === this.color && v.x === this.x)
      .sort((a, b) => this.color === ChessColor.RED ? b.y - a.y : a.y - b.y)

    if (items.length === 0) {
      throw new Error('Get Command Prefix Error')
    }

    if (items.length === 1) return `${this.name}${getCoordCN(this.x, this.color)}`
    if (items.length === 2) {
      const label = items[0] === this ? '前' : '后'
      return `${label}${this.name}`
    }
    const num = items.indexOf(this) + 1
    const label = this.color === ChessColor.RED ? getCNNumber(num) : num
    return `${label}${this.name}`
  }

  // 坐标转指令后缀
  coordToCmdSuffix(coord: Coord) {
    let action: ActionLabel
    if (coord.y === this.y) {
      action = '平'
    } else if (this.color === ChessColor.RED) {
      action = coord.y > this.y ? '进' : '退'
    } else {
      action = coord.y > this.y ? '退' : '进'
    }

    if (action === '平') {
      return `${action}${getCoordCN(coord.x, this.color)}`
    }

    const label = this.getCmdSuffixNum(coord)
    return `${action}${label}`
  }

  getCmdSuffixNum(coord: Coord) {
    if (this.transActionXY) {
      return getCoordCN(coord.x, this.color)
    }
    const num = Math.abs(coord.y - this.y)
    return this.color === ChessColor.RED ? getCNNumber(num) : num
  }
}

export default Chess
