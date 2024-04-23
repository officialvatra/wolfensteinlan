import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {
    const [username, setuserName] = useState('');
    const [pwd, setpwd] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { username, pwd });
            console.log("Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
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
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="password"
                    value={pwd}
                    onChange={(e) => setpwd(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    );
};

export default Signup;
