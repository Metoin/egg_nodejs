'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = JSON.stringify({a: '1111', b: '2222'});
  }
}

module.exports = HomeController;
