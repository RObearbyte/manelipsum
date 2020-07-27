import React from 'react';
import loading from './components/Landing/Loading'
import './stylesheets/main/App.css';

function App() {
  return (
    <div className="App">
      {loading()}
    </div>);
}

export default App;
