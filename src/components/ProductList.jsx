import ProductCard from './ProductCard';
import React from 'react';

const ProductList = ({ products, loading, onAddToWishlist, onViewDetails, onAddToCart, wishlistedIds = [] }) => {
    if (loading) {
        return (
            <div className="product-list-loading">
                <div className="loading-grid product-grid">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="product-skeleton">
                            <div className="skeleton-image"></div>
                            <div className="skeleton-content">
                                <div className="skeleton-line skeleton-title"></div>
                                <div className="skeleton-line skeleton-text"></div>
                                <div className="skeleton-line skeleton-text short"></div>
                                <div className="skeleton-line skeleton-price"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon"><i className="fa-solid fa-book"></i></div>
                <h3>Không tìm thấy khóa học nào</h3>
                <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc của bạn.</p>
            </div>
        );
    }

    return (
        <div className="product-list">
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToWishlist={onAddToWishlist}
                        onViewDetails={onViewDetails}
                        onAddToCart={onAddToCart}
                        isWishlisted={wishlistedIds.includes(product.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
