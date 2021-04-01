import Chess from "./elements/chess"

export interface Coord {
  x: number;
  y: number;
}

export enum ChessID {
  JIANG = 1,
  SHI = 2,
  XIANG = 3,
  MA = 4,
  CHE = 5,
  ZU = 6,
  PAO = 7,
}

export enum ChessColor {
  RED = 'red',
  BLACK = 'black',
}

export type ChessName = '车' | '马' | '相' | '象' | '士' | '仕' | '帅' | '将' | '炮' | '兵' | '卒'

export type ActionLabel = '进' | '退' | '平'

export interface Action {
  label: ActionLabel;
  moveTo?: boolean;
  content: (item: Chess, num: number) => void;
}
