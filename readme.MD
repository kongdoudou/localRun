# localRun

> H5&PC组件代码本地调试测试

## Build Setup

``` bash
# 安装依赖
npm install

在 MacOS 或 Linux 中，通过如下命令启动此应用：
$ DEBUG=myapp:* npm start

在 Windows 中，通过如下命令启动此应用：
> set DEBUG=myapp:* & npm start

然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。


## src 目录结构

```sh

├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
    │   └── changeColor.js  # 引入的JS文件
│   └── stylesheets
│       └── style.css       # 引入的css文件
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── index.vm
    └── test.vm             # 测试组件

```
