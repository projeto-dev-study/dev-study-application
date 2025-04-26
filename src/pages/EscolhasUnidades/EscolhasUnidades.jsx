import React from 'react';
import './EscolhasUnidades.css';
import Botao from '../../components/Botoes/Botao';
import { useNavigate } from 'react-router-dom'; 

const FirstComponent = () => {
    const navigate = useNavigate(); 

    const handleUnitChoice = (unit) => {
        if (unit === 'I') {
            navigate('/home'); 
        } else if (unit === 'II') {
            navigate('/home'); 
        } else if (unit === 'III') {
            navigate('/home');
        }
    };

    return (
        <div>
        
            <button className='voltar-quiz' onClick={() => navigate(-1)}>
                <img src="src/assets/botaovoltar.svg" alt="voltar" className='seta-voltar-quiz'/>
            </button>

            <div>
                <h1 className='unidade'>Unidades</h1>
            </div>
            <div className='botoes'>
                <button className="unidadeI" onClick={() => handleUnitChoice('I')}> I </button>
                <button className="unidadeII" onClick={() => handleUnitChoice('II')}> II </button>
                <button className="unidadeIII" onClick={() => handleUnitChoice('III')}> III </button>
            </div>
        </div>
    );
};

export default FirstComponent;
