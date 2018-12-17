## React书写方式
### 关于 ``setState`` 的调用
在组件卸载后调用 ``setState`` 会产生 ``Warning: Can't call setState (or forceUpdate) on an unmounted component`` 的警告
因此不建议在组建卸载掉时候调用 ``setState``

不要在 ``componentWillUpdate`` 中调用 ``setState``，会一直循环下去导致页面崩溃

### 关于 ``fetch`` 的性能优化
可取消的异步请求