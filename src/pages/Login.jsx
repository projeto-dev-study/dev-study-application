import React from 'react'
import CaixaDeTexto from '../components/Caixa de Texto/CaixaDeTexto'
import Senha from '../components/Senha/Senha'
import './Login.css'

const Login = () => {
  return (
    <div className='Login'>
        <img src="src\assets\logo-dev.svg" alt="logo dev" />
        <CaixaDeTexto>Email</CaixaDeTexto>
        <Senha>Senha</Senha>
    </div>
  )
}

export default Login
