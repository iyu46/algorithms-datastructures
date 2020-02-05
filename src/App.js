import React from 'react';
import favicon from './favicon.ico';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={favicon} className="App-logo" alt="favicon" />
      </header>
      <Sidebar/>
    </div>
  );
}

export default App;
