import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../styles/Header.css';


const Header = ({ onSearch, searchTerm, wishlistCount, cartItems }) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">

                    <NavLink to="/" className="logo">
                        <h1 className="logo-text">
                            <span className="logo-icon"><img src="/education.png" alt="logo" /></span>
                            EduMarketHD
                        </h1>
                    </NavLink>

                    {isHome && (
                        <div className="search-section">
                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm khóa học..."
                                    className="search-input"
                                    value={searchTerm}
                                    onChange={(e) => onSearch(e.target.value)}
                                />
                                <button className="search-btn">
                                    <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                                </button>
                            </div>
                        </div>
                    )}

                    <nav className="nav">
                        <NavLink to="/" className='nav-btn'>
                            <span className="nav-icon"></span>
                            Trang chủ
                        </NavLink >

                        <NavLink to="/wishlist" className="nav-btn wishlist-btn">
                            Yêu thích
                            {wishlistCount > 0 && (
                                <span className="wishlist-count">{wishlistCount}</span>
                            )}
                        </NavLink>

                        <NavLink to="/cart" className="nav-btn cart-btn">
                            Giỏ hàng
                            {cartItems.length > 0 && (
                                <span className="cart-count">{cartItems.length}</span>
                            )}
                        </NavLink>

                        <NavLink to="/history" className='nav-btn'>Lịch sử xem</NavLink>
                    </nav>


                </div>
            </div>
        </header >
    );
};

export default Header;