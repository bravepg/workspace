function MyPlugin(options) {
    this.opts = options;
};

/**
 * 2. 一个插件必须具有 apply 方法，并且该方法会注入 compiler 对象
 * @param {*} compiler webpack 的编辑器对象 调用 webpack 函数时会生成
 */
MyPlugin.prototype.apply = function(compiler) {
    const self = this;
    // 3. compiler 对象上挂载了相应的 webpack 事件钩子
    // 4. 事件钩子的回调函数里能拿到编译后的 compilation 对象，compilation 对象是单一的版本构建和生成资源
    compiler.plugin('emit', (compilation, callback) => {
        // let stats = compilation.getStats().toJson({ chunkModules: true });
        // let stringifiedStats = JSON.stringify(stats);
        // // 服务端渲染
        // let html = `<!doctype html>
        //     <meta charset="UTF-8">
        //     <title>AnalyzeWebpackPlugin</title>
        //     <div id="App"></div>
        //     <script>window.stats = ${stringifiedStats};</script>
        // `;
        // compilation.assets[`${self.opts.filename}`] = { // 生成文件路径
        //     source: () => html,
        //     size: () => html.length
        // }
        // callback();
        var filelist = 'In this build:\n\n';
        for (var filename in compilation.assets) {
            filelist += ('- '+ filename +'\n');
        }
        compilation.assets['filelist.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };

        callback();
    });
};

// 1. 独立的 JS 模块，暴露相应的函数
module.exports = MyPlugin;