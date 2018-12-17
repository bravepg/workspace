const http = require('http');
const https = require('https');
const fs = require('fs');
const pako = require('pako');
const cheerio = require('cheerio');

let url = 'http://list.iqiyi.com/www/2/15------------------.html' // 入口链接


function start(url, title, dataTvId, dataAlbumId) {
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
            const $sitePiclistPic = $('.page-list .site-piclist_pic');
            $($sitePiclistPic[0])
            // $sitePiclistPic
            $($sitePiclistPic[0]).each(function () {
                const href = $(this).find('a').attr('href');
                const title = $(this).find('a').attr('title');
                const dataTvId = $(this).find('a').attr('data-qidanadd-tvid');
                const dataAlbumId = $(this).find('a').attr('data-qidanadd-albumid');
                // 通过 dom 节点去获取电视剧信息
                start(href, title, dataTvId, dataAlbumId);
            });

            // 获取每部电视剧对应的信息
            const $albumMain = $('.albumV2-wrap .album-main');
            if ($albumMain.length) {
                // console.log(title);
                const heatInfo = $albumMain.find('.heat-info').text();
                // console.log(heatInfo);
                const objInfo = {};
                $albumMain.find('.episodeIntro-item').find('p').each(function() {
                    const $dom = $(this).find('a').length ? $(this).find('a') : $(this).find('span');
                    const textArray = [];
                    $dom.each(function (){
                        textArray.push($(this).text());
                    });
                    objInfo[$(this).find('em').text()] = textArray.join('/');
                });
                // console.log(objInfo);
                const nameArray = [];
                $albumMain.find('.headImg-name').each(function() {
                    const text = $(this).find('a').text();
                    if (!nameArray.includes(text)) nameArray.push(text);
                });
                // console.log('演员：', nameArray.join('/'));
                getComment(dataTvId, dataAlbumId, {
                    title,
                    heatInfo,
                    objInfo,
                    name: nameArray.join('/'),
                });
            }
        })
    })
}
function getComment(dataTvId, dataAlbumId, data) {
    const url = `https://sns-comment.iqiyi.com/v3/comment/get_comments.action?agent_type=118&agent_version=9.0.0&authcookie=null&business_type=17&content_id=${dataTvId}&page=1&page_size=40`;
    https.get(url, res => {
        let html = '';
        res.on('data', data => {
            html += data
        });
        res.on('end', err => {
            if (err) {
                console.log(err);
                return;
            }
            let obj = JSON.parse(html);
            let arr = obj.data.hot.concat(obj.data.comments).map(item => item.content);
            console.log('剧名：', data.title);
            console.log('热度：', data.heatInfo.match(/\d+/)[0]);
            Object.keys(data.objInfo).forEach((key) => {
                console.log(key, data.objInfo[key]);
            })
            console.log('演员：', data.name);
            console.log('相关评论：', arr);
            const danmu = `https://cmts.iqiyi.com/bullet/93/00/1177939300_300_2.z?rn=0.7996630430177345&business=danmu&is_iqiyi=true&is_video_page=true&tvid=${dataTvId}&albumid=${dataAlbumId}&categoryid=2&qypid=01010021010000000000`;
            
            https.get(danmu, res => {
                let html = '';
                res.on('data', data => {
                    html += data
                });
                res.on('end', err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    
                    var responseArray = new Uint8Array(html); 
                    console.log(responseArray)
                    // var responseString = pako.ungzip(responseArray);
                    // responseString = responseString.replace(/&#\d{2};/g, "");
                    // console.log(responseString);
                })
            });
        })
    })
}
start(url);