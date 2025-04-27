import React, { useState } from 'react';
import './Quiz.css';
import Botao from '../../components/Botoes/Botao';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePhase } from '../../contexts/PhaseContext';
import questions from '../../data/questions';

const Quiz = () => {
    const { state: phaseState, nextLevel } = usePhase();
    const location = useLocation();
    const navigate = useNavigate();
    
    // Obtém o nível e ajusta para o formato do questions.js (1-5)
    const levelFromState = location.state?.level !== undefined ? location.state.level + 1 : 1;
    
    if (!questions[levelFromState]) {
        return (
            <div className="error-container">
                <h2>Conteúdo em desenvolvimento</h2>
                <button onClick={() => navigate('/')}>Voltar para Home</button>
            </div>
        );
    }

    const levelQuestions = questions[levelFromState];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleOptionClick = (option) => {
        if (!showFeedback) {
            setSelectedOption(option);
        }
    };

    const handleNextQuestion = () => {
        // Verifica se uma opção foi selecionada
        if (selectedOption === null) {
            alert('Por favor, selecione uma resposta antes de avançar!');
            return;
        }

        // Mostra feedback visual
        setShowFeedback(true);

        // Calcula pontuação
        const isCorrect = selectedOption === levelQuestions[currentQuestionIndex].answer;
        const newScore = isCorrect ? score + 1 : score;

        // Temporizador para avançar ou finalizar
        setTimeout(() => {
            if (currentQuestionIndex < levelQuestions.length - 1) {
                // Próxima pergunta
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setShowFeedback(false);
            } else {
                // Final do quiz
                const finalScore = isCorrect ? newScore : score;
                const isSuccess = (finalScore / levelQuestions.length) >= 0.7;
                
                if (isSuccess && location.state?.level !== undefined) {
                    nextLevel();
                }
                
                navigate(isSuccess ? '/resultcongratulation' : '/resultinsufficient', {
                    state: {
                        score: finalScore,
                        total: levelQuestions.length,
                        level: location.state?.level
                    }
                });
            }
        }, 1000); // 1 segundo de feedback visual
    };

    // Estilo condicional para feedback visual
    const getButtonClass = (option) => {
        if (!showFeedback) return selectedOption === option ? 'selected' : '';
        
        const isCorrectAnswer = option === levelQuestions[currentQuestionIndex].answer;
        const isSelected = option === selectedOption;
        
        if (isCorrectAnswer) return 'correct';
        if (isSelected && !isCorrectAnswer) return 'incorrect';
        return '';
    };

    return (
        <div className='container-quiz'>
            <button className='voltar-quiz' onClick={() => navigate(-1)}>
                <img src="/assets/botaovoltar.svg" alt="voltar" />
            </button>

            <h1 className='titulo-quiz'>Unidade {levelFromState}</h1>
            
            <div className='progresso-quiz'>
                Pergunta {currentQuestionIndex + 1} de {levelQuestions.length}
            </div>

            <div className='box-quiz'>
                <div className='pergunta-quiz'>
                    {levelQuestions[currentQuestionIndex].question}
                </div>

                <div className='opcoes-container'>
                    {levelQuestions[currentQuestionIndex].options.map((option, index) => (
                        <Botao
                            key={index}
                            className={`resposta-quiz ${getButtonClass(option)}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={showFeedback}
                        >
                            {option}
                        </Botao>
                    ))}
                </div>

                <Botao 
                    className='botao-avancar-quiz' 
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null || showFeedback}
                >
                    {currentQuestionIndex < levelQuestions.length - 1 ? 'Próxima' : 'Finalizar'}
                </Botao>
            </div>
        </div>
    );
};

export default Quiz;