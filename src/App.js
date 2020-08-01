import React from 'react';
import loading from './components/Loading/Loading'
import title from './components/Title/Title'
import SubmitButton from './components/SubmitButton/SubmitButton'
import Container from 'react-bootstrap/Container'

import './stylesheets/main/App.css';


function App() {
  return (
    <Container fluid>
      <div className="App">
        <header className="App-header">
          {title ? title : loading}
        </header>
        <SubmitButton />
      </div>
    </Container>);
}

export default App;
