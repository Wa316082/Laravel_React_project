import React from 'react'

export default function Login() {
    const onSubmit=()=>{

    }
    return (
        <div className='login-signup-form animated fadeInDown'>
           <div className="form">
            <form  onSubmit={onSubmit}>
                <h1 className='title'>Login into your Accaount </h1>
                <input placeholder='Email' type="email" />
                <input placeholder='Password' type="password" />
                <button className='btn btn-block'>Login</button>
                <p className='message'>
                    Not Registered? <a href="/signup">Signup</a>
                </p>
            </form>
           </div>
        </div>
    )
}


