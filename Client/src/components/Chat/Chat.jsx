import React, { useState, useEffect, useRef } from 'react';
import { Container } from './Chat.js';
import MessageBaloon from './../MessageBaloon/MessageBaloon'
import MessageInput from './../MessageInput/MessageInput'
import './Chat.css';

const Chat = ({ active }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };

  return (
    <Container chat={!active}>
      <nav id="chatTotal">
        <div className="message-balloons">
          {messages.map((msg, index) => (
            <MessageBaloon key={index} message={msg} isBot={true} />
          ))}
          {messages.map((msg, index) => (
            <MessageBaloon 
                key={index} 
                message={msg} 
                isBot={false} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <MessageInput 
            onSubmit={handleSubmit} 
            onInputChange={handleInputChange} 
            value={message} />
      </nav>
    </Container>
  );
};

export default Chat;
