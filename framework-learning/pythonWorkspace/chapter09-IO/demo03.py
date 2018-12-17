# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-06 18:58:58
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-06 20:19:54
# 序列化
# cPickle pickle
try:
    import cPickle as pickle
except ImportError:
    import pickle

d = dict(name='Bob', age=20, score=80)
print(pickle.dumps(d))
# "(dp0\nS'age'\np1\nI20\nsS'score'\np2\nI88\nsS'name'\np3\nS'Bob'\np4\ns."

# f = open('dump.txt', 'wb')
# pickle.dump(d, f)
# f.close();
# f = open('./dump.txt', 'rb')
# d = pickle.load(f)
# print d
# f.close()
# {'age': 20, 'score': 80, 'name': 'Bob'}

import json
print(json.dumps(d))
json_str = '{"age": 20, "score": 88, "name": "Bob"}'
print(json.loads(json_str))