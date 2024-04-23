import React from "react";
import { Col, Row, Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import { useState } from "react";
import axios from "axios";

const Login = () => { // login func
    const [username, setusername] = useState(); // Variabler
    const [pwd, setpwd] = useState();

    const Handlesubmit = async (e) => { // Sier seg selv
        e.preventdefault();
        try { // Prøv å gjør en api request 
            const response = await axios.post("", { username, pwd }); 
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return ( // HTML koden som skal sendes tilbake
        <form onSubmit={Handlesubmit()}>
            <input type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            <input type="password"
                placeholder="password"
                value={pwd}
                onChange={(e) => setpwd(e.target.value)}
            />
            <Button type="submit">sign up</Button>
        </form>
    )


};

export default Login;
