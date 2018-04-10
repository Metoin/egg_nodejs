const Service = require('egg').Service;

class Member extends Service {
	async find (uid) {
		console.log(uid);
		const user = await this.app.mysql.query('select * from member where id = ?', uid);
		console.log(user, '获取的用户')
		return user;
	}
}

module.exports = Member;