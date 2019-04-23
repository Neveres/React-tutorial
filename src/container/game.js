import { connect } from 'react-redux';
import { selectSquare, goToMove, changeMovesOrder } from '../state/game/actions';
import Game from '../views/Game';

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};

const mapDispatchToProps = dispatch => ({
    onSquareClick: (id) => {
        dispatch(selectSquare(id));
    },
    jumpTo: (step) => {
        dispatch(goToMove(step));
    },
    sortMoves: () => {
        dispatch(changeMovesOrder());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
