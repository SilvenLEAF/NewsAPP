const router = require('express').Router();
const newsController = require('../controllers/newsController');


router.get('/',  newsController.send_top_headlines)





module.exports = router;