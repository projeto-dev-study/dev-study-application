import React from 'react'
import './Senha.css'

const Senha = (props) => {
  return (
    <input type="password" name="senha" id="senha" placeholder={props.children} />
  )
}

export default Senha
