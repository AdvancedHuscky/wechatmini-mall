const DB = require('../utils/db.js')

module.exports = {
  //首页商品数据遍历
  list: async ctx =>{
    ctx.state.data = await DB.query("SELECT * FROM product;")
  },
  //商品详情页面接口
  detail:async ctx =>{
    //这里可以通过使用+将字符串转换成数值类型
    productID = + ctx.params.id;
    ctx.state.data = await DB.query("SELECT * FROM product where product.id =?",[productID])
  }
}