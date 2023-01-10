import React, { useRef } from 'react'
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();


    const {setUser, setToken} = useStateContext()

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {

            email: emailRef.current.value,
            password: passwordRef.current.value,

        }

        axiosClient.post('/login',payload)
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
            <form  onSubmit={onSubmit}>
                <h1 className='title'>Login into your Accaount </h1>
                <input ref= {emailRef} placeholder='Email' type="email" />
                <input ref= {passwordRef} placeholder='Password' type="password" />
                <button className='btn btn-block'>Login</button>
                <p className='message'>
                    Not Registered? <a href="/signup">Signup</a>
                </p>
            </form>
           </div>
        </div>
    )
}


