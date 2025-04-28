import React from 'react';
import './CaixaDeTexto.css';

const CaixaDeTexto = ({ tipo, value, onChange, error }) => {
  let placeholder = '';
  let inputType = 'text';

  if (tipo === 'email') {
    placeholder = 'E-MAIL';
    inputType = 'email';
  } else if (tipo === 'nome') {
    placeholder = 'NOME';
  }

  return (
    <div className="input-container">
      <input 
        type={inputType} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className={`Caixa_Texto ${error ? 'error' : ''}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CaixaDeTexto;