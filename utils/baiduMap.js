
let bmap = require('./bmap-wx.min.js');

function getCityName(resovle,reject){
  var BMap = new bmap.BMapWX({
    ak: 'VnNQtne9sHCLLy6LGOvfLElGvwbMG9S4'
  });



  //把所有数据放在初始化data内  
  //      BMap.regeocoding({
  //   fail: function (err) {
  //     console.log(err);
  //   },
  //   success: function (data) {
  //     wxMarkerData = data.wxMarkerData;
  //     console.log(data.wxMarkerData);
  //     console.log(data.originalData);
  //     that.currentCity = data.originalData.result.addressComponent.city;



  //   }
  // })
  debugger;
   return  BMap.search({
     query:'美食',
         fail: reject,
         success: resovle,
        

       })
};

module.exports={

  
   getCityName:getCityName
}


