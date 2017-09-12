var express = require('express');
var router = express.Router();
var ProductsModel = require('../models/productsModel');

router.get('/products', function(req,res){
    ProductsModel.find(function(err,products){
        res.render( 'admin/products' , 
            { products : products } // DB에서 받은 products를 products변수명으로 내보냄
        );
    });
});

// 파일을 템플릿으로 products.ejs파일로 보냄 
router.get('/products', function(req,res){
    res.render('admin/products', { data : "my data"});
});

router.get('/products/write', function(req,res){
    res.render( 'admin/form', { product : ""});
});

router.post('/products/write', function(req,res){
    var product = new ProductsModel({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
    });
    product.save(function(err){
        res.redirect('/admin/products');
    });
});

router.get('/products/detail/:id', function(req, res){
    //url에서 변수 값을 받아올땐 req.params.jd 로 받아온다
    ProductsModel.findOne({ 'id' : req.params.id}, 
    function(err, product){
        res.render(
                'admin/productsDetail',
                { product: product }
            );
        }
    );
});

router.get('/products/edit/:id' ,function(req, res){
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    ProductsModel.findOne({ id : req.params.id } , function(err, product){
        res.render('admin/form', { product : product });
    });
});

router.post('/products/edit/:id', function(req, res){
    //넣을 변수 값을 셋팅한다
    var query = {
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
    };

    //update의 첫번째 인자는 조건, 두번째 인자는 바뀔 값들
    ProductsModel.update({ id : req.params.id }, 
        { $set : query }, 
        function(err){
        res.redirect(
            '/admin/products/detail/' + req.params.id ); 
            //수정후 본래보던 상세페이지로 이동
        }
    );
});

module.exports = router;