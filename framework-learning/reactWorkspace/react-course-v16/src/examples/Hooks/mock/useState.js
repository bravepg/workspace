const myReact = (function() {
  let hooks = [],
    currentHook = 0;
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      currentHook = 0 
      return Comp;
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue;
      // 由于 currentHook 在每次 render 之后都会重置为 0
      // 因此使用 setStateHookIndex 保持住 setState 中使用的 index
      const setStateHookIndex = currentHook;
      console.log('currentHook', setStateHookIndex, currentHook);
      function setState(newState) {
        console.log('currentHook', setStateHookIndex, currentHook, newState);
        // hooks[currentHook] = newState;
        hooks[setStateHookIndex] = newState;
      }
      return [hooks[currentHook++], setState];
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const effect = hooks[currentHook] = hooks[currentHook] || {};
      const deps = effect.deps || [];
      const umount = effect.umount;
      if (umount) {
        umount();
      }
      const hasChangedDeps  = deps ? !depArray.every((el, i) => el === deps[i]) : true;
      if (hasNoDeps || hasChangedDeps) {
        const umount = callback();
        if (umount) {
          effect.umount = umount;
        }
        effect.deps = depArray;
      }
      currentHook++;
    },
  }
})();

module.exports = myReact;