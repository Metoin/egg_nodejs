'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523328008773_4384';

  // 加载 errorHandler 中间件
  config.middleware = [
  	'errorHandler'
  ];

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
  	match: '/api'
  };

  config.mysql = {
  	// 单数据库信息配置
	client: {
	  // host
	  host: '127.0.0.1',
	  // 端口号
	  port: '3306',
	  // 用户名
	  user: 'root',
	  // 密码
	  password: 'password',
	  // 数据库名
	  database: 'test',
	},
	// 是否加载到 app 上，默认开启
	app: true,
	// 是否加载到 agent 上，默认关闭
	agent: false,
  };

  return config;
};
