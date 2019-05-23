export default (state = { balls: [] }, action) => {
    if (action.type === 'ADD_BALL') {
        let newState = { ...state, balls: state.balls.concat([action.ball])};
        return newState;
    }
    if (action.type === 'ACTIVATE') {
        let newState = {
            ...state,
            balls: state.balls.map((ball) => {
                if (ball.id === action.ball.id) return {
                    ...ball,
                    color:      'red',
                    active:     true
                };
                return ball
            })
        };
        return newState;
    }
    if (action.type === 'DRAG') {
        let newState = {
            ...state,
            balls: state.balls.map((ball) => {
                if (ball.active) return {
                    ...ball,
                    top:        action.coordinates.y - ball.radius,
                    left:       action.coordinates.x - ball.radius
                };
                return ball
            })
        };
        return newState;
    }
    return state;
};
