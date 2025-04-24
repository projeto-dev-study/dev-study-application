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
                <Botao > I      </Botao>
                <Botao> II </Botao>
                <Botao> III </Botao>
            </div>

        </div>
    )
}

export default FirstComponent;