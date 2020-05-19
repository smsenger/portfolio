const express = require('express');

const router = express.Router();

// GET /contact
router.get('/', (req, res) => {
  res.render('contact', {
    title: "Contact Form",
    submitted: false,
  });
});

// POST /contact
router.post('/', (req, res) => {
  console.log(req.body)
  res.render('contact', {
    title: 'Thank You',
    submitted: true,
  });
});

module.exports = router;