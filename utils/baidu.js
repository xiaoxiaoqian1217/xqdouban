'use strict';

var URI = 'https://api.map.baidu.com';
var fetch = require('./fetch');

function fetchApi(type, params) {
  return fetch(URI, type, params);
}

/**
 * 根据经纬度获取城市
 * @param  {Number} latitude   经度
 * @param  {Number} longitude  纬度
 * @return {Promise}       包含抓取任务的Promise
 */
function getCityName(res) {
  // var latitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 39.90403;
  // var longitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 116.407526;
  if(res){
    console.log(res);
     let latitude = res.latitude;
      let longitude = res.longitude;
      let position = { location: latitude + ',' + longitude,src:'douban'};
      return fetchApi('geocoder/', position).then(function (res) {
        console.log(res);
        return res.data.result.addressComponent.city;
      });
  }else{
    console.log(err);
  }
 
}

module.exports = { getCityName: getCityName };
//# sourceMappingURL=baidu.js.map
