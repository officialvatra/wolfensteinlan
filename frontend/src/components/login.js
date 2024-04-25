import React, { useState } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Adminpage from "./adminpage";
import { Route } from "react-router-dom";

const Login = () => {
    const [username, setuserName] = useState('');
    const [pwd, setpwd] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const loginsubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { username, pwd });
            console.log("Response:", response.data);
            if (response.logged === true) {

                const response2 = await axios.post("http://localhost:5000/getlist", { name, email });
                console.log(response2);
                setName(name);
                setEmail(email);

            }

        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <Form onSubmit={loginsubmit}>
            <Form.Group controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setuserName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="pwd">
                <Form.Label>password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="password"
                    value={pwd}
                    onChange={(e) => setpwd(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                login
            </Button>
            <Row className='px-5 my-5'>

            <Col sm='12'>
                <p>{name}</p>
                <p>{email}</p>
            </Col>
            </Row>

        </Form>
    );
};

export default Login;
