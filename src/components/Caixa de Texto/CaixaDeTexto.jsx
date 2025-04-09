import React from 'react'
import './CaixaDeTexto.css'

const CaixaDeTexto = (props) => {
  return (
    <input type="text" placeholder={props.children} className='Caixa_Texto' />
  )
}

export default CaixaDeTexto
