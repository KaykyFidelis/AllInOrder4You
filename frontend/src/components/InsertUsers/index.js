// Formulario.js
import React, { useState } from 'react';
import './InsertUsers.css';

const InsertUsers = ({ onAdicionarPessoa }) => {
  const [nome, setNome] = useState('');
  const [numeros, setNumeros] = useState(Array(10).fill(''));

  const handleChange = (index, value) => {
    const newNumeros = [...numeros];
    newNumeros[index] = value;
    setNumeros(newNumeros);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionarPessoa({ nome, numeros });
    // Limpar os campos após a submissão (opcional)
    setNome('');
    setNumeros(Array(10).fill(''));
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
        <div className="form-container">
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    {[...Array(10)].map((_, index) => (
                    <th key={index}>N{index + 1}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </td>
                    {numeros.map((numero, index) => (
                    <td key={index}>
                        <input
                            className="small-input"  // Adiciona a classe para estilização
                            type="number"
                            value={numero}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                        </td>
                    ))}
                    <td><button type="submit">Adicionar</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </form>
  );
};

export default InsertUsers;
