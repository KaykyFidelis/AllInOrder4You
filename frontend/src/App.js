// App.js
import React, { useState } from 'react';
import InsertUsers from './components/InsertUsers';
import ListUsers from './components/ListUsers';
import './App.css';

const App = () => {
  const [pessoas, setPessoas] = useState([]);

  const handleAdicionarPessoa = (novaPessoa) => {
    setPessoas([...pessoas, novaPessoa]);
  };

  return (
    <div className="App-Container">
      <InsertUsers onAdicionarPessoa={handleAdicionarPessoa} />
      <ListUsers pessoas={pessoas} />
    </div>
  );
};

export default App;
