import React from 'react'
import './Home.css'
import { usePhase } from '../../contexts/PhaseContext'
import { Navigate } from 'react-router-dom';

const Home = () => {

  const { state } = usePhase();

  const handleButtonClick = (level) => {
    Navigate(`/quiz`, { state: { level } });
  }

  return (
    <div className='containerhome'>
      <button className='voltar-quiz'>
        <img src="src\assets\botaovoltar.svg" alt="voltar" className='seta-voltar-quiz' />
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
          <button
            onClick={() => handleButtonClick(0)}
            className={`btn1 ${statusbar.level >= 0 ? 'active' : 'inactive'}`}
            disabled={state.level < 0}>
            <img src="src\assets\unidadeI\global-search.svg" alt="icon-global" className='icon1' />
          </button>
        </div>
        <div className="atv2">
          <button
            onClick={() => handleButtonClick(1)}
            className={`btn2 ${statusbar.level >= 1 ? 'active' : 'inactive'}`}
            disabled={state.level < 1}>
            <img src="src\assets\unidadeI\html1.svg" alt="icon-html" className='icon2' />
          </button>
        </div>
        <div className="atv3">
          <button
            onClick={() => handleButtonClick(2)}
            className={`btn3 ${statusbar.level >= 2 ? 'active' : 'inactive'}`}
            disabled={state.level < 2}>
            <img src="src\assets\unidadeI\css1.svg" alt="icon-css1" className='icon3' />
          </button>
        </div>
        <div className="atv4">
          <button
            onClick={() => handleButtonClick(3)}
            className={`btn4 ${statusbar.level >= 3 ? 'active' : 'inactive'}`}
            disabled={state.level < 3}>
            <img src="src\assets\unidadeI\trophy.svg" alt="icon-trofeu" className='icon4' />
          </button>
        </div>
      </div>
      <div className="atividades2">
        <div className="atv5">
          <button
            onClick={() => handleButtonClick(4)}
            className={`btn5 ${statusbar.level >= 4 ? 'active' : 'inactive'}`}
            disabled={state.level < 4}>
            <img src="src\assets\unidadeI\git.svg" alt="icon-git" className='icon5' />
          </button>
        </div>
        <div className="atv6">
          <button
            onClick={() => handleButtonClick(5)}
            className={`btn6 ${statusbar.level >= 5 ? 'active' : 'inactive'}`}
            disabled={state.level < 5}>
            <img src="src\assets\unidadeI\html2.svg" alt="icon-html" className='icon6' />
          </button>
        </div>
        <div className="atv7">
          <button
            onClick={() => handleButtonClick(6)}
            className={`btn7 ${statusbar.level >= 6 ? 'active' : 'inactive'}`}
            disabled={state.level < 6}>
            <img src="src\assets\unidadeI\css2.svg" alt="icon-css2" className='icon7' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
