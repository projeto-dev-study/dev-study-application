import React, { useState } from 'react';
import './Quiz.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePhase } from '../../contexts/PhaseContext';
import questions from '../../data/questions';

const Quiz = () => {
    const { state: phaseState, nextLevel } = usePhase();
    const location = useLocation();
    const navigate = useNavigate();
    
    const levelFromState = location.state?.level;
    const level = levelFromState !== undefined ? levelFromState : 0;
    
    if (!questions[level]) {
        console.error("Nível inválido:", {
            receivedLevel: levelFromState,
            adjustedLevel: level,
            availableLevels: Object.keys(questions)
        });
        return (
            <div className="error-container">
                <h2>Nível ainda não disponível</h2>
                <p>Estamos preparando este conteúdo.</p>
                <button onClick={() => navigate('/')}>Voltar para Home</button>
            </div>
        );
    }

    const levelQuestions = questions[level];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (!selectedOption) {
            alert('Por favor selecione uma opção');
            return;
        }

        const isCorrect = selectedOption === levelQuestions[currentQuestionIndex].answer;
        const newScore = isCorrect ? score + 1 : score;

        if (currentQuestionIndex < levelQuestions.length - 1) {
            setScore(newScore);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            const finalScore = isCorrect ? newScore : score;
            const isSuccess = (finalScore / levelQuestions.length) >= 0.7;
            
            if (isSuccess && levelFromState !== undefined) {
                nextLevel();
            }
            
            navigate(isSuccess ? '/resultcongratulation' : '/resultinsufficient', {
                state: {
                    score: finalScore,
                    total: levelQuestions.length,
                    level: levelFromState
                }
            });
        }
    };

    return (
        <div className='container-quiz'>
            <button className='voltar-quiz' onClick={() => navigate(-1)}>
                <img src="/assets/botaovoltar.svg" alt="voltar" />
            </button>

            <h1 className='titulo-quiz'>Unidade {level}</h1>
            
            <div className='progresso-quiz'>
                Pergunta {currentQuestionIndex + 1} de {levelQuestions.length}
            </div>

            <div className='box-quiz'>
                <div className='pergunta-quiz'>
                    {levelQuestions[currentQuestionIndex].question}
                </div>

                {levelQuestions[currentQuestionIndex].options.map((option, index) => (
                    <button
                        key={index}
                        className={`resposta-quiz ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}

                <button 
                    className='botao-avancar-quiz' 
                    onClick={handleNextQuestion}
                    disabled={!selectedOption}
                >
                    {currentQuestionIndex < levelQuestions.length - 1 ? 'Próxima' : 'Finalizar'}
                </button>
            </div>
        </div>
    );
};

export default Quiz;