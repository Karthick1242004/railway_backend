const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5500;  

app.use(bodyParser.json());
app.use(cors());  

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const users = []; 
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }
  users.push({ name, email, password });
  res.status(201).json({ message: 'Signup successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
