// pages/detail/detail.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {
      id: 2,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      name: '商品2',
      price: 200,
      source: '国内·广东',
    }
  },
  getProduct(id){
    wx.showLoading({
      title: '商品数据加载中……',
    })
    qcloud.request({
      url:config.service.productDetail + id,//对特定的商品获取数据
      success:result=>{
        wx.hideLoading()
        let data = result.data
        //返回数据的code为0的时候
        if(!data.code){
          this.setData({
            product:data.data
          })
        }else{
          //过了2秒没有执行函数，则返回上一页
          setTimeout(()=>{
            wx.navigateBack()
          },2000)
        }
      },
      fail:()=>{
        wx.hideLoading()
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProduct(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})