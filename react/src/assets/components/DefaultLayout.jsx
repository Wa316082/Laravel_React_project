import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../contexts/ContextProvider'

export default function () {

    const { user, token , setUser, setToken } = useStateContext()
    if (!token) {
        return <Navigate to="/products" />
    }
    const onLogout = (e) => {
        e.preventDefault()
        axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

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
                        {user.name} &nbsp; &nbsp;
                        <a className='btn-logout' href='#'  onClick={onLogout}>Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
