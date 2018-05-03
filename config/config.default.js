'use strict';

module.exports = appInfo => {
  const config = exports = {};
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525353654222_1750';
  
  // 添加 view 配置
  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  };
  
  config.static = {
    // maxAge: 31536000,
  };
  
  // add your config here
  config.middleware = [];
  
  return config;
};
