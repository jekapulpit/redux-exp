import { hot } from 'react-hot-loader/root';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import reducer from "./reducers";
import { createStore } from "redux"; // импорт из Redux-библиотеки
const initialState = {  tech: 'alo' } ;
const store = createStore(reducer, initialState);  // пока невыполнимое действие

class App extends React.Component {
  hellaao(txt) {
      console.log(this.state.counter);
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{store.getState().tech}</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
          </header>
        </div>
    );
  }
}

export default hot(App);
