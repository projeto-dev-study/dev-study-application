import React from 'react'
import CaixaDeTexto from '../components/Caixa de Texto/CaixaDeTexto'
import Senha from '../components/Senha/Senha'
import './Login.css'
import Botao from '../components/Botoes/Botao'

const Login = () => {
  return (
    <div className='Login'>
        <img src="src\assets\logo-dev.svg" alt="logo dev" className='Logo'/>
        <CaixaDeTexto>E-MAIL</CaixaDeTexto>
        <Senha>SENHA</Senha>
        <Botao>Entrar</Botao>
        <Botao>Cadastrar</Botao>
    </div>
  )
}

export default Login
