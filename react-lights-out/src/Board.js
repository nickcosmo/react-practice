import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        rows: 5,
        columns: 5,
        chanceLightIsOn: 0.2,
    };
    constructor(props) {
        super(props);
        this.flipCellsAround = this.flipCellsAround.bind(this);

        this.state = {
            hasWon: false,
            board: this.createBoard(),
        };
    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        let board = [];
        // create array-of-arrays of true/false values
        for (let i = 0; i < this.props.rows; i++) {
            board[i] = [];
            for (let j = 0; j < this.props.columns; j++) {
                board[i][j] = Math.random() < this.props.chanceLightIsOn ? true : false;
            }
        }
        return board;
    }

    /** handle changing a cell: update board & determine if winner */

    flipCellsAround(coord) {
        let { rows, columns } = this.props;
        let board = this.state.board;
        let [x, y] = coord.split('-').map(Number);

        function flipCell(x, y) {
            // if this coord is actually on board, flip it
            if (x >= 0 && x < columns && y >= 0 && y < rows) {
                board[y][x] = !board[y][x];
            }
        }
        // flip this cell and the cells around it
        flipCell(x, y);
        flipCell(x - 1, y);
        flipCell(x + 1, y);
        flipCell(x, y - 1);
        flipCell(x, y + 1);

        // win when every cell is turned off
        // determine is the game has been won
        let check;
        for (let i = 0; i < 4; i++) {
            check = board[i].findIndex((cell) => cell === true);
            if (check >= 0) break;
        }
        let hasWon = check >= 0 ? false : true;
        this.setState({ board, hasWon });
    }

    /** Render game board or winning message. */

    render() {
        // if the game is won, just show a winning msg & render nothing else

        // make table board
        let tblBoard = [];
        for (let i = 0; i < this.props.rows; i++) {
            let row = [];
            for (let j = 0; j < this.props.columns; j++) {
                row.push(<Cell isLit={this.state.board[i][j]} key={`${j}-${i}`} coord={`${j}-${i}`} flipCellsAroundMe={this.flipCellsAround} />);
            }
            tblBoard.push(<tr key={`${i}`}>{row}</tr>);
        }
        return (
            <table className="Board">
                <tbody>{this.state.hasWon ? <h1>You Win!!!</h1> : tblBoard}</tbody>
            </table>
        );
    }
}

export default Board;
