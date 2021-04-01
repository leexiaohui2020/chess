import Chess from './elements/chess'
import Chessboard from './elements/chessboard'
export { Chess, Chessboard }

// TestCode
const chessboard = new Chessboard()
// console.log(chessboard.findChessByName('兵').length)
// console.log(chessboard.findChess('帅五'))

const chess = chessboard.findChess('炮二')
console.log(chess.name, chess.x, chess.y)
chessboard.exec('炮二平五')
console.log(chess.name, chess.x, chess.y)
chessboard.exec('炮二平五')
