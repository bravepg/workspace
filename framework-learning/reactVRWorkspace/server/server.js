/*
* @Author: gaopeng
* @Date:   2017-06-07 10:54:15
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-06-07 15:07:36
*/

'use strict';
    const express = require('express');
    const bodyParser = require('body-parser');
    const Pusher = require('pusher');

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    /*
      The following headers are needed because the development server of React VR
      is started on a different port than this server. 
      When the final project is published, you may not need this middleware
    */
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", 
                 "Origin, X-Requested-With, Content-Type, Accept")
      next();
    });

    const pusher = new Pusher({
      appId: '349229',
      key: '031f2ea01b418a05d66c',
      secret: '5b5ce22273732c200cd9',
      cluster: 'mt1',
      encrypted: true,
    });

    app.post('/pusher/trigger', function(req, res) {
      pusher.trigger(req.body.channelName, 
                     'sound_played', 
                     { index: req.body.index },
                     req.body.socketId );
      res.send('ok');
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Running on port ${port}`));