着重分析一下``output.libraryTarget``

| ``Option``  | ``Description`` |
| ------------- | ------------- |
| ``var``  | 默认值 ``var MyLibrary = _entry_return_;``  |
| ``this`` | ``this['MyLibrary'] = _entry_return_;`` |
| ``window`` | ``window['MyLibrary'] = _entry_return_;`` |
| ``global`` | ``global['MyLibrary'] = _entry_return_;`` |
| ``commonjs`` | ``exports['MyLibrary'] = _entry_return_;`` |
| ``commonjs2`` | ``module.exports = _entry_return_;`` 由于会隐藏名字, 不建议使用 |
| ``amd`` | `` 只支持 amd，需要提前引入 requerejs 不建议使用 `` |
| ``umd`` | ``module.exports = _entry_return_;`` |