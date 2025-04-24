import React from 'react';
import './EscolhasUnidades.css';
import Botao from '../../components/Botoes/Botao'



const FirstComponent = () => {
    return(
        <div>

            <div>
                <h1 className='unidade'>Unidades</h1>
            </div>

            <div className='botoes'>
                <button className="unidadeI"> I </button>
                <button className="unidadeII"> II </button>
                <button className="unidadeIII"> III </button>
            </div>

        </div>
    )
}

export default FirstComponent;