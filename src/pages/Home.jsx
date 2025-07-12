import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import ProductFilter from '../components/ProductFilter';
import productsData from '../services/mockData';

const Home = () => {
    const [query, setQuery] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const filteredProducts = productsData.filter(prod => {
        const matchesQuery = prod.name.toLowerCase().includes(query.toLowerCase());
        let matchesPrice = true;

        if (priceRange === '1') matchesPrice = prod.price < 500000;
        else if (priceRange === '2') matchesPrice = prod.price >= 500000 && prod.price <= 1000000;
        else if (priceRange === '3') matchesPrice = prod.price > 1000000;

        return matchesQuery && matchesPrice;
    });

    return (
        <div>
            <h1>Sàn giáo dục thương mại điện tử</h1>
            <SearchBar query={query} setQuery={setQuery} />
            <ProductFilter priceRange={priceRange} setPriceRange={setPriceRange} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Home;
