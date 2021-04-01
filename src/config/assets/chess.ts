import ChessChe from "../../chesses/che";
import ChessJiang from "../../chesses/jiang";
import ChessMa from "../../chesses/ma";
import ChessPao from "../../chesses/pao";
import ChessShi from "../../chesses/shi";
import ChessXiang from "../../chesses/xiang";
import ChessZu from "../../chesses/zu";
import Chess from "../../elements/chess";
import { ChessID } from "../../types";

export interface ChessAsset {
  ID: number;
  Target: typeof Chess;
}

export default <ChessAsset[]>[
  { ID: ChessID.JIANG, Target: ChessJiang },
  { ID: ChessID.SHI, Target: ChessShi },
  { ID: ChessID.XIANG, Target: ChessXiang },
  { ID: ChessID.MA, Target: ChessMa },
  { ID: ChessID.CHE, Target: ChessChe },
  { ID: ChessID.ZU, Target: ChessZu },
  { ID: ChessID.PAO, Target: ChessPao },
]
