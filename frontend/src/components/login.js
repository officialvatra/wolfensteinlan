import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const [username, setuserName] = useState('');
    const [pwd, setpwd] = useState('');
    const [pplobj, setpplobj] = useState([]);

    const loginsubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { username, pwd });
            console.log("Response:", response.data);
            if (response.data.logged === true) {
                const response2 = await axios.post("http://localhost:5000/getlist");
                setpplobj(response2.data.userList);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Form onSubmit={loginsubmit} className="p-4 bg-light rounded border border-primary">
                <Form.Group controlId="username">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setuserName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="pwd">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={pwd}
                        onChange={(e) => setpwd(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Login
                </Button>

                <Row className="mt-4">
                    <Col>
                        <ul>
                            {pplobj.map(user => (
                                <li key={user.id}>
                                    <p>Name: {user.name}</p>
                                    <p>Email: {user.email}</p>
                                    <p>-------</p>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Login;
