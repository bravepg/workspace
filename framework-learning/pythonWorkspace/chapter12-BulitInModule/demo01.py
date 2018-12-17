# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-08 15:43:04
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-08 16:50:11

# collections

# namedtuple
# namedtuple是一个函数，创建自定义tuple对象
# 规定了tuple元素的个数、而且可以根据某个属性而不是索引引用tuple某个元素
# 保证tuple的不变型、又可以根据索引来引用
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x)
print(p.y)
print(isinstance(p, Point))
print(isinstance(p, tuple))

# deque
# 使用list存储数据，按索引访问数据很快、插入和删除比较慢
# deque是实现高效插入和删除的双向列表、适用于队列和栈
from collections import deque
q = deque(['a', 'b', 'c'])
q.append('x')
q.appendleft('y')
print q             # deque(['y', 'a', 'b', 'c', 'x'])

# defaultdict
# 使用dict，如果引用的key不存在，会抛出KeyError，如果不希望报错，可以用defaultdict
from collections import defaultdict
dd = defaultdict(lambda: 'N/A')
dd['key1'] = 'abc'
print(dd['key1'])
print(dd['key2'])
# abc
# N/A

# OrderedDict
# 保证dict在迭代时的顺序
from collections import OrderedDict
d = dict([('a', 1), ('b', 2), ('c', 3)])
print(d)    # {'a': 1, 'c': 3, 'b': 2}
od = OrderedDict([('a', 1), ('b', 2), ('c', 3)])
print(od)      # OrderedDict([('a', 1), ('b', 2), ('c', 3)])

# 利用它实现一个先进先出的dict
class LastUpdatedOrderedDict(OrderedDict):
    def __init__(self, capacity):
        super(LastUpdatedOrderedDict, self).__init__()
        self._capacity = capacity

    def __setitem__(self, key, value):
        containsKey = 1 if key in self else 0
        if len(self) - containsKey >= self._capacity:
            last = self.popitem(last=False)
            print 'remove:', last
        if containsKey:
            del self[key]
            print 'set:', (key, value)
        else:
            print 'add:', (key, value)

        OrderedDict.__setitem__(self, key, value)

# Counter
# 简单的计数器
from collections import Counter
c = Counter()
for ch in 'programming':
    c[ch] = c[ch] + 1
print(c)   # Counter({'g': 2, 'm': 2, 'r': 2, 'a': 1, 'i': 1, 'o': 1, 'n': 1, 'p': 1})