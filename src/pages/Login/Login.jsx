import React, { useState } from 'react';
import CaixaDeTexto from '../../components/Caixa de Texto/CaixaDeTexto';
import Senha from '../../components/Senha/Senha';
import './Login.css';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validação básica
    if (!email || !senha) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    // Verificar usuário no localStorage
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
      // Salvar usuário na sessionStorage
      sessionStorage.setItem("currentUser", JSON.stringify({
        name: user.name,
        email: user.email
      }));
      
      navigate('/apresentation');
    } else {
      setError("E-mail ou senha incorretos");
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='Login'>
        <img src="src/assets/logo-dev.svg" alt="logo dev" className='logo-login' />
        
        {error && <div className="error-message">{error}</div>}
        
        <CaixaDeTexto 
          tipo="email"
          placeholder="E-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Senha 
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        <button type="submit" className='botao-entrar-login'>
          Entrar
        </button>
        
        <button 
          type="button"
          className='botao-cadastrar-login'
          onClick={handleRegister}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Login;