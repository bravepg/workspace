/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 11:47:00
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 11:50:01
*/

'use strict';
const { exec } = require('child_process');

// exec('echo "The \\$HOME variable is $HOME"');
exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
 	 if (error) {
    	console.error(`exec error: ${error}`);
    	return;
  	}
  	console.log(`stdout: ${stdout}`);
  	console.log(`stderr: ${stderr}`);
});