import React from 'react';

function SearchBar({ setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar cóctel..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
