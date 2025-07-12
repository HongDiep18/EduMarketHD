import React from 'react';
import '../styles/SuggestionSkeleton.css';

const SuggestionSkeleton = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-thumbnail"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
        </div>
    );
};

export default SuggestionSkeleton;
