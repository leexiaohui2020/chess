import { ChessColor, ChessID, ChessName } from "../types";

export interface ChessConfig {
  ID: number;
  Name: ChessName;
  Color: ChessColor;
  Coord: [number, number];
}

export default <ChessConfig[]>[
  // 红棋
  { Color: ChessColor.RED, Name: '车', Coord: [8, 0], ID: ChessID.CHE },
  { Color: ChessColor.RED, Name: '马', Coord: [7, 0], ID: ChessID.MA },
  { Color: ChessColor.RED, Name: '相', Coord: [6, 0], ID: ChessID.XIANG },
  { Color: ChessColor.RED, Name: '仕', Coord: [5, 0], ID: ChessID.SHI },
  { Color: ChessColor.RED, Name: '帅', Coord: [4, 0], ID: ChessID.JIANG },
  { Color: ChessColor.RED, Name: '仕', Coord: [3, 0], ID: ChessID.SHI },
  { Color: ChessColor.RED, Name: '相', Coord: [2, 0], ID: ChessID.XIANG },
  { Color: ChessColor.RED, Name: '马', Coord: [1, 0], ID: ChessID.MA },
  { Color: ChessColor.RED, Name: '车', Coord: [0, 0], ID: ChessID.CHE },
  { Color: ChessColor.RED, Name: '炮', Coord: [7, 2], ID: ChessID.PAO },
  { Color: ChessColor.RED, Name: '炮', Coord: [1, 2], ID: ChessID.PAO },
  { Color: ChessColor.RED, Name: '兵', Coord: [8, 3], ID: ChessID.ZU },
  { Color: ChessColor.RED, Name: '兵', Coord: [6, 3], ID: ChessID.ZU },
  { Color: ChessColor.RED, Name: '兵', Coord: [4, 3], ID: ChessID.ZU },
  { Color: ChessColor.RED, Name: '兵', Coord: [2, 3], ID: ChessID.ZU },
  { Color: ChessColor.RED, Name: '兵', Coord: [0, 3], ID: ChessID.ZU },
  // 黑棋
  { Color: ChessColor.BLACK, Name: '车', Coord: [0, 9], ID: ChessID.CHE },
  { Color: ChessColor.BLACK, Name: '马', Coord: [1, 9], ID: ChessID.MA },
  { Color: ChessColor.BLACK, Name: '象', Coord: [2, 9], ID: ChessID.XIANG },
  { Color: ChessColor.BLACK, Name: '士', Coord: [3, 9], ID: ChessID.SHI },
  { Color: ChessColor.BLACK, Name: '将', Coord: [4, 9], ID: ChessID.JIANG },
  { Color: ChessColor.BLACK, Name: '士', Coord: [5, 9], ID: ChessID.SHI },
  { Color: ChessColor.BLACK, Name: '象', Coord: [6, 9], ID: ChessID.XIANG },
  { Color: ChessColor.BLACK, Name: '马', Coord: [7, 9], ID: ChessID.MA },
  { Color: ChessColor.BLACK, Name: '车', Coord: [8, 9], ID: ChessID.CHE },
  { Color: ChessColor.BLACK, Name: '炮', Coord: [1, 7], ID: ChessID.PAO },
  { Color: ChessColor.BLACK, Name: '炮', Coord: [7, 7], ID: ChessID.PAO },
  { Color: ChessColor.BLACK, Name: '卒', Coord: [0, 6], ID: ChessID.ZU },
  { Color: ChessColor.BLACK, Name: '卒', Coord: [2, 6], ID: ChessID.ZU },
  { Color: ChessColor.BLACK, Name: '卒', Coord: [4, 6], ID: ChessID.ZU },
  { Color: ChessColor.BLACK, Name: '卒', Coord: [6, 6], ID: ChessID.ZU },
  { Color: ChessColor.BLACK, Name: '卒', Coord: [8, 6], ID: ChessID.ZU },
]
