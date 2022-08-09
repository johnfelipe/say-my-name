import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Escribe 3 palabras separadas por coma"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
