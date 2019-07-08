const express = require('express')
const app = express()

setupProxy()

function setupProxy() {
  var http = require('http')
  var url = require('url')
  const HOST = 'localhost'
  const PORT = '8900'

  app.all('/api/test', function(req, res) {
    var opts = {
      host: HOST,
      port: PORT,
      path: req.url,
      method: req.method,
      headers: {
        ...req.headers,
        // host: 'localhost:8900',
      },
      agent: false
    }
    console.log('opts', opts)

    var request = http.request(opts)

    request.on('response', function(response) {

      // set status code
      if (response.statusCode) res.status(response.statusCode)

      // set headers
      if (response.headers) res.set(response.headers)
      
      response.pipe(res)
    })

    req.pipe(request)
  })
  app.listen(3000);
}