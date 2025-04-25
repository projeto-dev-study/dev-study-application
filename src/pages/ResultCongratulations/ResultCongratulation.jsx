import React from 'react';
import './ResultCongratulation.css'; 
import Botao from '../../components/Botoes/Botao';  

const ResultCongratulation = () => {
    return (
        <div className='image-container'>
            <img src="src\assets\logo-dev.svg" alt="logo dev" className='Logo' />
            <h1 className='resultado'>Resultado</h1>
            <div className="box">
                <h1 className='parabens'>Párabens</h1>
                <img src="src\assets\icone-resultado.svg" alt="icone resultado" className='icone-resultado' />
                <h2 className='acertos'>Você acertou 3/5</h2>
                <Botao className='botao-avancar-resultado'>Avançar</Botao>
            </div>
            
        </div>
       

           
        

    )}

export default ResultCongratulation;