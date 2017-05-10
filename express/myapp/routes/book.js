var express = require('express');
var router = express.Router();
var con = require('../db/db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  //一些校验xx
  con.query('select * FROM book_book',function(err, results, fields){
    if(err){
      console.log(err);
    }else{
      res.json(results);
    }
  });
});

router.get('/full', function(req, res, next) {
  //一些校验xx
  con.query('select a.title, a.publication_date, b.name as publisher, a.price FROM book_book a, book_publisher b where a.publisher_id = b.id',function(err, results, fields){
    if(err){
      console.log(err);
      res.json({
        code:500,
        data:'参数错误'
      })
    }else{
      res.json(results);
    }
  });
  
});

router.get('/newAuthor', function(req, res, next) {
  res.render('addAuthor',{title:'添加作者'});
});

router.post('/addAuthor', function(req, res, next) {
  console.log(req.body);
  //一些校验xx
  con.query('INSERT INTO book_author(NAME) VALUES(?)',[req.body.name],function(err, results, fields){
    if(err){
      res.json({
        code:500,
        data:'参数错误'
      })
    }else{
      res.json(req.body);
    }
  });
});


module.exports = router;
