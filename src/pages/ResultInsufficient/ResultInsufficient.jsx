import React from 'react';
import './ResultInsufficient.css'; 
import Botao from '../../components/Botoes/Botao';  

const ResultInsufficient = () => {
    return (
        <div className='image-container'>
            <img src="src\assets\logo-dev.svg" alt="logo dev" className='Logo' />
            <h1 className='resultado'>Resultado</h1>
            <div className="box">
                <h1 className='insufficient'>Que pena</h1>
                <img src="src\assets\icone-sad.svg" alt="icone sad" className='icone-sad' />
                <h2 className='acertos'>Você errou todas</h2>
                <Botao>Repetir</Botao>
            </div>
            
        </div>
       

           
        

    )}

export default ResultInsufficient;