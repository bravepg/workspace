require.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
  }
});

require([
  'ramda',
  'jquery',
], function (_, $) {
  var trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
  });
  /**
   * 根据特定搜索关键字构造 url
   * 向 flickr 发送 api 请求
   * 把返回的 json 转为 html 图片
   * 把图片放到屏幕上
   */
  var Impure = {
    getJSON: _.curry(function(callback, url) {
      return $.getJSON(url, callback);
    }),
    setHtml: _.curry(function(sel, html) {
      $(sel).html(html);
    })
  }

  var url = function (term) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
  };

  var image = function (url) {
    return $('<img />', {src: url})
  }

  // 命令式代码
  // let result = {}
  //   // 1. 获取数据
  // $.getJSON(url("cats")).then(v => {
  //   result = v
  //   console.log('result', result)
  //   // 2. 把返回的 json 转为 html 图片
  //   const html = result.items.map(item => {
  //     return $('<img />', {src: item.media.m})
  //   })
  //   // 3. 把图片放到屏幕上
  //   $('body').html(html);
  // })
  
  // 声明式代码
  // var mediaUrl = _.compose(_.prop('m'), _.prop('media'));
  // var srcs = _.compose(_.map(mediaUrl), _.prop('items'));
  // var images = _.compose(_.map(image), srcs);
  // var renderImages = _.compose(Impure.setHtml("body"), images);
  // var app = _.compose(Impure.getJSON(renderImages), url);
  // app("cats");
  
  // 重构一下
  var mediaUrl = _.compose(_.prop('m'), _.prop('media'));
  var mediaToImg = _.compose(image, mediaUrl);
  var images = _.compose(_.map(mediaToImg), _.prop('items'));
  var renderImages = _.compose(Impure.setHtml("body"), images);
  var app = _.compose(Impure.getJSON(renderImages), url);
  app("cats");
});
