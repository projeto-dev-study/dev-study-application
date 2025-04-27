import React, {useState} from 'react'
import CaixaDeTexto from '../../components/Caixa de Texto/CaixaDeTexto'
import Senha from '../../components/Senha/Senha'
import './Login.css'
import Botao from '../../components/Botoes/Botao'
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom'
  

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='Login'>
        <img src="src/assets/logo-dev.svg" alt="logo dev" className='logo-login' />
        <CaixaDeTexto tipo="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)}/>
        <Senha tipo="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        
        <Botao className='botao-entrar-login'><Link to="/register">Entrar</Link></Botao>
        <Botao className='botao-cadastrar-login' onClick = {() => {navigate("register")}}>Cadastrar</Botao>
      </form>
    </div>
  )
}

export default Login;
