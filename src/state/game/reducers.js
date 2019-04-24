import * as types from './types';
import calculateWinner from '../../utils';

const initialState = {
    history: [{
        squares: Array(9).fill('')
    }],
    movesAscOrder: true,
    xIsNext: true,
    stepNumber: 0
};

function reducer (state = initialState, action) {
    let history;
    let current;
    let squares;
    switch (action.type) {
    case types.MOVES_ORDER:
        return Object.assign({}, state, {
            movesAscOrder: !state.movesAscOrder
        });

    case types.GO_TO_MOVE:
        return Object.assign({}, state, {
            history: state.history.slice(0, action.step + 1),
            stepNumber: action.step,
            xIsNext: !((action.step % 2))
        });

    case types.SELECT_SQUARE:
        history = state.history.slice(0, state.stepNumber + 1);
        current = history[state.stepNumber];
        squares = current.squares.slice();
        if (calculateWinner(squares) || squares[action.index]) {
            return state;
        }
        squares[action.index] = state.xIsNext ? 'X' : 'O';
        return Object.assign({}, state, {
            history: [
                ...state.history,
                {
                    squares
                }
            ],
            xIsNext: !state.xIsNext,
            stepNumber: history.length
        });

    default:
        return state;
    }
}

export default reducer;
