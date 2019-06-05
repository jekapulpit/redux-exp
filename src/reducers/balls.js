export default (state = { balls: [] }, action) => {
    if (action.type === 'ADD_BALL') {
        let newState = { ...state, balls: state.balls.concat([action.ball])};
        return newState;
    }

    if (action.type === 'ACTIVATE') {
        let newState = {
            ...state,
            balls: state.balls.map((ball) => {
                if (ball.id === action.ball.id) return ball.activate();
                return ball
            })
        };
        return newState;
    }

    if (action.type === 'DRAG') {
        let newState = {
            ...state,
            balls: state.balls.map((ball) => {
                if (ball.active) return ball.moveTo(action.coordinates.x - ball.radius, action.coordinates.y - ball.radius);
                return ball
            })
        };
        return newState;
    }

    if (action.type === 'DEACTIVATE') {
        let newState = {
            ...state,
            balls: state.balls.map((ball) => {
                return ball.deactivate()
            })
        };
        return newState;
    }
    return state;
};
