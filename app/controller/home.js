'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async info() {
    const { ctx } = this;
    const name = ctx.params.name;
    const userInfo = await ctx.service.home.find(name);
    ctx.body = userInfo;
  }
  async token() {
    const { ctx } = this;
    const code = ctx.params.code;
    const info = await ctx.service.home.getToken(code);
    ctx.body = info;
  }
  async deleteTask() {
    const { ctx } = this;
    const id = ctx.params.id;
    const info = await ctx.service.home.delete(id);
    ctx.body = info;
  }
  async newTask() {
    const { ctx } = this;
    const data = ctx.request.body.data;
    const info = await ctx.service.home.create(data);
    ctx.body = info;
  }
  async modifyTask() {
    const { ctx } = this;
    const data = ctx.request.body.data;
    const info = await ctx.service.home.modify(data);
    ctx.body = info;
  }
}

module.exports = HomeController;
