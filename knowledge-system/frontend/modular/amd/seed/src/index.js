(function(window) {
  const rProtocol = /^(file\:.+\:\/|[\w\-]+\:\/\/)/;
  const moduleOption = {
    baseUrl: null,
  };

  const seed = function() {
    const easyModule = {
      // 将模块的相对路径和基础路径合并成真正的模块路径
      // 任何一个资源定位符号都要分为 protocol domain path
      // 这里将他们转化为 protocol + domain + dir
      mergePath: function(id, url) {
        const isRootDir = id.charAt(0) === '/';
        // 是否是 http 协议
        const isHttp = url.slice(0, 4) === 'http';
        const protocol = url.match(rProtocol)[1];
        let domain = '';
        url = url.slice(protocol.length);

        if (isHttp) {
          domain = url.slice(0, url.indexOf('/') + 1);
          url = isRootDir ? '' : url.slice(domain.length);
        }

        const urlDir = url.split('/');
        urlDir.pop();
        const idDir = id.split('/');
        idDir.pop();

        // 为什么要将最后一位空格去除，在 idDir 无意义，在 urlDir 会在 push 之后影响路径合并

        // 如果是根目录，将最开始的空格去除
        if (isRootDir) {
          idDir.shift();
        }

        for (let i = 0; i < idDir.length; i++) {
          // 如果模块路径出现 ..，那么基础路径则删除一层级
          if (idDir[i] === '..') {
            urlDir.pop();
          } else if (idDir[i] !== '.') {
            // 否则将模块路径加入基础路径
            urlDir.push(idDir[i]);
          }
        }

        const path = urlDir.join('/') === '' ? '' : urlDir.join('/') + '/';

        return protocol + domain + path;
      },
      init: function() {
        const scripts = document.getElementsByTagName('script');
        const script = scripts[scripts.length - 1];

        const initMod = script.getAttribute('data-main');
        const baseUrl = script.getAttribute('data-baseurl');

        const url = script.src || window.location.href;

        // 如果设置了 base-url，那么在 mergePath 的时候，就要用 window.location.href 进行 merge
        moduleOption.baseUrl = baseUrl ? easyModule.mergePath(baseUrl, window.location.href) : url.slice(0, url.lastIndexOf('/') + 1);

        console.log(moduleOption)
        
        if (initMod) {
          seedExports.use(initMod);
        }
      },
      load: function() {

      }
    };

    // 输出的接口
    const seedExports = {
      use: function(ids, fn) {
        const moduleIds = typeof ids === 'string' ? [ids] : ids;
        console.log('moduleIds', moduleIds);
      }
    };

    easyModule.init();

    window.define = function() {

    }

    return seedExports;
  }

  window.seed = seed();
})(window);