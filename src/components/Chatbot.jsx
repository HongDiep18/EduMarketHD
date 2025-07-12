import React, { useState } from 'react';
import '../styles/Chatbot.css';

const Chatbot = ({ products, onViewDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Xin chào! Bạn cần tôi tư vấn khóa học gì?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { from: 'user', text: input }];

        const keywords = input.toLowerCase().split(' ');
        const suggested = products.filter(p =>
            keywords.some(k => p.name.toLowerCase().includes(k) || p.category.toLowerCase().includes(k))
        );

        let botReply = '';
        if (suggested.length > 0) {
            botReply = `Tôi tìm thấy ${suggested.length} khóa học phù hợp:\n` +
                suggested.slice(0, 3).map(p => `- ${p.name}`).join('\n');
        } else {
            botReply = 'Xin lỗi, tôi chưa tìm thấy khóa học phù hợp.';
        }

        const replyMessage = { from: 'bot', text: botReply, suggestions: suggested.slice(0, 3) };

        setMessages([...newMessages, replyMessage]);
        setInput('');
    };

    return (
        <>
            <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa-solid fa-comments"></i>
            </div>

            {isOpen && (
                <div className="chatbot-box">
                    <div className="chatbot-header">
                        <div className="header-info">
                            <strong>
                                <i className="fa-regular fa-user" style={{ color: ' #ffffffff', marginRight: '7px' }}></i>
                                AI Tư vấn</strong>
                            <span>Sẵn sàng hỗ trợ</span>
                        </div>
                        <button onClick={() => setIsOpen(false)}>✖</button>
                    </div>

                    <div className="chatbot-window">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.from}`}>
                                <div className="message-content">
                                    <pre>{msg.text}</pre>
                                    {msg.from === 'bot' && msg.suggestions && (
                                        <div className="suggestions">
                                            {msg.suggestions.map(s => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => onViewDetails(s)}
                                                    className="suggestion-button"
                                                >
                                                    <span className="suggestion-name">{s.name}</span>
                                                    <span className="suggestion-arrow"><i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i></span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            placeholder="Nhập câu hỏi của bạn..."
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} disabled={!input.trim()}>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;