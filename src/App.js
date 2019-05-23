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
    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    newBallProps = (radius = 10, color = '#fff') => {
        return {
            radius: radius,
            color: color,
            top: this.randomInteger(radius*2, Height - radius*2),
            left: this.randomInteger(radius*2, Width - radius*2)
        }
    };

    render() {
    let balls =  store.getState().balls.map((ball) => {
       return <Ball ballProps={ball}/>
    });
    return (
        <div className="App">
          <header className="App-header">
            {balls}
            <p>{store.getState().balls.length}</p>
              <button onClick={() => store.dispatch({ type: 'ADD_BALL', ball: this.newBallProps() })}>privet</button>
          </header>
        </div>
    );
  }
}

const mapStateToProps = state => ({ balls: state.balls });
export default hot(connect(mapStateToProps)(App));
