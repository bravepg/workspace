const http = require('http');
const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const cheerio = require('cheerio');
const json2xls = require('json2xls');

const url = 'http://tv.youku.com/?spm=a2hww.11359951.m_26658.5~1~3~8~A' // 入口链接

function start(url, title) {
    http.get(url, res => {
        let html = ''; // 设置编码

        // 接受到数据时，将收到的数据拼接到上面定义的html变量中，接收完成后即得到该页完整的html代码
        res.on('data', data => {
            html += data
        });

        res.on('end', err => {
            if (err) {
                console.log(err);
                return;
            }
            // 利用 cheerio 模块将完整的 html 装载到变量 $ 中，之后就可以像 jQuery 一样操作 html 了
            const $ = cheerio.load(html); 
            // 入口的 dom 节点
            const $ykRows = $('#m_86827 .v');
            $ykRows.each(function () {
                const href = $(this).find('.v-meta-entry').find('a').attr('href');
                const title = $(this).find('.v-meta-title').find('a').text();
                if (title && href) {
                    // 通过 dom 节点去获取电视剧信息
                    start(`http:${href}`, title);
                }
            });
            // 获取每部电视剧对应的信息
            const $ykContent = $('.yk-content');
            if ($ykContent.length) {
                let totalNum = '';
                let place = '';
                let type = '';
                let pubTime = '';
                
                $ykContent.find('.p-base').children("ul").find('li').each(function(index) {
                    const text = $(this).text();
                    if (text.includes('优酷开播')) {
                        pubTime = text.match(/[\d-]+/)[0];
                    }
                    if (text.includes('地区')) {
                        place = text.split('：')[1];
                    }
                    if (text.includes('类型')) {
                        type = text.split('：')[1];
                    }
                    if (text.includes('总播放数')) {
                        totalNum = text.match(/[\d,]+/)[0];
                    }
                });
                const rate = $ykContent.find('.star-num').text();
                const performer = $ykContent.find('.p-performer').attr('title');
                const videoId = html.match(/(?<=videoId:)[^,]+/)[0].match(/\d+/)[0];
                getComment(videoId, {
                    title,     // 剧名
                    rate,      // 评分
                    performer, // 演员
                    place,
                    type,
                    totalNum,
                    pubTime
                });
            }
        })
    })
}
function md5Encrypt(encryptString) {
    var hasher = crypto.createHash("md5");
    hasher.update(encryptString);
    return hasher.digest('hex');
}

function getComment(videoId, data) {
    const appId = '100-DDwODVkv';
    const appSecret = '6c4aa6af6560efff5df3c16c704b49f1';
    const time = ~~(Date.now() / 1e3);
    const string = `${appId}&${appSecret}&${time}`;
    const sign = md5Encrypt(string);
    const commentUrls = [
        `http://p.comments.youku.com/ycp/comment/pc/commentList?jsoncallback=n_commentList&app=100-DDwODVkv&objectId=${videoId}&objectType=1&listType=0&currentPage=1&pageSize=30&sign=${sign}&time=${time}`,
        `http://p.comments.youku.com/ycp/comment/pc/commentList?jsoncallback=n_commentList&app=100-DDwODVkv&objectId=${videoId}&objectType=1&listType=0&currentPage=2&pageSize=30&sign=${sign}&time=${time}`,
        `http://p.comments.youku.com/ycp/comment/pc/commentList?jsoncallback=n_commentList&app=100-DDwODVkv&objectId=${videoId}&objectType=1&listType=0&currentPage=3&pageSize=30&sign=${sign}&time=${time}`,
        `http://p.comments.youku.com/ycp/comment/pc/commentList?jsoncallback=n_commentList&app=100-DDwODVkv&objectId=${videoId}&objectType=1&listType=0&currentPage=4&pageSize=30&sign=${sign}&time=${time}`,
    ];
    const danmuUrl = `http://service.danmu.youku.com/list?jsoncallback=jQuery191010183895692404588_1541126953316&mat=14&mcount=1&ct=1001&iid=${videoId}&aid=416313&cid=97&lid=0&ouid=0&_=${time}`;

    const commentPromises = commentUrls.map(url => {
        return getCommentList(url)
    })
    Promise.all([...commentPromises, getDanMu(danmuUrl)]).then(arr => {
        let comments = [];
        let danmu = [];
        arr.forEach((item, index) => {
            if (arr.length === index + 1) {
                danmu = item;
            } else {
                comments = comments.concat(item);
            }
        });
        // console.log('剧名：', data.title);
        // console.log('评分：', data.rate);
        // console.log('演员：', data.performer);
        // console.log('地区：', data.place);
        // console.log('类型：', data.type);
        // console.log('播放量：', data.totalNum);
        // console.log('开播时间：', data.pubTime);
        // console.log('评论：', comments);
        // console.log('弹幕：', danmu);

        var jsonArr = danmu.map((item, index) => {
            return {
                '剧名': data.title,
                '评分': data.rate,
                '演员': data.performer,
                '地区': data.place,
                '类型': data.type,
                '播放量': data.totalNum,
                '开播时间': data.pubTime,
                '评论': comments[index] || '',
                '弹幕': item,
            }
        })
        var xls = json2xls(jsonArr);
        // fs.writeFileSync(`${data.title}.xlsx`, xls, 'binary');
        fs.writeFileSync(`${data.title}.json`, JSON.stringify(comments));
    });
}

function getDanMu(url) {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let html = '';
            res.on('data', data => {
                html += data
            });
            res.on('end', err => {
                if (err) {
                    console.log(err);
                    return;
                }
                let obj = JSON.parse(html.match(/\((.+)\)/)[1]);
                arr = obj.result.map(item => item.content);
                resolve(arr);
            })
        })
    });
}

function getCommentList(url) {
    let arr = []
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let html = '';
            res.on('data', data => {
                html += data
            });
            res.on('end', err => {
                if (err) {
                    console.log(err);
                    return;
                }
                let obj = JSON.parse(html.match(/\((.+)\)/)[1]);
                arr = obj.data.hot.concat(obj.data.comment).map(item => item.content);
                resolve(arr);
            })
        })
    });
}
start(url);
