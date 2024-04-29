// backend/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// backend/routes/users.js
router.get('/', async (req, res) => {
    try {
      let query = {};
  
      // Check if search query is present
      if (req.query.search) {
        // Case-insensitive search on name and occupation fields
        query = {
          $or: [
            { name: { $regex: req.query.search, $options: 'i' } },
            { occupation: { $regex: req.query.search, $options: 'i' } }
          ]
        };
      }
  
      const users = await User.find(query);
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  