import React, { Suspense, lazy } from 'react';
import favicon from './favicon.ico';
import './App.css';

import AlgContainer from './Components/Container/AlgContainer.js';
import DSContainer from './Components/Container/DSContainer.js';
import { Route, Switch } from "react-router-dom";

import _analysis from './Components/Module/algorithms/binary-search';
import _analysis2 from './Components/Module/algorithms/merge-sort';
import _analysis3 from './Components/Module/algorithms/insertion-sort';
const AlgRuntimeModule = lazy(() => import('./Components/CodeAnalysis/AlgRuntimeModule'));

export default function App() {

  const test = [_analysis, _analysis2, _analysis3];

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Suspense fallback={<div />}>
          {/* <Route exact path="/" render={() => (
            <img src={favicon} className="App-logo" alt="favicon" />
          )}/> */}
          <Route exact path="/" render={() => (
                    <AlgRuntimeModule unit={test}></AlgRuntimeModule>
          )}/>
          <Route path="/algorithms/:unit" component={AlgContainer}/>
          <Route path="/data-structures/:unit" component={DSContainer}/>
        </Suspense>
      </Switch>
      </header>
    </div>
  );
};