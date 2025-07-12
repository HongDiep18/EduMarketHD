import React from 'react';
import '../styles/ProductFilter.css'; // Tách riêng style cho dễ quản lý
import { categories, priceRanges } from '../services/mockData';

const ProductFilter = ({
    selectedCategory,
    selectedPriceRange,
    onCategoryChange,
    onPriceRangeChange,
}) => {
    return (
        <div className="filter-container">
            <div className="filter-group">
                <h3 className="filter-title"><i className="fa-solid fa-list"></i>Danh mục</h3>
                <div className="filter-options">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="filter-group">
                <h3 className="filter-title"><i className="fa-solid fa-coins"></i>Khoảng giá</h3>
                <div className="filter-options">
                    {priceRanges.map((range, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${selectedPriceRange === index ? 'active' : ''}`}
                            onClick={() => onPriceRangeChange(index)}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
