# 微信购物宝`v1.0.0` 

基于gulp+webpack+vue的组件化SPA工程

---
#功能
* 提供开发调试所需要的环境，包括热启动，浏览器自动刷新，sourceMap
* vue组件化开发
* 小体积 img 转换 base64 写入代码，减少页面请求数
* 将js打包为不同的入口文件，并自动合并依赖关系
* 将跨页面的公用代码抽离为独立文件，益于浏览器缓存
* js css html 压缩
* ES6 支持
* sass编译


---
#工程配置环境
当前工程版本@1.0.0,相关依赖

> 系统环境
`maxosx@10.10.3`
`npm@2.15.8`
`node@5.11.1`

---
> 主要模块版本
`gulp@3.9.1`
`webpack@1.12.2`

--- 
#工程目录结构

+ [src] 主应用/页面相关文件
    + [components] 组件目录,一个组件一个.vue文件
        - a.vue
        - b.vue
        - app.vue 主 vue
    - index.html 入口页面
    + [js]
        - [lib] 公用js文件
        - app.js 页面入口js文件，对应同名html
    + [sass] scss目录
    + [img] 图片资源
+ [dist] (ignored) 打包输出目录
+ [node_modules] (ignored)
- gulpfile.js gulp配置文件 项目打包/监听等任务
- package.json 记录项目基本信息，包括模块依赖关系
- webpack.config.js webpack配置文件，loader vue组件
- README.md 项目描述文件

---
#开发指南
`入口文件[src/js/*.js]`
每个页面对应一个同名js入口文件，build后会生成一个同名js文件加载该页内容模块

```
//app.js 
//页面所有资源请求，都在入口js中加载

/* 下列所有引用样式文件会被打包成 login.css */
//页面引用base.scss
require(PATH + 'base.scss');
//页面引用adminlogin.scss
require(PATH + 'adminlogin.scss');

/* 请求js示例 入口文件中请求的js模块，最终会打包到dist/js/login.js 文件中*/
var example = require(PATH + 'example.js');
```
`vue组件`
页面采用vue组件进行开发

可重用组件 html css js作为独立个体，页面能够直接引用

### USE STYLE 
> - 组件样式直接写在vue组件文件
```
<style lang="sass">
//...
</style>
```
---
> - 外部样式表(如有需要) 文件存储位置`src/sass/*.scss` 或 `src/sass/**/*.scss`

引用方式一：在入口js文件require 

```
require(PATH + '*.scss');
```
引用方式二 :在html中通过link引用
```
<link href="css/*.css">
```


### USE JAVASCRIPT  
> - 脚本直接写在vue组件文件
```
<script>
//...
</script>
```
引用方式二 :在html中通过script引用 文件存储位置 `src/js/*.js` 或  `src/js/**/*.js`
```
<script src="js/*.js"></script>
```

---
#building 指令
###主要指令
`$ npm install`  npm安装依赖模块
`$ npm run dev`  启动本地开发服务器
`$ npm run build`  打包发布

###dev 说明

`$ npm run dev` 启动本地服务
> 浏览器打开 localhost:8080 预览页面 

 - 服务根目录指向dist目录，`当前版本`需要dist中存在html文件(src目录中创建html，运行命令后gulp会写入html到dist目录) 


 - 该模式下入口JS文件及入口JS文件中require其他js/vue模块会写入内存，入口文件中require css/scss 会以style写入html header。以上资源支持热重载

 - html中需要额外引用外部css 和 js 静态资源时，在src/*.html中采用相对路径引用
```
//index.html 
<link src="css/example.css">
<script src="js/example.js"></script>
```
以上示例 实际根路径指向dist/
example.css 源文件为 src/sass/example.scss, gulp watch会检测该文件修改，保存文件后自动编译至 dist/css/example.css
js/img等同理

###build 说明
`$ npm run build` 打包前端工程生产代码
注：不同与dev模式 build时publicPath为线上url


