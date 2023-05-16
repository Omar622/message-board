const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

/* GET, POST form page. */
router.route('/new')
  .get((req, res) => {
    res.render('form');
  })
  .post((req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.user,
      added: new Date()
    });
    res.redirect('/');
  });

module.exports = router;
