import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';

const CartPage = ({ cartItems, onRemoveFromCart, onAddToWishlist, wishlistedIds }) => {
    const navigate = useNavigate();

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="cart-page container">
            <button className="back-btn" onClick={() => navigate('/')}>
                <span><i className="fa-solid fa-arrow-left" style={{ color: '#ffffff' }}></i></span> Quay về
            </button>

            <h2><span><i className="fa-solid fa-cart-shopping" style={{ color: '#54258e' }}></i></span> Giỏ hàng</h2>

            {cartItems.length === 0 ? (
                <p className="empty-msg">Chưa có sản phẩm nào trong giỏ</p>
            ) : (
                <>
                    <div className="cart-grid">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-card">
                                <div className="card-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <h4>{item.name}</h4>
                                        <p className="quantity">Số lượng: {item.quantity}</p>
                                        <p className="price">{(item.price * item.quantity).toLocaleString().replace(/,/g, '.')}₫</p>
                                        <p className="unit-price">Đơn giá: {item.price.toLocaleString().replace(/,/g, '.')}₫</p>
                                    </div>
                                    <div className="card-actions">
                                        <button
                                            className="btn-remove"
                                            onClick={() => onRemoveFromCart(item)}
                                        >
                                            Xóa
                                        </button>

                                        <button
                                            className={`action-button secondary ${wishlistedIds?.includes(item.id) ? 'favorited' : ''}`}
                                            onClick={() => onAddToWishlist(item)}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlistedIds?.includes(item.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                            {wishlistedIds?.includes(item.id) ? 'Đã thích' : 'Yêu thích'}
                                        </button>



                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Tổng cộng: {getTotalPrice().toLocaleString().replace(/,/g, '.')}₫</h3>
                        <button className="btn-checkout">Thanh toán</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;