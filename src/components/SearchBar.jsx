import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
    console.log("Search Text:", searchText);

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
    </div>
  );
}

export default SearchBar;
