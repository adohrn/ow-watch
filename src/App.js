import React, { Component } from 'react';
import MatchesComponent from './components/MatchesComponent';
import YoutubeComponent from './components/YoutubeComponent';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">What should you watch?</h1>
            <ul className="navbar">
              <li><NavLink exact to="/">League</NavLink></li>
              <li><NavLink to="/youtube">Youtube</NavLink></li>
            </ul>
          </header>
          <div className="content">
            <Route exact path="/" component={MatchesComponent}/>
            <Route path="/youtube" component={YoutubeComponent}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
