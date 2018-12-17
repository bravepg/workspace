/**
 * Derived State
 * 使用场景: 根据组件 props 来更新内部状态
 * 
 * 反模式:
 * 1. 根据当前的 props, 使用 Derived State 来进行一些计算
 * 2. 无条件的或者 props 和 state 不匹配时更新 Derived State
 * 
 * 使用方式: getDerivedStateFromProps(props, state)
 * 为什么 props 不是 prevProps 呢
 * 1. 初始化的时候为 null, 避免了空检查
 * 2. 不用保留 prevProps 的状态, 释放内存
 */

