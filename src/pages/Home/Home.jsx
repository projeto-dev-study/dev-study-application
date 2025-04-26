import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='containerhome'>
      <button className='voltar-quiz'>
                    <img src="src\assets\botaovoltar.svg" alt="voltar" className='seta-voltar-quiz'/>
                </button>
      <div className="cab">
        <div className='space'></div>
        <div className="titlehome">Unidade I</div>
        <div className="map">
            <img src="src\assets\unidadeI\mapa.svg" alt="mapa" className='mapa' />
        </div>
      </div>
      <div className="atividades1">
        <div className="atv1">
            <button className='btn1'><img src="src\assets\unidadeI\global-search.svg" alt="icon-global" className='icon1'/></button>
        </div>
        <div className="atv2">
            <button className='btn2'><img src="src\assets\unidadeI\html1.svg" alt="icon-html" className='icon2'/></button>
        </div>
        <div className="atv3">
            <button className='btn3'><img src="src\assets\unidadeI\css1.svg" alt="icon-css1" className='icon3'/></button>
        </div>
        <div className="atv4">
            <button className='btn4'><img src="src\assets\unidadeI\trophy.svg" alt="icon-trofeu" className='icon4'/></button>
        </div>
      </div>
      <div className="atividades2">
        <div className="atv5">
            <button className='btn5'><img src="src\assets\unidadeI\git.svg" alt="icon-git" className='icon5'/></button>
        </div>
        <div className="atv6">
            <button className='btn6'><img src="src\assets\unidadeI\html2.svg" alt="icon-html" className='icon6'/></button>
        </div>
        <div className="atv7">
            <button className='btn7'><img src="src\assets\unidadeI\css2.svg" alt="icon-css2" className='icon7'/></button>
        </div>
      </div>
    </div>
  )
}

export default Home
