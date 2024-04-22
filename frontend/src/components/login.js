import React from "react";
import { Col, Row, Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setusername] = useState();
    const [pwd, setpwd] = useState();

    const Handlesubmit = async (e) => {
        e.preventdefault();
        try {
            const response = await axios.post("", { username, pwd });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
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