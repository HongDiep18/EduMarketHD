import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HistoryPage.css';

const HistoryPage = ({ viewHistory, onAddToWishlist, onViewDetails, wishlistedIds }) => {
    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState('recent');

    // Format ngày giờ xem
    const formatViewTime = (viewedAt) => {
        if (!viewedAt) return 'Vừa xem';
        const now = new Date();
        const viewed = new Date(viewedAt);
        const diff = now - viewed;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (minutes < 1) return 'Vừa xem';
        if (minutes < 60) return `${minutes} phút trước`;
        if (hours < 24) return `${hours} giờ trước`;
        if (days < 30) return `${days} ngày trước`;
        return viewed.toLocaleDateString('vi-VN');
    };

    // Sắp xếp lịch sử xem
    const sortedHistory = [...viewHistory].sort((a, b) => {
        switch (sortBy) {
            case 'recent':
                return new Date(b.viewedAt || 0) - new Date(a.viewedAt || 0);
            case 'name': {
                const nameA = a.name || '';
                const nameB = b.name || '';
                return nameA.localeCompare(nameB);
            }
            case 'price':
                return (a.price || 0) - (b.price || 0);
            default:
                return 0;
        }
    });


    return (
        <div className="history-page">
            <div className="history-container">
                {/* Header Section */}
                <div className="page-header">
                    <div className="header-actions">
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            <span><i className="fa-solid fa-arrow-left" style={{ color: '#ffffff' }}></i></span>
                            Quay về
                        </button>

                        <div className="view-count-badge">
                            <b>{viewHistory.length}</b> sản phẩm
                        </div>
                    </div>

                    <div className="header-content">
                        <div className="title-section">
                            <h1 className="page-title">
                                <span><i className="fa-solid fa-clock-rotate-left"></i></span>
                                Lịch sử xem
                            </h1>
                            <p className="page-subtitle">
                                Các sản phẩm bạn đã xem gần đây
                            </p>
                        </div>

                        {viewHistory.length > 0 && (
                            <div className="sort-section">
                                <div className="sort-group">
                                    <label className="sort-label">Sắp xếp theo</label>
                                    <select
                                        className="sort-select"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="recent">Xem gần đây</option>
                                        <option value="name">Tên sản phẩm</option>
                                        <option value="price">Giá sản phẩm</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="page-content">
                    {viewHistory.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-illustration">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3 className="empty-title">Chưa có lịch sử xem</h3>
                            <p className="empty-message">
                                Bạn chưa xem sản phẩm nào. Hãy khám phá các sản phẩm để tạo lịch sử xem.
                            </p>
                            <button className="cta-button" onClick={() => navigate('/')}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                Khám phá sản phẩm
                            </button>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {sortedHistory.map((product) => (
                                <div key={product.id} className="product-card">
                                    <div className="card-image-container">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="card-image"
                                        />
                                        <div className="status-badge">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            Đã xem
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="product-info">
                                            <h3 className="product-title">{product.name}</h3>
                                            <div className="product-price">
                                                {product.price?.toLocaleString('vi-VN')}₫
                                            </div>
                                        </div>

                                        <div className="view-metadata">
                                            <div className="view-time">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12,6 12,12 16,14" />
                                                </svg>
                                                {formatViewTime(product.viewedAt)}
                                            </div>
                                            <div className="view-count">
                                                <b>{product.viewCount || 1}</b> lần xem
                                            </div>
                                        </div>

                                        <div className="card-actions">
                                            <button
                                                className="action-button primary"
                                                onClick={() => onViewDetails(product)}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                                Xem chi tiết
                                            </button>

                                            <button
                                                className={`action-button secondary ${wishlistedIds?.includes(product.id) ? 'favorited' : ''}`}
                                                onClick={() => onAddToWishlist(product)}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlistedIds?.includes(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                                </svg>
                                                {wishlistedIds?.includes(product.id) ? 'Đã thích' : 'Yêu thích'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;