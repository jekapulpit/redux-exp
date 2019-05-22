import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { connect } from 'react-redux';


class App extends React.Component {
    render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{store.getState().balls.length}</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
              <button onClick={() => store.dispatch({ type: 'ADD_BALL', ball: {radius: 10, color: 'blue'} })}>privet</button>
          </header>
        </div>
    );
  }
}

const mapStateToProps = state => ({ balls: state.balls });
export default hot(connect(mapStateToProps)(App));
