import React from 'react'
import './Quiz.css'
import Botao from '../../components/Botoes/Botao'
import { useLocation, useNavigation } from 'react-router-dom'
import questions from '../../data/questions'


const Quiz = () => {

    const location = useLocation();
    const navigation = useNavigation();
    const level = location.state?.level || 0;
    const levelQuestions = questions[level];
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState('');
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const handleNextQuestion = () => {
        if (selectedOption === levelQuestions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < levelQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption('');
        } else {
            const isSuccess = (score / levelQuestions.length) >= 0.7;
            if (isSuccess) {
                navigation.navigate('/resultcongratulation');
            } else {
                navigation.navigate('/resultinsufficient');
            }
        }

        return (
            <div className='container-quiz'>
                <button className='voltar-quiz'>
                    <img src="src\assets\botaovoltar.svg" alt="voltar" className='seta-voltar-quiz' />
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

}
    export default Quiz;