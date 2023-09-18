const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const mongodbUri = process.env.MONGODB_URI || 'mongodb://mongodb:27017/mydatabase';
mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, Dockerized Node.js App with MongoDB!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
