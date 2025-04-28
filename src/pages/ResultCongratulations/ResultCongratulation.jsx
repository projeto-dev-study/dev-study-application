import React from 'react';
import './ResultCongratulation.css'; 
import { useLocation, useNavigate } from 'react-router-dom';

const ResultCongratulation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { score, total } = location.state || { score: 0, total: 0 };

    const handleAdvance = () => {
        navigate(`/home`);
    };

    return (
        <div className='image-container'>
            <button className='voltar-quiz' onClick={() => navigate('/')}>
                <img src="src/assets/botaovoltar.svg" alt="voltar" className='seta-voltar-quiz' onClick={() => navigate(-1)}/>
            </button>

            <img src="src/assets/logo-dev.svg" alt="logo dev" className='Logo' />
            <h1 className='resultado'>Resultado</h1>

            <div className="box">
                <h1 className='parabens'>Parabéns!</h1>
                <img src='src/assets/resultados/parabens.svg' alt="icone resultado" className='icone-resultado' />
                <h2 className='acertos'>Você acertou {score}/{total}</h2>

                <button 
                    className='botao-avancar-resultado'
                    onClick={handleAdvance}
                >
                    Avançar
                </button>
            </div>
        </div>
    );
};

export default ResultCongratulation;