module.exports.function = function notice () { //공지사항
  var http = require('http')
  var result = http.getUrl("https://api.sheety.co/5b52b447-34a8-4d90-9b9e-98f5b440b609",{format : 'json'})

  return result
} 