import React from 'react'
import './Apresentation.css'
import Botao from '../../components/Botoes/Botao'
import EscolhasUnidades from '../EscolhasUnidades/EscolhasUnidades'
import { useNavigate } from 'react-router-dom'

const Apresentation = () => {

  const navigate = useNavigate();

  return (
    <div className='container'>
     <button className='voltar-quiz'>
                    <img src="src/assets/botaovoltar.svg" alt="voltar" className='seta-voltar-quiz'/>
                </button>
            <img src="src/assets/logo-dev.svg" alt="logo dev" className='logo-apresentation'/>
        <div className="foto-perfil">
            <img src="src/assets/perfil.svg" alt="Perfil"/>
        </div>
        <h1 className='cumprimento'>Olá, Dev!</h1>
        <div className="boxtext">
            <p className='text-perfil'>Este é um jogo desafiador e educativo onde você pode testar seus conhecimentos em tópicos de programação de forma divertida. Aqui você responderá a perguntas de múltipla escolha sobre conceitos, linguagens e melhores práticas de desenvolvimento. Vamos ver se você é um especialista ou precisa aprimorar suas habilidades!</p>
        </div>
        <p className='frase-conhecimento'>Pronto para provar seu conhecimento?</p>
        <button className='botao-comecar' onClick={navigate("/EscolhasUndades")}>Começar</button>      
    </div>
  )
}

export default Apresentation
