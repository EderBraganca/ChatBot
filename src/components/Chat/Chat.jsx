import React from 'react'
import { Container} from './Chat.js'
import './Chat.css'

const Chat = ({ active }) => {
  return (
    <Container chat={!active}>
      <nav id="chatTotal">
        <form id='formChat'>
          <input id='inputChat' name="name" autoComplete="off" required />
          <label id='chatLabel' htmlFor="name">
            <span id='chatText'>Digite aqui</span>
          </label>
        </form>
      </nav>
    </Container>
  );
}

export default Chat
