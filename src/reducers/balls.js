export default (state = { balls: [] }, action) => {
    if (action.type === 'ADD_BALL') {
        let newState = { ...state, balls: state.balls.concat([action.ball])};
        return newState;
    }
    if (action.type === 'ACTIVATE') {
        console.log(action.ball);
        let newState = {
            ...state,
            balls: state.balls.map((ball) => {
                if (ball.id === action.ball.id) return { ...ball, color: 'red' };
                return ball
            })
        };
        return newState;
    }
    return state;
};
