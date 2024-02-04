const chatController = require('./chatController');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 443;
app.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});

app.post('/message', async (req, res) => {
  try {
    const { message } = req.body;
    const { chatid } = req.body;

    console.log(req.body);
    let botres = await chatController.sendMessage(message, chatid);
    console.log(botres);
    res.status(200).json({message: botres});
  } catch (error) {
    res.status(500).json({error});
  }
});

app.get('/history', async (req, res) => {
  try {
    const { username } = req.body;
    const { password } = req.body;

    let message = await chatController.insertUser(username, password);
    res.status(200).json({message});
  } catch (error) {
    res.status(500).json(error);
  }
});