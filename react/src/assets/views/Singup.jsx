import React from 'react'
import { useRef } from 'react';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';

export default function Singup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext()

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        axiosClient.post('/signup',payload)
        .then(({data})=>{
            setToken(data.token)
            setUser(data.user)
        })
        .catch(err=>{
            const response = err.response;
            if(response && response.status === 422){
                console.log(response.data.errors);
            }
        })

    }
    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className='title'>SignUp</h1>
                    <input ref={nameRef} placeholder='Name' type="text" />
                    <input ref={emailRef} placeholder='Email' type="email" />
                    <input ref={passwordRef} placeholder='Password' type="password" />
                    <input ref={passwordConfirmationRef} placeholder='Password Confirmation' type="password" />
                    <button className='btn btn-block'>Singnup</button>
                    <p className='message'>
                        Already Registered? <a href="/login">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
