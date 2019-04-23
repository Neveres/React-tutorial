import * as types from './types';

const selectSquare = index => ({ type: types.SELECT_SQUARE, index });

const changeMovesOrder = () => ({ type: types.MOVES_ORDER });

const goToMove = step => ({ type: types.GO_TO_MOVE, step });

export {
    selectSquare,
    changeMovesOrder,
    goToMove
};
