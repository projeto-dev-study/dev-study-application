import React from 'react'
import './Botao.css'

const Botao = (props) => {
  return (
    <button className={`Botao ${props.className}`}>{props.children}</button>
  )
}

export default Botao
