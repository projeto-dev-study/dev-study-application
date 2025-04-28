import React from 'react';
import './Senha.css';

const Senha = ({ value, onChange, error }) => {
  return (
    <div className="input-container">
      <input 
        type="password" 
        placeholder="SENHA"
        value={value}
        onChange={onChange}
        className={`Senha ${error ? 'error' : ''}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Senha;