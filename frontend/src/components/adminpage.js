/* import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookies';
import Login from "./login";


const adminpage = () => {  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(async () => {
        const response = await axios.post("http://localhost:5000/getlist", { name, email });
        console.log(response);
        setName(name);
        setEmail(email);
    })
    return (
        <Row className='px-5 my-5'>
            <Col sm='12'>
                <p>{name}</p>
            </Col>
            <Col sm='12'>
                <p>{email}</p>
            </Col>
        </Row>


    );
};

export default adminpage;
 */