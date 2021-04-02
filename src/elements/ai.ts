import { delay } from "../utils";
import { randomGet } from "../utils/arr";
import Player from "./player";

class AI extends Player {

  phase() {
    const cmd = this.getBestCommand()
    delay(1000).then(() => {
      console.log(cmd)
      this.chessBoard.exec(cmd)
    })
  }

  // 获取所有有效指令
  getAllCommand() {
    const command: string[] = []
    this.chess.forEach((item) => {
      item.getCanMoveCoord2().forEach((coord) => {
        command.push(`${item.cmdPrefix}${item.coordToCmdSuffix(coord)}`)
      })
    })
    return command
  }

  // 获取最佳招法
  getBestCommand() {
    return randomGet(this.getAllCommand())
  }
}

export default AI
