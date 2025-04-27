import React from "react";
import CaixaDeTexto from "../../components/Caixa de Texto/CaixaDeTexto";
import Senha from "../../components/Senha/Senha";
import "./Register.css";
import { UserProvider, useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleUnitChoice = () => {
    navigate("/apresentation");
  };

  return (
    <div className="Register">
      <button className="voltar-quiz" onClick={() => navigate(-1)}>
        <img
          src="src/assets/botaovoltar.svg"
          alt="voltar"
          className="seta-voltar-quiz"
        />
      </button>

      <img
        src="src\assets\logo-dev.svg"
        alt="logo dev"
        className="logo-tela-cadastro"
      />
      <CaixaDeTexto
        tipo={"nome"}
        value={user.name}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, name: e.target.value }))
        }
      />
      <CaixaDeTexto
        tipo={"email"}
        value={user.email}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
        }
      />
      <Senha
        value={user.senha}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, senha: e.target.value }))
        }
      />
      <button className="botao-cadastrar" onClick={handleUnitChoice}>
        Cadastrar
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
