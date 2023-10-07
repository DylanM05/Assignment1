const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

// POST request to handle form submission
router.post('/contact', function (req, res, next) {
  // Capture user information from the form
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Perform any necessary processing with the captured data

  // Redirect back to the Home Page (you can change the URL as needed)
  res.redirect('/');

  // You can also send a success message if needed
 res.render('success', { message: 'Message sent successfully!' });
});


// Define similar routes for other pages

module.exports = router;