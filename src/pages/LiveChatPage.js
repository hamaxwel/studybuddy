import React, { useState } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState(''); // To capture the sender's name

  const sendMessage = () => {
    if (message.trim() && sender.trim()) {
      setMessages([...messages, { sender, content: message }]);
      setMessage('');
    }
  };

  return (
    <div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div className="chat-message" key={index}>
            <span className="message-sender">{msg.sender}:</span>
            <span className="message-content">{msg.content}</span>
          </div>
        ))}
      </div>

      <div className="message-input-container">
        <input
          type="text"
          placeholder="Your name"
          className="sender-input"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type your message..."
          className="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;

