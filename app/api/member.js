'use strict';

const Controller = require('egg').Controller;

class Member extends Controller {
	async login () {
		this.ctx.body = JSON.stringify({a: '2111', b: '3222'});
	}

	async logout () {}

	async simpleInfo (){}
}

module.exports = Member;