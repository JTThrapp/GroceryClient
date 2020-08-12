import React, {useState} from 'react';
import './Auth.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import food from '../../assets/food.jpg'
import APIURL from '../../helpers/environment'


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from '../Contact/Contact';

    const Auth = (props) => {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [login, setLogin] = useState(true);
        

        const loginToggle = (event) => {

            setLogin(!login);
            
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
        
        }

        const signupFields = () => !login ?
            (
                <div>
                    <TextField type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="filled" htmlFor="firstName" />
                    <br/>
                    <TextField type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="filled" htmlFor="lastName" />
                    <br/>
                </div>
            ) : null;

        const handleSubmit = (e) => {
            e.preventDefault();

            const url = login ? `${APIURL}/auth/signin` :
            `${APIURL}/auth/signup`

            const bodyObj = login ? {
                email: email,
                password: password
            } : {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(bodyObj),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(json => props.updateToken(json.sessionToken))
        }


    return(
        <div class="home">
            <bio>
                <img id="food" src={food} alt="food" />

                <ValidatorForm id = "loginForm" onSubmit={handleSubmit}>
                    <br/>
                    {signupFields()}
                    <TextValidator
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['This field is required', 'email is not valid']}
                        variant="filled"
                        autoComplete="off"
                    />

                    <TextField type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="filled" htmlFor="password" />
                    <br/>
                    <span>Login</span><Switch onChange={loginToggle} color="primary">{login ? 'Signup' : 'Login'}</Switch><span>Register</span>
                    <br/>
                    <Button variant="contained" id="submitButton" type="submit">Submit</Button>

                </ValidatorForm>
            </bio>
        </div>
    )
}

export default Auth;