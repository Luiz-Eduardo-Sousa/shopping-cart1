import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/featchProducts';
import AppContext from '../../context/AppContext';


function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searcValue, setSearcValue] = useState('');
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searcValue);
    setProducts(products);
    setLoading(false);
    setSearcValue('');
  };

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input 
        type="search" 
        value={searcValue}
        placeholder="Buscar produtos" className="search__input"
        onChange={ ({ target }) => setSearcValue(target.value) } 
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
