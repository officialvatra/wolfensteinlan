import React from "react";
import { Col, Row, Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import { useState } from "react";
import axios from "axios";

const Signup = () => {    // Definering av signup feltet
    const [name, setname] = useState();
    const [email, setemail] = useState();

    const Handlesubmit = async () => { // Hva som skjer når du trykker på submit knappen
        // e.preventdefault();
        try {
            const response = await axios.post("", { name, email });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return ( // HTML kode som skal bli sendt når componenten er brukt
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


