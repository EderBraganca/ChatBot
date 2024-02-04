const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const db = 'chatbot';

async function find(key, value) {
    await client.connect();

    const database = client.db(db);
    const messages = database.collection(collection);

    const query = `{"${key}":"${value}"}`;
    const register = await messages.findOne(JSON.parse(query));

    await client.close();

    return register;
}

async function insertMessage(message, botresponse, chatid) {
    await client.connect();
    const database = client.db(db);
    const messages = database.collection(chatid);

    const query = `{"usermessage":"${message}",
                    "botmessage":"${botresponse}"}`;

    await messages.insertOne(JSON.parse(query));
    await client.close();
}

module.exports = {
    find,
    insertMessage
}