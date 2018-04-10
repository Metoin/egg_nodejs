'use strict';

const Controller = require('egg').Controller;
// 验证规则
const createRule = {
	username: {
		type: 'email'
	},
	password: {
		type: 'password',
		compare: 're-password'
	}
}

class Member extends Controller {
	// 获取列表
	async index () {
		const userId = 1;
		const userInfo = await this.ctx.service.member.find(userId)
		console.log(userInfo)
		this.ctx.body = userInfo;
		// 内部重定向
		//this.app.router.redirect('/', '/home/index', 302);
		// 外部重定向
		let q = '1111';
		//this.ctx.redirect(`http://www.baidu.com?q=${q}`);
	}

	async new () {
		this.ctx.body = JSON.stringify({a: '3', b: '4'});
	}
	// :id/edit
	async show () {
		let id = this.ctx.params.id;
		this.ctx.body = JSON.stringify({a: '1'});
	}

	async edit () {
		this.ctx.body = JSON.stringify({a: '5', b: '6'});
	}

	async create () {
		// 对数据规则进行验证
		this.ctx.validate(createRule);
		this.ctx.body = JSON.stringify({a: '5', b: '6'});
	}

	async update () {}

	async destroy () {}

	// 用户登录
	async login () {
		const user = await this.app.mysql.get('member', {id: 1});
		this.ctx.body = this;
	}

	async logout () {}

	async simpleInfo (){}
}

module.exports = Member;