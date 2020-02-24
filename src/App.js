import React, { Suspense } from 'react';
import favicon from './favicon.ico';
import './App.css';

import AlgContainer from './Components/Container/AlgContainer.js';
import DSContainer from './Components/Container/DSContainer.js';
import { Route, Switch } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Suspense fallback={<div />}>
          <Route exact path="/" render={() => (
            <img src={favicon} className="App-logo" alt="favicon" />
          )}/>
          <Route path="/algorithms/:unit" component={AlgContainer}/>
          <Route path="/data-structures/:unit" component={DSContainer}/>
        </Suspense>
      </Switch>
      </header>
    </div>
  );
};