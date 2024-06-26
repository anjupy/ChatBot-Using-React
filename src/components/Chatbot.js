import React, { useState } from 'react';
import Message from './Message';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', user: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: 'user' }];
      setMessages(newMessages);
      setInput('');

      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages([...newMessages, { text: botResponse, user: 'bot' }]);
      }, 500);
    }
  };

  const getBotResponse = (userInput) => {
    // Simple bot response logic
    if (userInput.toLowerCase().includes('hello')) {
      return 'Hi there!';
    }
    if (userInput.toLowerCase().includes('how are you')) {
      return 'I am just a bot, but I am doing great!';
    }
    return 'I am not sure how to respond to that.';
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} user={msg.user} />
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
