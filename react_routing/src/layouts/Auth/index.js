import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './styles.css'

function AuthLayout() {
  return (
    <div className='auth-container'>
      <div className='auth-menu'>
        <Link to='/auth'>Giriş Yap</Link>
        <Link to='/auth/register'>Kayıt ol</Link>
      </div>
        <hr/>
        <Outlet/>

    </div>
  )
}

export default AuthLayout
// yukarıdaki ilk linkte /auth yazmazsak her gittiği linkin üstüne ekleme yapar yani /auth/register/auth olur tekrardan fakat başına / işareti koyarsak localhost:3000 den sonraki tam adresi verdiğini söylemiş oluyorsun herhangi bir son gidilen url'in üstüne ekleme yapmamış olur! 