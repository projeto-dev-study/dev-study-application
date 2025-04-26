import React from 'react'
import CaixaDeTexto from '../../components/Caixa de Texto/CaixaDeTexto'
import Senha from '../../components/Senha/Senha'
import './Login.css'
import Botao from '../../components/Botoes/Botao'
import { UserProvider, useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'; 
const LoginForm = () => {

  const {user, setUser} = useUser()
  const navigate = useNavigate();

  const handleLogin = (choice) => {
    if (choice === 'entrar') {
      navigate('/Apresentation');
    } else if (choice === 'cadastrar') {
      navigate('/register'); 
    }
  }
  return (
    <div className='Login'>
      <img src="src\assets\logo-dev.svg" alt="logo dev" className='logo-login' />
      <CaixaDeTexto tipo={"email"} value={user.email} onChange={(e) =>
        setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
      } />
      <Senha value={user.senha} onChange={(e) =>
        setUser((prevUser) => ({ ...prevUser, senha: e.target.value }))
      }/>
      <Botao className='botao-entrar-login' onClick={() =>
        handleLogin('entrar')
      }>Entrar</Botao>
      <Botao className='botao-cadastrar-login' onClick ={() => handleLogin('cadastrar')}>Cadastrar</Botao>
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
