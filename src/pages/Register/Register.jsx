import React, { useState } from "react";
import CaixaDeTexto from "../../components/Caixa de Texto/CaixaDeTexto";
import Senha from "../../components/Senha/Senha";
import "./Register.css";
import { UserProvider, useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Função para validar email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Função para validar formulário
  const validateForm = () => {
    const newErrors = {};
    
    if (!user.name || user.name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }
    
    if (!validateEmail(user.email)) {
      newErrors.email = "Por favor, insira um email válido";
    }
    
    if (!user.senha || user.senha.length < 6) {
      newErrors.senha = "Senha deve ter pelo menos 6 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Armazenar no localStorage
  const storeUserData = () => {
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const userExists = users.some(u => u.email === user.email);
    
    if (userExists) {
      setErrors({ email: "Este email já está cadastrado" });
      return false;
    }
    
    users.push({
      name: user.name,
      email: user.email,
      senha: user.senha, // Na prática, você deve armazenar hash da senha, não a senha em si
      createdAt: new Date().toISOString()
    });
    
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      if (storeUserData()) {
        navigate("/apresentation", { 
          state: { 
            registrationSuccess: true,
            userName: user.name
          }
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ general: "Ocorreu um erro durante o cadastro" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Register">
      <button className="voltar-quiz" onClick={() => navigate(-1)}>
        <img
          src="src\assets\botaovoltar.svg"
          alt="voltar"
          className="seta-voltar-quiz"
        />
      </button>

      <img
        src="src/assets/logo-dev.svg"
        alt="logo dev"
        className="logo-tela-cadastro"
      />
      
      {errors.general && <div className="error-message">{errors.general}</div>}
      
      <CaixaDeTexto
        tipo={"nome"}
        value={user.name}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, name: e.target.value }))
        }
        error={errors.name}
      />
      
      <CaixaDeTexto
        tipo={"email"}
        value={user.email}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
        }
        error={errors.email}
      />
      
      <Senha
        value={user.senha}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, senha: e.target.value }))
        }
        error={errors.senha}
      />
      
      <button 
        className="botao-cadastrar" 
        onClick={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </div>
  );
};

function Register() {
  return (
    <UserProvider>
      <RegisterForm />
    </UserProvider>
  );
}

export default Register;
