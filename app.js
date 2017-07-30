//app.js
let wechat=require("./utils/wechat.js");
let douban = require('./utils/douban.js');
let baiduMap=require('./utils/baiduMap.js')

App({
  data: {
    ak: "VnNQtne9sHCLLy6LGOvfLElGvwbMG9S4", //填写申请到的ak  
    markers: [],
    longitude: '',   //经度  
    latitude: '',    //纬度  
    address: '',     //地址  
    cityInfo: {}  ,   //城市信息  ,
    currentCity:''
  }, 
  douban:douban,
  baiduMap:baiduMap,
  
 //注册小程序 !!!!调用接口层层回调
 onLaunch(){
   var that=this;
      wx.switchTab({
     url: 'pages/board/board',
   })
  // return baiduMap.getCityName(function(data){
  //     console.log(data);
  //     var address = data.originalData.results[0].address;
  //     console.log(address);
  //  var index=data.originalData.results[0].address.indexOf('市');
  //  var name = address.slice(0, index)
  //  debugger;
  //         console.log(that);
  // //  that.setData({ currentCity: name});为什么这个不可以用
  //        that.data.currentCity=name;
 
  //      },function(err){
  //  console.log("err")
  //      });
      wechat.getLocation().then((res)=>{
        debugger;
        console.log(res);
      })
  

 
  
   console.log("当小程序初始化完成时，会触发 onLaunch（全局只触发一次）");


}
})
