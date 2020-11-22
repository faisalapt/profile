import React from 'react';
import logo from './profile.jpg';
import './App.css';
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card bg="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title style={{color:'black'}}>Profile</Card.Title>
          <Card.Text style={{color:'black'}}>
            Informatika - 2019
            <h1><FontAwesomeIcon icon={['fab','github']}/><FontAwesomeIcon icon={['fab','instagram']}/></h1>
          </Card.Text>
          <Button variant="primary"></Button>
        </Card.Body>
        </Card>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
