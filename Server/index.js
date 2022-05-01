const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PortModel = require('./models/Ports');

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://AssWhooping:Charlie01774467118@switchserver.eu3bs.mongodb.net/Portdata?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

app.post('/', async (req, res) => {
  const Ports = new PortModel({ PortName: 9 });

  try {
    await Ports.save();
    res.send('inserted data');
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log('Server running in port 3001...');
});
