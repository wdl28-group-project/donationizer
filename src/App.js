import React from 'react';
import routes from '../src/routes';
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
    <div className="App">
    {routes}
    </div>
    </HashRouter>
  );
}

export default App;
