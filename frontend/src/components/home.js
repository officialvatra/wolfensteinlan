import React, { useState } from "react";
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/signup", { name, email });
            console.log("Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Form onSubmit={handleSubmit} className="p-4 bg-lightblue rounded border border-primary">
                <Form.Group controlId="name">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="mt-3">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;
