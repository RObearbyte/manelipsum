import React from 'react';
import loading from './components/Loading/Loading'
import title from './components/Title/Title'
import SubmitButton from './components/SubmitButton/SubmitButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './stylesheets/main/App.css';


function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} >
          <div className="App">
            <header className="App-header">
              {title ? title : loading}
            </header>
            <SubmitButton />
          </div>
        </Col>
      </Row>
    </Container>);
}

export default App;
