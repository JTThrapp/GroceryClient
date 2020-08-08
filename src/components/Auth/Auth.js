import React, {useState} from 'react';
import './Auth.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);


    //! If we want a title for the signup/login form
    // const title = () => {
    //     return login ? 'Login' : 'Signup'
    // }
    

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

        const url = login ? 'http://localhost:3000/auth/signin' :
        'http://localhost:3000/auth/signup'

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
        <div>
            <form onSubmit={handleSubmit}>
                <br/>
                {signupFields()}
                <TextField type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="filled" htmlFor="email" />
                <br/>
                <TextField type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="filled" htmlFor="password" />
                <br/>
                <span>Login</span><Switch onChange={loginToggle} color="primary">{login ? 'Signup' : 'Login'}</Switch><span>Register</span>
                <br/>
                <Button variant="contained" id="submitButton" type="submit">Submit</Button>

            </form>
        </div>
    )
}

export default Auth;