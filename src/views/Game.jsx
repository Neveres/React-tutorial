import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';
import calculateWinner from '../utils';

class Game extends React.Component {
    render () {
        const {
            history, stepNumber, xIsNext, onSquareClick
        } = this.props;
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${xIsNext ? 'X' : 'O'}`;
        }

        const moves = history.map((step, move) => {
            const desc = move
                ? `Go to move #${move}`
                : 'Go to game start';
            const key = `#${move} move`;
            return (
                <li key={key}>
                    <button
                        type="button"
                        onClick={() => this.jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => onSquareClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
    stepNumber: PropTypes.number.isRequired,
    xIsNext: PropTypes.bool.isRequired,
    onSquareClick: PropTypes.func.isRequired
};

export default Game;
