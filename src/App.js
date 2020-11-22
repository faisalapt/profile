import React from 'react';
import foto from './profile.jpg';
import vue from './vue.png';
import angular from './AngularJS.svg'
import logoreact from './logo192.png'
import './App.css';
import { Button, Card, CardColumns, ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card bg="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={foto} />
        <Card.Header style={{color:'black'}}>Profile</Card.Header>
        <Card.Body>
          <Card.Text style={{color:'black'}}>
            Faisal Aprianto
            00000042520
            Informatika - 2019
          </Card.Text>
          <Button variant="dark" size="lg" onClick={(e) => {
            e.preventDefault()
            window.open('https://github.com/faisalapt')
          }}><FontAwesomeIcon icon={['fab','github']}/></Button>
          <Button variant="dark" size="lg" onClick={(e) => {
            e.preventDefault()
            window.open('https://www.instagram.com/faisalapt/')
          }}><FontAwesomeIcon icon={['fab','instagram']}/></Button>
        </Card.Body>
        </Card>
        <h2>Experience</h2>
        <div className="card mb-3" style={{width:'500px'}}>
        </div>
        <CardColumns>
          <Card bg="dark" style={{width:'18rem',marginLeft:'30px'}}>
            <Card.Img variant="bottom" src={vue}/>
            <Card.Header>VueJS</Card.Header>
            <Card.Body>
              <Card.Text>Progress</Card.Text>
              <ProgressBar animated now={20}/>
            </Card.Body>
          </Card>
          <Card bg="dark" style={{width:'18rem',marginLeft:'20px'}}>
            <Card.Img variant="bottom" src={logoreact}/>
            <Card.Header>ReactJS</Card.Header>
            <Card.Body>
              <Card.Text>Progress</Card.Text>
              <ProgressBar animated now={15}/>
            </Card.Body>
          </Card>
        </CardColumns>
      </header>
    </div>
  );
}

export default App;
