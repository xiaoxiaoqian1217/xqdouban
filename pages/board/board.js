// board.js
var Promise = require('../../utils/bluebird');
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards: [{ key:'in_theaters'}, {key:'coming_soon'},{key:"top250"}],

    // indicatorDots: false,
    // autoplay: false,
    // interval: 5000,
    // duration: 1000

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var promises = this.data.boards.map(function (board) {
      return app.douban.find(board.key, 1, 10).then(function (d) {
    

        console.log(d);
        console.log(d.title);
        board.title = d.title;
        board.movies = d.subjects;
        return board;
      });
    });
    Promise.all(promises).then((boards) =>{
      console.log(boards)
    this.setData({ boards: boards});
    });

   
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