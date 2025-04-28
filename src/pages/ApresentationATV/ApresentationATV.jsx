import React from "react";
import "./ApresentationATV.css";
import { useLocation, useNavigate } from "react-router-dom";
import description from "../../data/description";

const ApresentationATV = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const levelFromState = location.state?.level ?? 0;
  const activity = description[levelFromState];

  if (!activity) {
    return (
      <div className="error-container">
        <h2>Atividade não encontrada!</h2>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    );
  }

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { level: levelFromState } });
  };

  return (
    <div className="container">
      <button className="voltar-quiz" onClick={() => navigate("/home")}>
        <img src="src/assets/botaovoltar.svg" alt="voltar" className="seta-voltar-quiz"
        />
      </button>

      <div className="cabecalho">
        <img
          src="src/assets/logo-dev.svg"
          alt="logo dev"
          className="logo-apresentation-atv"
        />
      </div>

      <div className="title">{activity.title}</div>

      <div className="content">
        {activity.description.map((paragraph, index) => (
          paragraph ? <p key={index} className="text-atividade">{paragraph}</p> : <br key={index} />
        ))}
      </div>

      <div className="acao">
        <button className="botao-iniciar-quiz" onClick={handleStartQuiz}>
          Iniciar Quiz
        </button>
      </div>
    </div>
  );
};

export default ApresentationATV;
