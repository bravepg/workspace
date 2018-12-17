# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-23 14:34:24
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-23 14:51:16

# 偏函数
print(int('12345'))
print(int('12345', base=8))

# 每次利用base会显得非常麻烦，我们可以包装一个函数
def int2(x, base=2):
    return int(x, base)
print(int2('10000000'))

# 利用偏函数
import functools
int2 = functools.partial(int, base=2)
print(int2('10000000'))
