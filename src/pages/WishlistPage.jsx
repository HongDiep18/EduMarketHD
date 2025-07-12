import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WishlistPage.css';

const WishlistPage = ({ wishlist, onAddToWishlist, onViewDetails, onAddToCart, wishlistedIds }) => {
    const navigate = useNavigate();

    // Hàm format giá tiền với dấu chấm phân cách
    const formatPrice = (price) => {
        // Loại bỏ ký tự 'đ' nếu có
        const numPrice = typeof price === 'string' ?
            price.replace(/[^\d]/g, '') : price;

        // Chuyển thành số và format với dấu chấm
        return Number(numPrice).toLocaleString('vi-VN');
    };

    return (
        <div className="wishlist-page container">
            <button className="back-btn" onClick={() => navigate('/')}>
                <span><i className="fa-solid fa-arrow-left" style={{ color: '#ffffff' }}></i></span> Quay về
            </button>
            <h2><span><i className="fa-solid fa-heart" style={{ color: '#e21818' }}></i></span> Danh sách yêu thích</h2>
            {wishlist.length === 0 ? (
                <p className="empty-msg">Chưa có sản phẩm yêu thích nào</p>
            ) : (
                <div className="wishlist-grid">
                    {wishlist.map(product => (
                        <div key={product.id} className="wish-card">
                            <div className="card-img">
                                <img src={product.image} alt={product.name} />
                                <button
                                    className="heart-btn active"
                                    onClick={() => onAddToWishlist(product)}
                                >
                                    <span><i className="fa-solid fa-heart" style={{ color: '#e21818' }}></i></span>
                                </button>





                            </div>
                            <div className="card-content">
                                <h4>{product.name}</h4>
                                <p className="price">{formatPrice(product.price)}đ</p>
                                <div className="card-actions">
                                    <button
                                        className="btn-view"
                                        onClick={() => onViewDetails(product)}
                                    >
                                        Xem chi tiết
                                    </button>
                                    <button className="btn-cart" onClick={() => onAddToCart(product)}>
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;