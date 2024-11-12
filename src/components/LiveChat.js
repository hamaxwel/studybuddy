import React, { useState } from 'react';
import './LiveChat.css';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput(''); // Clear input field after sending
    }
  };

  return (
    <div className="live-chat-box">
      {/* Display chat messages */}
      {messages.map((message, index) => (
        <div key={index} className={`chat-message ${message.sender}`}>
          {message.text}
        </div>
      ))}

      {/* Chat input box */}
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default LiveChat;
