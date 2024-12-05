const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // Validate userId (e.g., check if it's a number, positive, etc.)
    if (isNaN(userId) || parseInt(userId) <= 0) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    // ... further code to fetch and send user data using userId
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});