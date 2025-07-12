import '../styles/App.css';
import '../styles/AISuggestions.css';
import SuggestionSkeleton from '../components/SuggestionSkeleton'; // 👈 Nếu bạn có SuggestionSkeleton riêng

const AISuggestions = ({ onGetSuggestions, suggestions, loading, onViewDetails }) => (
    <div className="ai-suggestions">
        <div className="ai-header">
            <h3>Gợi ý thông minh</h3>
            <button
                className="btn btn-primary"
                onClick={onGetSuggestions}
                disabled={loading}
            >
                {loading ? ' Đang gợi ý...' : ' Gợi ý cho tôi'}
            </button>
        </div>

        {loading && (
            <div className="skeleton-container">
                {[1, 2, 3].map(i => (
                    <SuggestionSkeleton key={i} />
                ))}
            </div>
        )}

        {suggestions.length > 0 && (
            <div className="suggestions-list">
                <h4>Khóa học phù hợp với bạn:</h4>
                <div className="suggestions-grid">
                    {suggestions.map(p => (
                        <div
                            key={p.id}
                            className="suggestion-item"
                            onClick={() => onViewDetails(p)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={p.image} alt={p.name} />
                            <div>
                                <h5>{p.name}</h5>
                                <p>{new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(p.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

export default AISuggestions;
