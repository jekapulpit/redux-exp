import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import './App.css';
import store from './store'
import { connect } from 'react-redux';
import Ball from "./components/Ball";
import rigitBody from "./engine/rigitBody";
import Field from './field'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleActivate = this.toggleActivate.bind(this);
        this.toggleDeactivate = this.toggleDeactivate.bind(this);
        this.toggleDrag = this.toggleDrag.bind(this)
    }

    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    toggleActivate = (ball) => {
        this.props.toggleActivate(ball)
    };

    toggleDeactivate = (ball) => {
        this.props.toggleDeactivate(ball)
    };

    toggleDrag = (event) => {
        this.props.toggleDrag(event)
    };

    newBallProps = (radius = 10, mass = 1000, color = '#fff') => {
        return (new rigitBody({
            id: this.randomInteger(0, 100000000),
            radius: radius,
            color: color,
            mass: mass,
            top: this.randomInteger(radius*2, Field.Height - radius*2),
            left: this.randomInteger(radius*2, Field.Width - radius*2),
            active: false
        }))
    };

    render() {
    let balls = store.getState().balls.map((ball) => {
       return <Ball key={ball.id}
                    onMouseDownHandler={this.toggleActivate}
                    onMouseUpHandler={this.toggleDeactivate}
                    ballProps={ball}/>
    });
    return (
        <div className="App"
             onMouseMove={(e) => this.toggleDrag(e)}>
          <header className="App-header">
            {balls}
            <button onClick={() => store.dispatch({ type: 'ADD_BALL', ball: this.newBallProps() })}>privet</button>
          </header>
        </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleActivate: (ball) => {
            dispatch({ type: 'ACTIVATE', ball: ball });
        },
        toggleDrag: (event) => {
            dispatch({ type: 'DRAG', coordinates: { x: event.clientX, y: event.clientY } });
        },
        toggleDeactivate: (ball) => {
            dispatch({ type: 'DEACTIVATE', ball: ball });
        },
    }
};
const mapStateToProps = state => ({ balls: state.balls });
export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
