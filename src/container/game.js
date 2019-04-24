import { connect } from 'react-redux';

import { actions } from '../state/game';
import Game from '../views/Game';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    onSquareClick: (id) => {
        dispatch(actions.selectSquare(id));
    },
    jumpTo: (step) => {
        dispatch(actions.goToMove(step));
    },
    sortMoves: () => {
        dispatch(actions.changeMovesOrder());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
