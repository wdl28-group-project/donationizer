import React from 'react';
import routes from '../src/routes';
import {HashRouter} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
