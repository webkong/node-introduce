var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var back = {
    name: 'wangsw',
    age:'18'
  };
  res.json(back);
});


// res.download()	提示将要下载文件。
// res.end()	结束响应进程。
// res.json()	发送 JSON 响应。
// res.jsonp()	在 JSONP 的支持下发送 JSON 响应。
// res.redirect()	重定向请求。
// res.render()	呈现视图模板。
// res.send()	发送各种类型的响应。
// res.sendFile	以八位元流形式发送文件。
// res.sendStatus()	设置响应状态码并以响应主体形式发送其字符串表示。



module.exports = router;
