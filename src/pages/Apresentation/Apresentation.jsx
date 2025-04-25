import React from 'react'
import './Apresentation.css'
import Botao from '../../components/Botoes/Botao'

const Apresentation = () => {
  return (
    <div className='container'>
            <img src="src\assets\logo-dev.svg" alt="logo dev" className='logo-apresentation'/>
        <div className="foto-perfil">
            <img src="src\assets\perfil.svg" alt="Perfil"/>
            
        </div>
        <h1 className='cumprimento'>Olá, Dev!</h1>
        <div className="boxtext">
            <p className='text-perfil'>Este é um jogo desafiador e educativo onde você pode testar seus conhecimentos em tópicos de programação de forma divertida. Aqui você responderá a perguntas de múltipla escolha sobre conceitos, linguagens e melhores práticas de desenvolvimento. Vamos ver se você é um especialista ou precisa aprimorar suas habilidades!</p>
        </div>
        <p className='frase-conhecimento'>Pronto para provar seu conhecimento?</p>
        <Botao className='botao-comecar'>Começar</Botao>      
    </div>
  )
}

export default Apresentation
