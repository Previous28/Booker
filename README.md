# booker

### 项目说明

一个书籍阅读管理应用。功能有：

- 记录用户的书籍阅读情况，列出所记录的所有书籍的情况
- 添加新的书籍纪录
- 修改某条书籍纪录的情况
- 删除某条书籍纪录
- 总览纪录情况

### 技术栈

- Vue.js
- Vuex
- vue-router
- Webpack
- ElementUI
- Express
- Axios

### 组件划分

```
App：挂载整个应用
 |——Navbar:导航组件
 |——bookstep:【我的书迹】界面主要内容
 	|——bookitem:单个书籍纪录组件
 		|——booktabs:书籍标签组件
 |——newbook:【新书纪录】界面主要内容
 |——statistics:【总览】界面主要内容
 	|——typecount：分类统计组件
```



### 文件结构

```
|——build：构建用到的相关文件
|——config：构建的配置文件
|——node_modules：相关依赖文件
|——server：后端开发源码
|	|——data：存放项目数据
|	|——model：提供访问和操作数据服务的数据模型
|	|——router：控制器，后端路由
|	|——app.js：服务器启动文件
|——src：前端开发源码
	|——assets：静态资源如图片、样式文件等
	|——component：前端组件
	|——router：前端路由
	|——store：vuex的store
	|——App.vue：应用的外层结构
	|——main.js：应用的入口文件
```



### 运行项目

``` bash
# install dependencies 安装依赖
npm install

# run server at localhost:8081 启动服务端
npm run server

# serve with hot reload at localhost:8080 运行项目前端
npm run dev
```
