import React from 'react'
import './Apresentation.css'
import Botao from '../../components/Botoes/Botao'

const Apresentation = () => {
  return (
    <div className='container'>
        <div className="cabecalho">
            <img src="src\assets\logo-dev.svg" alt="logo dev" />
        </div>
        <div className="cumprimento">
            <img src="src\assets\perfil.svg" alt="Perfil"/>
            <h1>Olá, Dev!</h1>
        </div>
        <div className="boxtext">
            <div className="text">Este é um jogo desafiador e educativo onde você pode testar seus conhecimentos em tópicos de programação de forma divertida. Aqui você responderá a perguntas de múltipla escolha sobre conceitos, linguagens e melhores práticas de desenvolvimento. Vamos ver se você é um especialista ou precisa aprimorar suas habilidades!</div>
        </div>
        <p className="ptext">Pronto para provar seu conhecimento?</p>
        <div className="acao">
            <Botao>Começar</Botao>
        </div>
    </div>
  )
}

export default Apresentation
