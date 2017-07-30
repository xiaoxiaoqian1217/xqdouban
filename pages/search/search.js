// pages/search/search.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
       movies:[],
       loading:false,
       hasMore:false,
       type:'search',
       page:1,
       size:10,
       search:""
  },
  handleSearch:function(e){

    let search=e.detail.value;
 this.setData({
        search:search,
        loading:true,
        hasMore:true
 })
 this.handleLoadMore();

     

  },
  handleLoadMore:function(){
    app.douban.find(this.data.type, this.page++, 10, this.data.search).then((res => {
      if (res.subjects.length) {
        this.setData({
          movies: res.subjects.concat(this.data.movies),
          loading: false,


        })
      } else {
        this.setData({
          loading: false,

          hasMore: false
        })
      }



    }))
          
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
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