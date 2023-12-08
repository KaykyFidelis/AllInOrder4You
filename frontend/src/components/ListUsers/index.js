// Lista.js
import React from 'react';

const ListUsers = ({ pessoas }) => {
  return (
    <ul>
      {pessoas.map((pessoa, index) => (
        <li key={index}>
          {pessoa.nome} - Números: {pessoa.numeros.join(', ')}
        </li>
      ))}
    </ul>
  );
};

export default ListUsers;
