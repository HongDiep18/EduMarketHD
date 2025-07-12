// ProductCard.jsx
import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({
    product,
    onAddToWishlist,
    onViewDetails,
    onAddToCart,
    isWishlisted
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleWishlistClick = async () => {
        setIsLoading(true);
        setTimeout(() => {
            onAddToWishlist(product);
            setIsLoading(false);
        }, 500);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const calculateDiscountPercent = () => {
        if (product.originalPrice && product.price) {
            return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        }
        return product.discount || 0;
    };

    return (
        <div className="course-card">
            <div className="course-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.isNew && <span className="badge-new">New</span>}
                {calculateDiscountPercent() > 0 && (
                    <span className="badge-discount">-{calculateDiscountPercent()}%</span>
                )}
                <button
                    className={`wishlist ${isWishlisted ? 'active' : ''}`}
                    onClick={handleWishlistClick}
                    disabled={isLoading}
                >
                    <i className={`fa-heart ${isWishlisted ? 'fa-solid' : 'fa-regular'}`}></i>
                </button>
                <div className="quick-view">
                    <button onClick={() => onViewDetails(product)}>
                        <i className="fa-regular fa-eye"></i>
                    </button>
                </div>
            </div>

            <div className="course-content">
                <div className="course-header">
                    <span className="category">{product.category}</span>
                    <span className="level">Cơ bản</span>
                </div>

                <h3 className="course-title">{product.name}</h3>

                <div className="course-description">
                    {product.description?.length > 60
                        ? `${product.description.slice(0, 60)}...`
                        : product.description}
                </div>

                <div className="instructor">
                    <i className="fa-regular fa-user"></i>
                    <span>{product.instructor}</span>
                </div>

                <div className="course-meta">
                    <div className="rating">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa-solid fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}></i>
                            ))}
                        </div>
                        <span>{product.rating} ({product.reviews})</span>
                    </div>

                    <div className="meta-info">
                        <span><i className="fa-solid fa-book"></i> 12 bài</span>
                        <span><i className="fa-solid fa-clock"></i> 8h</span>
                    </div>
                </div>

                <div className="price">
                    {product.originalPrice && product.originalPrice > product.price && (
                        <span className="old-price">{formatPrice(product.originalPrice)}</span>
                    )}
                    <span className="current-price">{formatPrice(product.price)}</span>
                </div>

                <div className="actions">
                    <button className="btn-view" onClick={() => onViewDetails(product)}>
                        Chi tiết
                    </button>
                    <button className="btn-cart" onClick={() => onAddToCart(product)}>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
