const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// MongoDB connection
mongoose
  .connect(
    'mongodb+srv://kavya_prabahar:abcdefgh12345@ims.sunqv.mongodb.net/?retryWrites=true&w=majority&appName=IMS',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.get('/', (req, res) => {
  res.send('MongoDB connected successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
