import React, { useState, useEffect, useRef } from 'react';
import { Container } from './Chat.js';
import MessageBaloon from './../MessageBaloon/MessageBaloon';
import MessageInput from './../MessageInput/MessageInput';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage.jsx';
import './Chat.css';

const Chat = ({ active }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef && messagesEndRef.current)
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (message.trim() === '') {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isBot: false },
    ]);

    try {
      const response = await fetch('http://localhost:443/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message, chatid: "1" }),
      });

      if (!response.ok) {
        throw new Error('Erro ao obter resposta do chat');
      }

      const data = await response.json();
      console.log(data);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.message, isBot: true },
      ]);
    } catch (error) {
      console.error('Erro na requisição para a API:', error.message);
    }

    setMessage('');
  };

  return (
    <Container chat={!active}>
      <nav id="chatTotal">
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <div className="message-balloons">
            {messages.map((msg, index) => (
              <MessageBaloon
                key={index}
                message={msg.text}
                isBot={msg.isBot}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        <MessageInput
          onSubmit={handleSubmit}
          onInputChange={handleInputChange}
          value={message}
        />
      </nav>
    </Container>
  );
};

export default Chat;
