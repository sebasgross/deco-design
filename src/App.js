import React from 'react';
import Routes from '../src/Routes'
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes />
    </div>
  );
}

export default App;
