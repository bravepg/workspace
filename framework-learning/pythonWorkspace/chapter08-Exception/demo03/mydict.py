# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-05 15:59:51
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-05 16:07:36

# 单元测试
class Dict(dict):
    def __init__(self, **kw):
        super(Dict, self).__init__(**kw)
    
    def __getattr__(self, key):
        try:
            return self[key]
        except KeyError, e:
            raise AttributeError(r"'Dict' object has no attribute '%s'" % key)

    def __setattr__(self, key, value):
        self[key] = value

# unittest 单元测试模块
