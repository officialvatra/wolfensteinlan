import { Row, Col, Container } from 'react-bootstrap';
import Login from './components/login';
import Signup from './components/home';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1 className="text-primary" style={{ fontFamily: 'Times New Roman' }}>
                Bli Med!
              </h1>
            </Col>
            <Col sm='12'>
              <Signup />
            </Col>
            <Col sm='12'>
              <br />
              <Login />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
