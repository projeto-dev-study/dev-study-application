import React, { useState } from 'react';
import CaixaDeTexto from '../../components/Caixa de Texto/CaixaDeTexto';
import Senha from '../../components/Senha/Senha';
import './Login.css';
import Botao from '../../components/Botoes/Botao';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
   const navigate = useNavigate(); 
  
      const handleUnitChoice = (unit) => {
          if (unit === 'I') {
              navigate('/apresentation'); 
          } else if (unit === 'II') {
              navigate('/register'); 
          };
        }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='Login'>
        <img src="src/assets/logo-dev.svg" alt="logo dev" className='logo-login' />
        <CaixaDeTexto tipo="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} />
        <Senha tipo="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        
        <button className='botao-entrar-login' onClick={() => handleUnitChoice('I')}>Entrar</button>
        <button className='botao-cadastrar-login' onClick={() => handleUnitChoice('II')}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Login;
