const router = require('express').Router();
const newsController = require('../controllers/newsController');


router.post('/',  newsController.send_top_headlines)





module.exports = router;