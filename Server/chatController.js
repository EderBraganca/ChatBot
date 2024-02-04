const db_connection = require("./database-connection");

async function sendMessage(message, chatid) {
    let botresponse = [
        'Olá, este serviço ainda não está disponível :)',
        'Desculpe o transtorno, mas estamos ocupados construindo algo especial para você! ', 
        'Estamos trabalhando duro na construção do nosso serviço. Volte em breve para ver o resultado! :D',
        'Engrenagens em movimento! Estamos no meio da construção!',
        'Toc, toc, toc, Vruuum, vruuum! 🚧🚧 ',
        'Por que o bot não foi à festa? Porque ele estava ocupado processando a informação de que seria uma programação muito divertida! 😄',
        'Enquanto nosso serviço está em construção, acesse ufop.br para mais informações! 🚧🌐'

    ];
    const i = Math.floor(Math.random() * botresponse.length)

    try {
        await db_connection.insertMessage(message, botresponse[i], chatid);
        return botresponse[i];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendMessage
}