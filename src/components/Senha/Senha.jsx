import React from 'react'
import './Senha.css'

const Senha = ({value, onChange}) => {
  return (
    <input type="password" 
    placeholder="SENHA"
    value={value}
    onChange={onChange}
    className='Senha'/>
  )
}

export default Senha
