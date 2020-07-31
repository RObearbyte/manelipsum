import React from 'react';
import loading from './components/Loading/Loading'
import title from './components/Title/Title'
import './stylesheets/main/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {title ? title : loading}
      </header>
    </div>);
}

export default App;
