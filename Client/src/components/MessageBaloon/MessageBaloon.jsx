import React from 'react';
import './MessageBaloon.css';

const MessageBaloon = ({message, isBot }) => {

    const classNames = `message-balloon ${isBot ? 'is-bot' : ''}`;

    return (
        <div className={classNames}>
            {message}
        </div>
    );
};

export default MessageBaloon;
