import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import "./login-view.scss";
import { Form, Button, } from "react-bootstrap";

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Send a request to the server for authentication */
        axios.post('https://mymovies-4523.herokuapp.com/login', {
            Username: username,
            Password: password
        })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data);
            })
            .catch(e => {
                console.log('no such user')
            });
    };

    //OLD CODE SAVING IN CASE THERE IS A BUG

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username, password);
    //     // Send a request to the server for authentication, then call props.onLoggedIn(username)
    //     props.onLoggedIn(username);
    // };


    return (
        <>
            <div class="header">
                <h1>Welcome to myFlix!</h1>
                <p>Please log in to continue</p>
            </div>
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <div class="button-container">
            <Button id="login-button" variant="primary" type="submit" onClick={handleSubmit}>
                Login
            </Button>
            </div>
        </Form>
        </>
    );
}

LoginView.propTypes = {
    register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired
};