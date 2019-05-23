import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';

const Ball = props => {
    let style = {
        width: props.ballProps.radius*2 + 'px',
        height: props.ballProps.radius*2 + 'px',
        backgroundColor: props.ballProps.color,
        top: props.ballProps.top,
        left: props.ballProps.left,
        transform: props.ballProps.active ? 'scale(2)' : 'none'
    };
        return (
            <div onMouseDown={() => props.onMouseDownHandler(props.ballProps)}
                 className="ball"
                 style={style}/>
        );
};

export default hot(Ball);
