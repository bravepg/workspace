# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 10:51:04
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 10:52:53

# md5
import hashlib
md5 = hashlib.md5()
md5.update('how to use md5 in')
md5.update('python hashlib?')
print md5.hexdigest() # 047b2e59ed7530a32db954459f82266b

