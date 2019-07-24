// by requring 'babel/register', all of our successive require's will be Babel'd

require('babel-core/register');
require('./server.js');