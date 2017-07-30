// home.js
var app=getApp();
var wxMarkerData=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {},

  
  },
  makertap: function (e) {
 console.log(123);
    debugger;
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(that.data.markers, id);
    that.changeMarkerColor(that.data.markers, id);
  }, 
  controltap:function(e){
console.log(e);

  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
    debugger;
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../example/img/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../example/img/marker_red.png";
      }
      debugger;
      markers[j]=data[j];
    }
    that.setData({
      markers: markers
    });
  } ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
  
    app.baiduMap.getCityName(function (data) {

      that.setData({
        markers: data.wxMarkerData
      });
      that.setData({
        latitude: data.wxMarkerData[0].latitude
      });
      that.setData({
        longitude: data.wxMarkerData[0].longitude
      });
       
    }, function (err) {
      console.log("err")
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: 'aboutMe' });
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