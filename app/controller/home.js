'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    
    const locals = {
      data: 'world',
      title: 'FEAS GmbH 中国'
    };
    
    const viewOptions = {
      layout: 'layout/index.ejs'
    };
    
    await this.ctx.render('pages/home/index.ejs', locals, viewOptions);
  }
}

module.exports = HomeController;
