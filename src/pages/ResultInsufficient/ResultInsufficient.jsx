import React from 'react';
import './ResultInsufficient.css'; 
import Botao from '../../components/Botoes/Botao';  

const ResultInsufficient = () => {
    return (
        <div className='image-container'>
            <button className='voltar-quiz'>
                    <img src="src\assets\botaovoltar.svg" alt="voltar" className='seta-voltar-quiz'/>
                </button>
            <img src="src\assets\logo-dev.svg" alt="logo dev" className='Logo' />
            <h1 className='resultado'>Resultado</h1>
            <div className="box">
                <h1 className='insufficient'>Que pena</h1>
                <img src="src\assets\resultados\reprovado.svg" alt="icone sad" className='icone-sad' />
                <h2 className='acertos'>Você errou todas</h2>
                <Botao className='botao-repetir'>Repetir</Botao>
            </div>
            
        </div>
       

           
        

    )}

export default ResultInsufficient;