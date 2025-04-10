import React from 'react'
import './CaixaDeTexto.css'

const CaixaDeTexto = ({tipo, value, onChange}) => {
  let placeholder = ''

  if (tipo === 'email') placeholder = 'E-MAIL';
  if (tipo === 'nome') placeholder = 'NOME';

  return (
    <input 
    type="text" 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    className='Caixa_Texto' />
  )
}

export default CaixaDeTexto
