define(function() {
  console.log('dataService load')
  const msg = 'baidu'
  function getMsg() {
    return msg.toUpperCase()
  }
  return {
    getMsg
  }
});