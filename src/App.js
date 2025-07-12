import React, { useState, useEffect, useRef } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';

import './styles/App.css';
import './styles/Toast.css';

import Header from './components/Header';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import AISuggestions from './components/AISuggestions';
import Toast from './components/Toast';
import Chatbot from './components/Chatbot';

import WishlistPage from './pages/WishlistPage';
import HistoryPage from './pages/HistoryPage';
import CartPage from './pages/CartPage';



import { mockProducts, priceRanges } from './services/mockData';

const App = () => {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const resultRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [wishlistedIds, setWishlistedIds] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [viewHistory, setViewHistory] = useState([]);

  const [cartItems, setCartItems] = useState([]);



  // Filter logic
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'Tất cả') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    const priceRange = priceRanges[selectedPriceRange];
    if (priceRange.min > 0 || priceRange.max < Infinity) {
      filtered = filtered.filter(product =>
        product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, products]);

  // Auto scroll xuống block kết quả khi có kết quả tìm kiếm
  const handleSearch = (term) => {
    setSearchTerm(term);

    // Auto scroll xuống block kết quả
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };


  // Add/remove wishlist
  const handleAddToWishlist = (product) => {
    setWishlistedIds(prev => {
      const isWishlisted = prev.includes(product.id);
      const newWishlist = isWishlisted
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id];

      setToast({
        message: isWishlisted ? 'Đã xóa khỏi yêu thích' : 'Đã thêm vào yêu thích',
        type: 'success'
      });

      return newWishlist;
    });
  };


  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      // Nếu đã có thì tăng số lượng, còn chưa có thì thêm mới
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    setToast({
      message: `Đã thêm vào giỏ hàng`,
      type: 'success'
    });
  };


  // Xử lý xem chi tiết sản phẩm
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);

    setViewHistory(prev => {
      const exists = prev.find(item => item.id === product.id);

      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? {
              ...item,
              viewCount: (item.viewCount || 1) + 1,
              viewedAt: new Date().toISOString(),
            }
            : item
        );
      } else {
        return [
          ...prev,
          {
            ...product,
            viewCount: 1,
            viewedAt: new Date().toISOString(),
          },
        ];
      }
    });
  };



  //  GỢI Ý AI 
  const handleGetSuggestions = async () => {
    setLoading(true);

    try {
      // Mô phỏng API
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const shouldFail = Math.random() < 0.25; // 25% fail
          if (shouldFail) reject(new Error('API failed!'));
          else resolve();
        }, 1000);
      });

      const allProducts = mockProducts;

      // Nếu có sp trong giỏ → lọc những sp cùng danh mục
      let suggested = [];

      if (cartItems.length > 0) {
        const cartCategories = cartItems.map(p => p.category);
        suggested = allProducts.filter(p =>
          cartCategories.includes(p.category) &&
          !cartItems.find(ci => ci.id === p.id)
        );
      }

      // Nếu rỗng → fallback random
      if (suggested.length === 0) {
        suggested = allProducts.slice(0, 3);
      }

      setSuggestions(suggested);

    } catch (err) {
      console.error(err);
      setToast({
        message: 'Không thể lấy gợi ý lúc này',
        type: 'error'
      });
      setSuggestions([]); // reset
    } finally {
      setLoading(false);
    }
  };

  // Xử lý xóa khỏi giỏ hàng
  const handleRemoveFromCart = (product) => {
    setCartItems(prev => prev.filter(item => item.id !== product.id));
  };


  const closeToast = () => {
    setToast(null);
  };

  const wishlist = products.filter(p => wishlistedIds.includes(p.id));




  /////////////////////////////////////////////////////////////////////////////////
  return (
    <Router>

      <Header
        onSearch={handleSearch} //  có onSearch

        searchTerm={searchTerm}
        wishlistCount={wishlistedIds.length}
        cartItems={cartItems}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <main className="main-content">
                <div className="container">
                  <AISuggestions
                    onGetSuggestions={handleGetSuggestions}
                    suggestions={suggestions}
                    loading={loading}
                    onViewDetails={handleViewDetails}
                  />

                  <ProductFilter
                    selectedCategory={selectedCategory}
                    selectedPriceRange={selectedPriceRange}
                    onCategoryChange={setSelectedCategory}
                    onPriceRangeChange={setSelectedPriceRange}
                  />

                  {/* KẾT QUẢ TÌM KIẾM */}
                  <section ref={resultRef}>
                    <h2>Kết quả:</h2>
                    {/* Render courses filter theo searchTerm */}
                  </section>

                  <div className="products-header">
                    <h2>Khóa học nổi bật</h2>
                    <p>Tìm thấy <b>{filteredProducts.length}</b> khóa học</p>
                  </div>

                  <ProductList
                    products={filteredProducts}
                    onAddToWishlist={handleAddToWishlist}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                    wishlistedIds={wishlistedIds}
                  />
                </div>
              </main>
            </div>
          }
        />

        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlist={wishlist}
              onAddToWishlist={handleAddToWishlist}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
              wishlistedIds={wishlistedIds}
            />
          }
        />

        <Route
          path="/history"
          element={
            <HistoryPage
              viewHistory={viewHistory}
              onAddToWishlist={handleAddToWishlist}
              onViewDetails={handleViewDetails}
              wishlistedIds={wishlistedIds}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onAddToWishlist={handleAddToWishlist}
              wishlistedIds={wishlistedIds}
            />
          }
        />


      </Routes>



      {/*  Luôn render Modal + Toast ở App */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}

        onAddToWishlist={handleAddToWishlist}
        onAddToCart={handleAddToCart}
        isWishlisted={wishlistedIds.includes(selectedProduct?.id)}

      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}

      <Chatbot
        products={products}
        onViewDetails={handleViewDetails}
      />


    </Router>

  );
};

export default App;
