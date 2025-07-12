import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;
