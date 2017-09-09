var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send('admin app');
});

// req request, res response
// /products url경로를 만들어서 결과값을 넣어줌
router.get('/products', function(req,res){
    res.send('admin products');
})

module.exports = router;