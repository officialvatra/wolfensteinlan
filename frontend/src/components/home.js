import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookies';
import Login from "./login";
import {Link} from 'react-router-dom';


const Signup = () => {  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/signup", { name, email });
            console.log("Response:", response.data);
            Cookies.setItem('signed_up', true, {expires: 7});
            console.log(Cookies);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            
        </Form>
    );
};

export default Signup;
