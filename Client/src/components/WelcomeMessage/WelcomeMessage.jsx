import React from 'react';
import './WelcomeMessage.css';


const WelcomeMessage = () => {

    const logoUfopPath = 'assets/logo.svg';

    return (
        <div className='container'>
            <img className='logo' src={logoUfopPath} alt='Logo Ufop'/> 
            <h3>Bot UFOP</h3>
            <p>
                Tire todas as suas dúvidas sobre a Universidade Federal de Ouro Preto 
                com nosso assistente virtual!
            </p>
        </div>
    );
}

export default WelcomeMessage;