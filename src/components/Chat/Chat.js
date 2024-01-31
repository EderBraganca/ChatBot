import React, {Component} from 'react';
import './Chat.css';

class Chat extends Component {
    render() {
        return(
            <nav id="chat">
                <input type="textArea" id="chat-input" placeholder="Type a message..."/>
            </nav>
        );
    }
}

export default Chat;