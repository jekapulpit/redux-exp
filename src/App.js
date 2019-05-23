import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import './App.css';
import store from './store'
import { connect } from 'react-redux';
import Ball from "./components/Ball";

const Width = window.innerWidth;
const Height = window.innerHeight;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleActivate = this.toggleActivate.bind(this);
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

    toggleDeactivate = () => {
        this.props.toggleDeactivate()
    };

    toggleDrag = (event) => {
        this.props.toggleDrag(event)
    };

    newBallProps = (radius = 10, color = '#fff') => {
        return {
            id: this.randomInteger(0, 100000000),
            radius: radius,
            color: color,
            top: this.randomInteger(radius*2, Height - radius*2),
            left: this.randomInteger(radius*2, Width - radius*2),
            active: false
        }
    };

    render() {
    let balls = store.getState().balls.map((ball) => {
       return <Ball key={ball.id}
                    onMouseDownHandler={this.toggleActivate}
                    ballProps={ball}/>
    });
    return (
        <div className="App"
             onMouseMove={(e) => this.toggleDrag(e)}
             onMouseUp={() => this.toggleDeactivate()}>
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
        toggleDeactivate: () => {
            dispatch({ type: 'DEACTIVATE' });
        },
    }
};
const mapStateToProps = state => ({ balls: state.balls });
export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
