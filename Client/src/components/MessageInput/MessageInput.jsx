import React from 'react';
import './MessageInput.css';
import { CiSquareChevUp } from "react-icons/ci";


const MessageInput = ({ onSubmit, onInputChange, value }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
      };

    return (
        <form id="formChat" onSubmit={handleSubmit}>
            <input
                id="inputChat"
                name="name"
                autoComplete="off"
                required
                value={value}
                onChange={onInputChange}
            />
            <label id="chatLabel" htmlFor="name">
                <span id="chatText">Digite aqui</span>
            </label>
            <CiSquareChevUp onClick={handleSubmit} id='buttonSubmit'/>
        </form>
    );
};

export default MessageInput;
