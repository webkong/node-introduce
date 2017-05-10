### Node.js

>内部分享，node.js概述。

>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
>
>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
>
>NPM包管理工具。

官网 [https://nodejs.org/](https://nodejs.org/) 

中文网 [http://nodejs.cn/](http://nodejs.cn/)

中文API [http://nodejs.cn/api/](http://nodejs.cn/api/)

中文社区 [https://cnodejs.org/](https://cnodejs.org/)

NPM [https://www.npmjs.com/](https://www.npmjs.com/)

### 1.适合NodeJS的场景

#### RESTful API 

这是NodeJS最理想的应用场景，可以处理数万条连接，本身没有太多的逻辑，只需要请求API，组织数据进行返回即可。它本质上只是从某个数据库中查找一些值并将它们组成一个响应。由于响应是少量文本，入站请求也是少量的文本，因此流量不高，一台机器甚至也可以处理最繁忙的公司的API需求。

#### 统一Web应用的UI层 

~~目前MVC的架构，在某种意义上来说，Web开发有两个UI层，一个是在浏览器里面我们最终看到的，另一个在server端，负责生成和拼接页面。 
不讨论这种架构是好是坏，但是有另外一种实践，面向服务的架构，更好的做前后端的依赖分离。如果所有的关键业务逻辑都封装成REST调用，就意味着在上层只需要考虑如何用这些REST接口构建具体的应用。那些后端程序员们根本不操心具体数据是如何从一个页面传递到另一个页面的，他们也不用管用户数据更新是通过Ajax异步获取的还是通过刷新页面。~~

#### 大量Ajax请求的应用 

例如个性化应用，每个用户看到的页面都不一样，缓存失效，需要在页面加载的时候发起Ajax请求，NodeJS能响应大量的并发请求。　　

**总而言之，NodeJS适合运用在高并发、I/O密集、少量业务逻辑的场景。**

### 2.NodeJS的优缺点

#### 优点：
1. 高并发（最重要的优点）

2. 适合I/O密集型应用

#### 缺点：

1. 不适合CPU密集型应用；CPU密集型应用给Node带来的挑战主要是：由于JavaScript单线程的原因，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起；

解决方案：分解大型运算任务为多个小任务，使得运算能够适时释放，不阻塞I/O调用的发起；

2. 只支持单核CPU，不能充分利用CPU

3. 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃

原因：单进程，单线程

解决方案：

（1）Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；

（2）开多个进程监听同一个端口，使用cluster模块；

4. 开源组件库质量参差不齐，更新快，向下不兼容

5. Debug不方便，错误没有stack trace

### 都有哪些人在用

通用电气 、 Uber 、沃尔玛 、 linkin ...

淘宝数据魔方：数据魔方 - 淘宝官方数据产品

淘宝指数：淘宝指数 - 淘宝消费者数据研究平台

淘宝-全景洞察：全景洞察


等很多


### 常用模块

>因为Node.js是运行在服务区端的JavaScript环境，服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了，而且，服务器程序必须能接收网络请求，读写文件，处理二进制内容，所以，Node.js内置的常用模块就是为了实现基本的服务器功能。这些模块在浏览器环境中是无法被执行的，因为它们的底层代码是用C/C++在Node.js运行环境中实现的。

>node.js唯一一个全局变量global

>node.js当前进程的process对象

 fs 文件模块 、stream 流 、 http 、

```
'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
```

### web框架 Express 和 koa

Express 高度包容、快速而极简的 Node.js Web 框

Express中文 [http://expressjs.com/zh-cn/](http://expressjs.com/zh-cn/)

Express [http://expressjs.com/](http://expressjs.com/)

Koa [http://koajs.com/](http://koajs.com/)

Koa中文 [http://koa.bootcss.com/](http://koa.bootcss.com/)

### Lmabda的Node.js

AWS SDK for JavaScript [http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

AWS Lambda 的 Node.js编程模型 [http://docs.aws.amazon.com/lambda/latest/dg/programming-model.html](http://docs.aws.amazon.com/lambda/latest/dg/programming-model.html)