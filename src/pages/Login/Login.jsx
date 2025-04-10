import React from 'react'
import CaixaDeTexto from '../../components/Caixa de Texto/CaixaDeTexto'
import Senha from '../../components/Senha/Senha'
import './Login.css'
import Botao from '../../components/Botoes/Botao'
import { UserProvider, useUser } from '../../contexts/UserContext'

const LoginForm = () => {

  const {user, setUser} = useUser()

  return (
    <div className='Login'>
      <img src="src\assets\logo-dev.svg" alt="logo dev" className='Logo' />
      <CaixaDeTexto tipo={"email"} value={user.email} onChange={(e) =>
        setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
      } />
      <Senha>SENHA</Senha>
      <Botao>Entrar</Botao>
      <Botao>Cadastrar</Botao>
    </div>
  )
}

function Login() {
  return (
    <UserProvider>
      <LoginForm />
    </UserProvider>
  );
}

export default Login
