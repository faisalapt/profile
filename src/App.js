import React from 'react';
import foto from './profile.jpg';
import vue from './vue.png';
import logoreact from './logo192.png'
import './App.css';
import { Button, Card, CardColumns, ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


function App() {
  return (
    <div className="App" style={{backgroundColor:'grey'}}>
      {/* <header className="App-header"> */}
      <CardColumns style={{paddingLeft:'40%'}}>
      <Card bg="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={foto} />
        <Card.Header style={{color:'white'}}>Profile</Card.Header>
        <Card.Body>
          <Card.Text style={{color:'white'}}>
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
        </CardColumns>
        <h2>Experience</h2>
        <div className="card mb-3" style={{width:'500px', marginLeft:'37%'}}>
        </div>
        <CardColumns>
          <Card bg="dark" style={{width:'18rem',marginLeft:'30px'}}>
            <Card.Img variant="bottom" src={vue}/>
            <Card.Header style={{color:'white'}}>VueJS</Card.Header>
            <Card.Body>
              <Card.Text style={{color:'white'}}>Progress</Card.Text>
              <ProgressBar animated now={20}/>
            </Card.Body>
          </Card>
          <Card bg="dark" style={{width:'18rem',marginLeft:'20px'}}>
            <Card.Img variant="bottom" src={logoreact}/>
            <Card.Header style={{color:'white'}}>ReactJS</Card.Header>
            <Card.Body>
              <Card.Text style={{color:'white'}}>Progress</Card.Text>
              <ProgressBar animated now={15}/>
            </Card.Body>
          </Card>
        </CardColumns>
      {/* </header> */}
    </div>
  );
}

export default App;
