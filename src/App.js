import React from 'react';
import favicon from './favicon.ico';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar.js';
import RoutingManager from './Components/Routing/RoutingManager.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  const parseFromURL = (string) => {
    var str = string.replace(/-/g, ' ');
    return str.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')
  }

  const displayURL = ({match}) => (
    <div>
      {/* <h1>{parseFromURL(match.params.unit)}</h1> */}
      <RoutingManager unit={parseFromURL(match.params.unit)} type={match.params.type}/>
    </div>
  )

  return (
    <div className="App">
      <Router basename='/algorithms-datastructures/'>
        <header className="App-header">
          <img src={favicon} className="App-logo" alt="favicon" />
          <Route path="/data-structures/" render={() => (
            <h1> Data Structure </h1>
          )}/>
          <Route path="/algorithms/" render={() => (
            <h1> Algorithm </h1>
          )}/>
          <Route path="/:type/:unit" component={displayURL}/>
        </header>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
