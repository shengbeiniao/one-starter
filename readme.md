### 准备清单

1. webstorm
2. node
3. nodemon 

    ```npm i nodemon -g```    
      
### 项目概述

本项目基于阿里[dva](https://github.com/dvajs/dva)和[antd](https://ant.design/index-cn)开发,所有基础组件如Layout封装在[one-base](https://github.com/shengbeiniao/one-base)项目中，
开发者引入Layout后，只需关心子系统业务页面的开发。
Layout使用规范，具体参考src/router.js和src/index.js

### 项目预览

![界面预览](/screenshot.jpg)

### 开始开发
```
  $ mkdir one-starter
  $ cd one-starter
  $ git clone git@github.com:shengbeiniao/one-starter.git
  $ npm i
  $ npm start
  $ #启动mock服务器
  $ cd mock
  $ npm i
  $ nodemon app.js
```

### 项目核心依赖库一览

- react
  
  	[English](https://facebook.github.io/react/)
  
  	[中文](http://reactjs.cn/react/docs/getting-started-zh-CN.html)

- react-router
  
  	[English](https://github.com/ReactTraining/react-router/tree/master/docs)
  
  	[中文](https://react-guide.github.io/react-router-cn/docs/Introduction.html)

- redux
  	
    [English](http://redux.js.org/docs/introduction/index.html)
  
  	[中文](http://cn.redux.js.org/)

- react-redux
  	
    [English](https://github.com/reactjs/react-redux)

- react-router-redux
  	
    [English](https://github.com/reactjs/react-router-redux)

- CSS Modules
  	
    [English](https://github.com/css-modules/css-modules)
    [CSS模块化概述](https://github.com/camsong/blog/issues/5)
    
- Dora
  
  	[中文](https://ant-tool.github.io/)

- Webpack
  
  	[English](https://webpack.github.io/docs/)

- react-chartjs
  	
  	[English](https://github.com/reactjs/react-chartjs)

- async-validator

    [English](https://github.com/yiminghe/async-validator#rules)

### 常见问题及解决

*	设置Table的expandedRowRender却无法展开

	>请确认是否设置了rowKey,且值等于数据源中的id标识。


*	Select设置multiple属性后报错 

	>请确认FormItem中的getFieldDecorator的initialValue属性为数组

* Form保存后,表单状态残留引发编辑和新建初始化异常

  >initialValue只用于初始加载，表单改变后，需要使用setFieldsValue重新赋值


### 优化Webstorm

禁用node_modules索引,并添加所需要的依赖
1. Preferences-->directories-->exclude node_modules
2. Preferences-->Languages&Frameworks-->library-->remove node_modules
3. Preferences-->Languages&Frameworks-->library-->add React,Redux...
 
### 扩展插件

- [CSS Modules 插件](https://plugins.jetbrains.com/plugin/9275)
- [React Dev Tools](https://github.com/facebook/react-devtools)
- [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)
