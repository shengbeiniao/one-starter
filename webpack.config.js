const fs = require('fs');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (webpackConfig, env) {
  //设置模块根解析路径
  const root=__dirname+'/src';
  webpackConfig.context=root;
  webpackConfig.resolve.root=root;
  //覆盖默认配置
  webpackConfig.entry={
    index:'./index.js'
  };

  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css'
  }]);

  //覆盖默认配置，js loader包含one-base
  webpackConfig.module.loaders.forEach(loader=>{
    if(loader.test.toString()==='/\\.js$/'){
      loader.exclude=/node_modules(?!\/one-base)/;
    }
  });

  //添加sass loader
  webpackConfig.module.loaders.push(
    {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
        'resolve-url',
        'sass?sourceMap'
      ]
    }
  );

  //设置sass根解析路径
  webpackConfig['sassLoader']={
    includePaths:[path.resolve(__dirname,'./src')]
  };

  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template:'index.tpl',
      inject:true
    })
  );

  return webpackConfig;
};
