// list.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  movies:[],
  title:'',
  subtitle:"加载中...",
  type:'',
  loading: true,
  page:1,
  size:20,
  hasMore:true
 
  },
  handleLoadMore: function() {
    if(!this.data.hasMore) {
      return;
    };
    
    app.douban.find(this.data.type,this.data.page++,this.data.size).then((res) => {
  
 console.log(res);
  if(res.subjects.length){
    this.setData({
      movies: this.data.movies.concat(res.subjects),
      loading:false,
      subtitle:res.title
     
    })
  }else{
    this.setData({
     loading:false,
      hasMore:false,
      


    })
  }

     
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.data.title = options.title||this.data.title;
   
    // 这种方式在item 的onload方法里也不好用
    this.data.type=options.type;
  
    
    this.handleLoadMore();
  
  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' });
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