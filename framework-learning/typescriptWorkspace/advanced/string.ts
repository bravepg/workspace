type TEventNames = 'click' | 'scroll' | 2;

function handleEvent(ele: Element, event: TEventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 2);  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'