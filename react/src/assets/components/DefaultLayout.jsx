import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider'

export default function () {

    const { user, token } = useStateContext()
    if (!token) {
        return <Navigate to="/login" />
    }
    const onLogout = (e) => {
        e.preventDefault()
    }
    return (
        <div id='defaultLayout'>
            <aside>
                <a href="/users">Users</a>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>

                    <div>
                        {user.name}
                        <a className='btn-logout' href="#" onClick={onLogout}>Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
