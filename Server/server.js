const chatController = require('./chatController');
const express = require('express');

const app = express();
app.use(express.json());

app.listen(6666, function () {
  console.log('Server listening on port 6666');
});

app.post('/message', async (req, res) => {
  try {
    const { message } = req.body;
    const { chatid } = req.body;

    let botres = await chatController.sendMessage(message, chatid);
    res.status(200).json({botres});
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