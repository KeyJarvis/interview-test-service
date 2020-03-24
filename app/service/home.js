'use strict';

const Service = require('egg').Service;
class HomeService extends Service {
  async find(name) {
    const user = await this.app.mysql.query('select * from tableData where name = ?', name);
    return user;
  }
  async getToken(code) {
    const token = await this.ctx.curl('https://oapi.dingtalk.com/gettoken', {
      method: 'GET',
      data: {
        appkey: 'ding87hk5s6ii4knnblk',
        appsecret: 'yNN67-5lwqoE8AndECSnsDVMM5zH_x0VNHXlZiwbnya0AJ7NcrUpE-wrMp74fu9D',
      },
      dataType: 'json',
    });
    const userId = await this.ctx.curl('https://oapi.dingtalk.com/user/getuserinfo', {
      method: 'GET',
      data: {
        code,
        access_token: token.data.access_token,
      },
      dataType: 'json',
    });
    return userId;
  }
  async create(data) {
    const result = await this.app.mysql.insert('tableData', data);
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
  async modify(data) {
    const result = await this.app.mysql.update('tableData', data);
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
  async delete(id) {
    const result = await this.app.mysql.query('delete from tableData where id = ? ', id);
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
}
module.exports = HomeService;
