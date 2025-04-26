import React from 'react'
import './Quiz.css'
import Botao from '../../components/Botoes/Botao'

const Quiz = () => {
    return (
       <div className='container-quiz'>
        <button className='voltar-quiz'>
                    <img src="src\assets\botaovoltar.svg" alt="voltar" className='seta-voltar-quiz'/>
                </button>
        <img src="src\assets\logo-dev.svg" alt="logo dev" className='logo-apresentation-quiz' />
        <h1 className='titulo-quiz'>Quiz</h1>
        <div className='box-quiz'>
            <div className='pergunta-quiz'>Qual é a linguagem de programação mais utilizada para desenvolvimento web?</div>
            <Botao className='resposta-quiz'>HTML</Botao>
            <Botao className='resposta-quiz'>HTML</Botao>
            <Botao className='resposta-quiz'>HTML</Botao>
            <Botao className='resposta-quiz'>HTML</Botao>
            <Botao className='botao-avancar-quiz'>Avançar</Botao>
        </div>
       </div>
    )
} 

export default Quiz