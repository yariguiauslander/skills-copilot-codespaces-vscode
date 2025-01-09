// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Read the comments.json file
const comments = JSON.parse(fs.readFileSync('comments.json'));

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
  res.send(newComment);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});