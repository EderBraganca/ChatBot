const db_connection = require("./database-connection");

async function sendMessage(message, chatid) {
    let botresponse = 'Olá, este serviço ainda não está disponível :)';

    try {
        await db_connection.insertMessage(message, botresponse, chatid);
        return botresponse;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendMessage
}