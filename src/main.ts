import AI from './elements/ai'
import Chess from './elements/chess'
import Player from './elements/player'
import Chessboard from './elements/chessboard'

export { Chess, Chessboard, Player, AI }

// TestCode
const chessboard = new Chessboard()
const playerA = new AI()
const playerB = new AI()
chessboard.ready(playerA, playerB)
chessboard.start()
