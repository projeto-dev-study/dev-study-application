import React from 'react';
import './EscolhasUnidades.css';
import { useNavigate } from 'react-router-dom'; 

const FirstComponent = () => {
    const navigate = useNavigate(); 

    const handleUnitChoice = (unit) => {
        if (unit === 'I') {
            navigate('/home'); 
        } else if (unit === 'II') {
            navigate('/homeII'); 
        } else if (unit === 'III') {
            navigate('/homeIII');
        }
    };

    return (
        <div>
        
            <button className='voltar-quiz' onClick={() => navigate("/apresentation")}>
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
