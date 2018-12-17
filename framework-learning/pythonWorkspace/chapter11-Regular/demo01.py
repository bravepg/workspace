# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-07 15:14:29
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-08 15:22:44

# 正则表达式
# 贪婪匹配
import re
print(re.match(r'^(\d+)(0*)$', '102300').groups())

# 如果必须让d+采用非贪婪匹配
print(re.match(r'^(\d+?)(0*)$', '102300').groups())
