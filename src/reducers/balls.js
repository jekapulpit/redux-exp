export default (state = { balls: [] }, action) => {
    if (action.type === 'ADD_BALL') {
        let newState = { ...state, balls: state.balls.concat([action.ball])};
        return newState;
    }
    return state;
};
