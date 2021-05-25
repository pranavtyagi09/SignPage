import React, { useState, useEffect, useRef } from 'react';
import classes from './SignInForm.module.css';


const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const emailId = useRef();
    const password = useRef();
    const [formIsValid, setFormIsValid] = useState();

    useEffect(()=>{
        setFormIsValid(email.includes('@') && pass.trim().length > 8);      //Password must have atleast 8 character
    },[email,pass])


    const submitHandler = (event) => {
        event.preventDefault();
        setEmail(emailId.current.value);
        setPass(password.current.value);
    };

    const Success = (<div role="alert" className={classes.success}>Login Success!</div>);

    return (
        <div role="main" aria-label="Please fill in the below email and password for sign in" className = {classes.login}>
            {formIsValid && Success}
            <form onSubmit={submitHandler}>
                <h1>Sign in</h1>
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        type="email"
                        id="email"
                        ref={emailId}
                        aria-label="Please enter a valid email"
                        required
                    />
                </div>
                <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <br/>
                <input
                    type="password"
                    id="password"
                    ref={password}
                    aria-label="Please enter atleast 8 characters"
                    required
                />
                </div>
                <div>
                    <input type="checkbox" id="rem" name="rem" />
                    <label for="rem">Remember me?</label>
                </div>
                <div>
                <button type="submit">Sign in</button>
                </div>
            </form>
            <div className={classes.others}>
                <a href="#">Forgot your password?</a>
                <span>Don't have an account? <a href="#">Sign up</a></span>
                <a href="#">Resend email confirmation</a>
            </div>
        </div>
    );
    
}

export default SignInForm;