import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, product, onAddToWishlist, onAddToCart, isWishlisted }) => {
    const [isWishlistLoading, setIsWishlistLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const handleWishlistClick = async () => {
        setIsWishlistLoading(true);
        setTimeout(() => {
            onAddToWishlist(product);
            setIsWishlistLoading(false);
        }, 500);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const calculateSavings = () => {
        if (product.originalPrice && product.price < product.originalPrice) {
            return product.originalPrice - product.price;
        }
        return 0;
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Đóng">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="modal-body">
                    <div className="modal-image">
                        <img src={product.image} alt={product.name} />
                        <div className="image-badges">
                            {product.isNew && <span className="badge badge-new">Mới</span>}
                            {calculateSavings() > 0 && <span className="badge badge-discount">Giảm giá</span>}
                        </div>

                        {/* Wishlist icon ở ảnh: Chỉ PC */}
                        {!isMobile && (
                            <button
                                className={`wishlist-heart ${isWishlisted ? 'active' : ''} ${isWishlistLoading ? 'loading' : ''}`}
                                onClick={handleWishlistClick}
                                disabled={isWishlistLoading}
                                aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
                            >
                                {isWishlistLoading ? (
                                    <span className="loading-spinner"></span>
                                ) : (
                                    <svg
                                        className="heart-icon"
                                        viewBox="0 0 24 24"
                                        fill={isWishlisted ? "currentColor" : "none"}
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>

                    <div className="modal-info">
                        <div className="info-header">
                            <span className="category-badge">{product.category}</span>
                            <div className="rating-compact">
                                <span className="star-icon"><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></span>
                                <span>{product.rating}</span>
                                <span className="review-count">({product.reviews})</span>
                            </div>
                        </div>

                        <h1 className="product-title">{product.name}</h1>

                        <div className="instructor-info">
                            <div className="instructor-avatar"><i class="fa-regular fa-circle-user"></i></div>
                            <div>
                                <div className="instructor-name">{product.instructor}</div>
                                <div className="instructor-title">Giảng viên</div>
                            </div>
                        </div>

                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-icon"><i className="fa-solid fa-book"></i></span>
                                <span>15 bài học</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-icon"><i className="fa-solid fa-clock"></i></span>
                                <span>12 giờ</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-icon"><i className="fa-solid fa-certificate"></i></span>
                                <span>Có chứng chỉ</span>
                            </div>
                        </div>

                        <div className="price-section">
                            <div className="price-main">
                                {product.originalPrice && product.price < product.originalPrice && (
                                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                                )}
                                <span className="current-price">{formatPrice(product.price)}</span>
                            </div>
                            {calculateSavings() > 0 && (
                                <div className="savings">Tiết kiệm {formatPrice(calculateSavings())}</div>
                            )}
                        </div>

                        <div className="description">
                            <h3>Về khóa học này</h3>
                            <p>{product.description || 'Khóa học chất lượng cao được thiết kế để giúp bạn nắm vững kiến thức và kỹ năng cần thiết trong lĩnh vực này.'}</p>
                        </div>

                        <div className="modal-actions">
                            <button className="btn btn-primary">
                                <span>Đăng ký ngay</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button className="btn btn-secondary" onClick={() => onAddToCart(product)}>
                                <span><i className="fa-solid fa-cart-shopping"></i></span>
                                <span>Thêm vào giỏ</span>
                            </button>

                            {/* Wishlist icon ở dưới: Mobile */}
                            {isMobile && (
                                <button
                                    className={`btn btn-wishlist ${isWishlisted ? 'active' : ''} ${isWishlistLoading ? 'loading' : ''}`}
                                    onClick={handleWishlistClick}
                                    disabled={isWishlistLoading}
                                >
                                    {isWishlistLoading
                                        ? 'Đang xử lý...'
                                        : (
                                            <>
                                                <i className={`fa-solid ${isWishlisted ? 'fa-heart-crack' : 'fa-heart'}`} style={{ color: '#e21818', marginRight: '6px' }}></i>
                                                {isWishlisted ? 'Bỏ yêu thích' : 'Thêm yêu thích'}
                                            </>
                                        )
                                    }

                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
