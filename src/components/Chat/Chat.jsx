import React, { useState } from 'react'
import { Container} from './Chat.js'
import './Chat.css'

const Chat = ({ active }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
            <div key={index} className="message-balloon">
              {msg}
            </div>
          ))}
        </div>

        <form id="formChat" onSubmit={handleSubmit}>
          <input id="inputChat" name="name"autoComplete="off"
            required value={message} onChange={handleInputChange}/>
          <label id="chatLabel" htmlFor="name">
            <span id="chatText">Digite aqui</span>
          </label>
        </form>
      </nav>
    </Container>
  );
}

export default Chat
