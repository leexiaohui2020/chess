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

export function getCoordCN(num: number, color: ChessColor) {
  if (color === ChessColor.BLACK) return coordNumMap[num]
  return coordCNMap[8 - num]
}

export function getCNNumber(num: number) {
  return '零一二三四五六七八九'[num]
}

export function getNumber(num: string) {
  if (coordNumMap.includes(num)) {
    return coordNumMap.indexOf(num) + 1
  }

  if (coordCNMap.includes(num)) {
    return coordCNMap.indexOf(num) + 1
  }

  return 0
}
