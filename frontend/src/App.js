import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import Login from './components/login';
import Signup from './components/home';

function App() {
  


  return (
    <div className="App">
      <main className='main'>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1>
                Bli Med!
              </h1>
            </Col>
            <Signup></Signup>
            <Login></Login>


          </Row>
        </Container>
      </main>



    </div>
  );
}

export default App;
