import React, { Suspense, lazy } from 'react';
import favicon from './favicon.ico';
import './App.css';

import AlgContainer from './Components/Container/AlgContainer.js';
import DSContainer from './Components/Container/DSContainer.js';
import { Route, Switch } from "react-router-dom";

import s1 from './Components/Module/algorithms/json/insertion-sort';
import s2 from './Components/Module/algorithms/json/selection-sort';
import s3 from './Components/Module/algorithms/json/bubble-sort';
import s4 from './Components/Module/algorithms/json/merge-sort';
import s5 from './Components/Module/algorithms/json/quick-sort';
import s6 from './Components/Module/algorithms/json/heap-sort';
import s7 from './Components/Module/algorithms/json/binary-insertion';

import t1 from './Components/Module/algorithms/json/binary-search';
import t2 from './Components/Module/algorithms/json/dfs';

const AlgRuntimeModule = lazy(() => import('./Components/CodeAnalysis/AlgRuntimeModule'));

export default function App() {

  const test = [s1, s2, s3, s4, s5, s6, s7];
  const test2 = [t1, t2];

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Suspense fallback={<div />}>
          {/* <Route exact path="/" render={() => (
            <img src={favicon} className="App-logo" alt="favicon" />
          )}/> */}
          <Route exact path="/" render={() => (
            <div>
                    <AlgRuntimeModule unit={test} />
                    <AlgRuntimeModule unit={test2} traversal />
            </div>
          )}/>
          <Route path="/algorithms/:unit" component={AlgContainer}/>
          <Route path="/data-structures/:unit" component={DSContainer}/>
        </Suspense>
      </Switch>
      </header>
    </div>
  );
};