import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className='nav-link active' href='/products'>Back Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/login">Login</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Sign Up</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
