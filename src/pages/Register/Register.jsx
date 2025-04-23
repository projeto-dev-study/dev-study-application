import React from 'react'
import CaixaDeTexto from '../../components/Caixa de Texto/CaixaDeTexto'
import Senha from '../../components/Senha/Senha'
import './Register.css'
import Botao from '../../components/Botoes/Botao'
import { UserProvider, useUser } from '../../contexts/UserContext'

const RegisterForm = () => {

  const {user, setUser} = useUser()

  return (
    <div className='Register'>
      <img src="src\assets\logo-dev.svg" alt="logo dev" className='Logo' />
      <CaixaDeTexto tipo={"text"} value={user.name} onChange={(e) =>
        setUser((prevUser) => ({...prevUser, name: e.target.value }))
      }/>
      <CaixaDeTexto tipo={"email"} value={user.email} onChange={(e) =>
        setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
      } />
      <Senha value={user.senha} onChange={(e) =>
        setUser((prevUser) => ({ ...prevUser, senha: e.target.value }))
      }/>
      <Botao>Cadastrar</Botao>
    </div>
  )
}

function Register() {
  return (
    <UserProvider>
      <RegisterForm />
    </UserProvider>
  );
}

export default Register
