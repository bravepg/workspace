## 开箱即用
``webpack4`` 不再需要配置文件(可以直接执行 ``npx webpack``)，它的默认 ``entry point`` 会是 ``src/index.js``，默认输出会是 ``dist/main.js``
如果不存在``src/index.js``，则会发生错误

当然，我们肯定不会使用最基本的功能，需要进行扩展，我们这节在项目的根目录下创建``webpack.config.js``就可以自动被识别(直接执行 ``npx webpack``)

如果想根据不同的环境使用不同的配置文件，可以在``package.json`` 里配置，例如
```
"scripts": {
    "build": "webpack --config prod.config.js"
}
```
## ``Mode``
| ``Option``  | ``Description`` |
| ------------- | ------------- |
| ``development``  | 相当于增加了 ``NamedModulesPlugin``、``NamedChunksPlugin``、以及设置``process.env.NODE_ENV`` 为 ``development``  |
| ``production`` | 相当于增加了 ``UglifyJsPlugin``、``NoEmitOnErrorsPlugin``、``optimize.ModuleConcatenationPlugin`` 以及设置``process.env.NODE_ENV`` 为 ``production`` |
| ``none`` |  |
## ``Entry point``
简单地规则： ``one entry point per HTML page``

定义``Entry point``的几种方式
### 字符串
```
module.exports = {
    entry: './path/to/my/entry/file.js'
};
```
上面的代码相当于下面的简写
```
module.exports = {
    entry: {
        main: './path/to/my/entry/file.js'
    }
};
```
### ``Array<string>``
主要用途是将多个依赖注入分别打包，最后将关系映射到一个文件

### ``对象``
``entry: {[entryChunkName: string]: string|Array<string>}``
```
module.exports = {
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
    }
};
```
## ``context``
配合 ``entry points``和 ``loaders``使用，作为他们的根目录，默认值为当前文件夹所在路径，一般建议在 ``webpack`` 中显示的配置
```
module.exports = {
    //...
    context: path.resolve(__dirname, 'app')
};
```
