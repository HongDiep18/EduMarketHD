import React, { useEffect } from 'react';
import '../styles/Toast.css'; // Nhớ import file CSS riêng cho toast

const Toast = ({ message, type, onClose, duration = 2000, icon }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`toast ${type}`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {icon || (
                        <i
                            className={`fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'}`}
                            style={{
                                color: type === 'success' ? '#16a34a' : '#dc2626', marginRight: '0.5rem'
                            }}
                        ></i>
                    )}
                </span>

                <div className="toast-text">
                    <p className="toast-message">{message}</p>
                </div>
                <button className="toast-close" onClick={onClose}>✕</button>
            </div>
            <div
                className="toast-progress"
                style={{ animationDuration: `${duration}ms` }}
            ></div>
        </div>
    );
};

export default Toast;
