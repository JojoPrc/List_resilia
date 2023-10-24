import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  // Estado para rastrear o texto da pesquisa
  const [searchText, setSearchText] = useState('');
  
  // Estado para rastrear a mensagem de validação
  const [validationMessage, setValidationMessage] = useState('');

  // Função para lidar com a ação de pesquisa
  const handleSearch = () => {
    // Verifica se o campo de pesquisa está vazio ou apenas contém espaços em branco
    if (searchText.trim() === '') {
      setValidationMessage('Por favor, digite algo para pesquisar.');
    } else {
      setValidationMessage(''); // Limpa a mensagem de validação se a pesquisa for válida
      onSearch(searchText); // Chama a função de pesquisa passando o texto
      console.log("Busca:", searchText); // Registra a pesquisa no console para depuração
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Pesquisar tarefas"
      />
      <button onClick={handleSearch}>Pesquisar</button>
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // A propriedade 'onSearch' deve ser uma função
};

export default SearchBar;
