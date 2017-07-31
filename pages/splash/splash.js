// splash.js

var app=getApp();
var Promise = require('../../utils/bluebird');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    loading: true
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handleStart:function(e){
 console.log(e)
 wx.switchTab({
   url: '../board/board',
 })
  },
  onLoad: function () {
  app.douban.find('coming_soon',0,3).then((res)=>{
          console.log(res);
          this.setData({
            movies:res.subjects
          })

       })
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