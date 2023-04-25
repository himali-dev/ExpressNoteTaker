// required libs
const path = require('path');
const router = require('express').Router();

// notes html route
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//index html route

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


// home page if nothing found

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
