import React from 'react'
import { Outlet } from 'react-router-dom'

function Register() {
  return (
    <div>
        <h2>Kayıt Ol</h2>
        <input placeholder='email giriniz'></input>
        <input type='password' placeholder='password giriniz'></input>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default Register