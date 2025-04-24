import React from 'react'
import './ApresentationATV.css'

const ApresentationATV = () => {
    return (
        <div className='container'>
            <div className="cabecalho">
                <button className='action'>
                    <img src="src\assets\botaovoltar.svg" alt="voltar" className='voltar' />
                </button>
                <img src="src\assets\logo-dev.svg" alt="logo dev" className='logo' />
                <div></div>
            </div>
            <div className="title">Evolução da Web</div>
            <div className="content">
                <span className='textcontent'>Explore a fascinante jornada da web, desde seus primórdios até as inovações atuais! Esta aula aborda:<br />
                    <span className='ponto'>História da Internet: Da ARPANET na Guerra Fria à comercialização e popularização.</span><br />
                    <span className='ponto'>Evolução da Web: As eras da Web 1.0 (estática), Web 2.0 (interativa), Web 3.0 (semântica) e além.</span><br />
                    <span className='ponto'>Tecnologias Chave: HTML, JavaScript, CSS, PHP, XMLHTTPRequest (Ajax), e frameworks como Angular e React.</span><br />
                    <span className='ponto'>Arquitetura Web: Modelos cliente-servidor, MVC e componentes essenciais (front-end, back-end, banco de dados).</span><br />
                    <span className='ponto'>Tendências: Design responsivo, mobile first e o futuro da web semântica.</span>
                    <br />
                    <br />
                    Teste seus conhecimentos neste quiz e descubra o quanto você domina a evolução da web!
                    <br />
                    <br />
                    Boa sorte!</span>
            </div>
            <div className="acao">
                <button className='botao'>Iniciar Quiz</button>
            </div>

        </div>
    )
}

export default ApresentationATV
