hostname= claritywallpaper.com





^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body https://raw.githubusercontent.com/lukaschan/QuantumultX/main/CW.js

var url = $request.url;
var obj = JSON.parse($response.body);

const userinfo = "/userInfo";

const setfree = "/special/queryByCatalogAll";

if (url.indexOf(setfree) != -1) {
  for (var i = 0; i < obj.data.length; i++) {
    obj.data[i].isFree = true;
    obj.data[i].random = "Kqp5/Z35ga5WBeNcLue+dBwZW4ZWRoDFMAqqU48d06Y=";
  }
  body = JSON.stringify(obj);
}


if (url.indexOf(userinfo) != -1) {
  obj.data.level = 5;
  obj.data.expireTime = 4070965662;
  body = JSON.stringify(obj);
}

$done({ body });
