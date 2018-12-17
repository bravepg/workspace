# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-23 15:35:06
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-23 15:41:04

# 使用__future__ 测试3.X版本的新功能
from __future__ import unicode_literals

print '\'xxx\' is unicode?', isinstance('xxx', unicode)
print 'u\'xxx\' is unicode?', isinstance(u'xxx', unicode)
print '\'xxx\' is str?', isinstance('xxx', str)
print 'b\'xxx\' is str?', isinstance(b'xxx', str)