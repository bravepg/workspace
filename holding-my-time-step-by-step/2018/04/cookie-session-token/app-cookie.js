var express = require('express'),
	cookieParser = require('cookie-parser'),
	credentials = require('./credential.js');

const app = express();

app.listen(3000);

// 使用 cookieParser 中间件，cookieParser(secret, options)
app.use(cookieParser(credentials.cookieSecret));

app.get('/', function (req, res) {
	// 如果请求中的 cookie 存在 jack, 则输出 cookie
	// 否则，设置 cookie 字段 jack, 并设置过期时间为1分钟
	console.log(req.cookies);
	if (req.cookies.monster) {
		var monsterCookie = req.cookies.monster;
		var monsterCookie2 = req.cookies.monster2;
		var signedMonsterCookie = req.signedCookies.signed_monster;
		res.send({
			monsterCookie: monsterCookie,
			monsterCookie2: monsterCookie2,
			signedMonsterCookie: signedMonsterCookie
		})
	} else {
		res.cookie('monster', 'content', { maxAge: 60 * 1000, httpOnly: true });
		res.cookie('monster2', 'content', { maxAge: 60 * 1000 });
		res.cookie('signed_monster', 'content', { signed: true});  // 此处的signed: true必须在cookieParser(secret, options)的第一个参数存在才可以使用

		res.send("no cookie");
	}
});