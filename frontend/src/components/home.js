import React from "react";
import { Col, Row, Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();

    const Handlesubmit = async () => {
        // e.preventdefault();
        try {
            const response = await axios.post("https://localhost:3000/api/signup", { name, email });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={Handlesubmit()}>
            <input type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <input type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <Button type="submit">sign up</Button>
        </form>
    )


};

export default Signup;


