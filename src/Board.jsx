import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = (props) => {
    const { squares, onClick } = props;

    const renderSquares = () => {
        const squaresPerRow = 3;
        const lenthOfSquares = squares.length;
        const rows = lenthOfSquares / squaresPerRow;
        const renderSquare = (i) => {
            const key = `No.${i} square`;

            return (
                <Square
                    key={key}
                    value={squares[i]}
                    onClick={() => onClick(i)}
                />
            );
        };
        const renderResult = [];

        for (let i = 0; i < rows; i += 1) {
            const key = `No.${i} row`;
            const rowElement = [];
            for (let j = 0; j < squaresPerRow; j += 1) {
                rowElement.push(renderSquare(i * 3 + j));
            }
            renderResult.push(<div className="board-row" key={key}>{rowElement}</div>);
        }

        return renderResult;
    };

    return (
        <div>
            {renderSquares(squares)}
        </div>
    );
};

Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
};

export default Board;
