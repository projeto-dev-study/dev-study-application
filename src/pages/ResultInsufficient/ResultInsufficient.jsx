import React from 'react';
import './ResultInsufficient.css'; 
import { useNavigate, useLocation } from 'react-router-dom';

const ResultInsufficient = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { score, total } = location.state || { score: 0, total: 0 };

    const handleRetry = () => {
        navigate(-1);
    };

    const resultMessage = score === 0
        ? 'Você errou todas as questões'
        : `Você acertou ${score}/${total}`;

    return (
        <div className='image-container'>
            <button className='voltar-quiz' onClick={() => navigate('/home')}>
                <img src="src/assets/botaovoltar.svg" alt="voltar" className='seta-voltar-quiz' />
            </button>

            <img src="src/assets/logo-dev.svg" alt="logo dev" className='Logo' />
            <h1 className='resultado'>Resultado</h1>

            <div className="box">
                <h1 className='insufficient'>Que pena!</h1>
                <img src="src/assets/resultados/reprovado.svg" alt="icone sad" className='icone-sad' />
                <h2 className='acertos'>{resultMessage}</h2>

                <button 
                    className='botao-repetir'
                    onClick={handleRetry}
                >
                    Repetir
                </button>
            </div>
        </div>
    );
};

export default ResultInsufficient;