import { ChessColor } from "../types"

const coordCNMap = '一二三四五六七八九'
const coordNumMap = '123456789'

export function getCoord(label: string) {
  const cnIndex = coordCNMap.indexOf(label)
  if (cnIndex >= 0) {
    return 8 - cnIndex
  }

  const numIndex = coordNumMap.indexOf(label)
  if (numIndex >= 0) {
    return numIndex
  }

  throw new Error(`GetCoord Error: ${label}`)
}

export function getColor(label: string) {
  if (coordCNMap.includes(label)) {
    return ChessColor.RED
  }
  return ChessColor.BLACK
}
