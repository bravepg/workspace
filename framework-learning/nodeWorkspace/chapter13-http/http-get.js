const http = require('http');
http.get('http://nodejs.org/dist/index.json', (res) => {
	console.log(res.headers);
	const { statusCode } = res;
	const contentType = res.headers['content-type'];

	let error;
  	if (statusCode !== 200) {
    	error = new Error('请求失败。\n' +
                      	`状态码: ${statusCode}`);
  	} else if (!/^application\/json/.test(contentType)) {
    	error = new Error('无效的 content-type.\n' +
                      	`期望 application/json 但获取的是 ${contentType}`);
  	}
  	if (error) {
	    console.error(error.message);
	    // 消耗响应数据以释放内存
	    // 注意此时没有设置'data'事件，只是消费掉释放内存而已
	    res.resume();
	    return;
	}
	res.setEncoding('utf8');
  	let rawData = '';

  	res.on('data', (chunk) => { rawData += chunk; });
  	res.on('end', () => {
	    try {
	      	const parsedData = JSON.parse(rawData);
	      	console.log(parsedData);
	    } catch (e) {
	      	console.error(e.message);
	    }
  	});
}).on('error', (e) => {
  console.error(`错误: ${e.message}`);
});