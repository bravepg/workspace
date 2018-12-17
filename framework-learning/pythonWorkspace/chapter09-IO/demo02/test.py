# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-06 16:16:32
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-06 16:23:54
import os
for y in os.listdir('D:/autonomous-learning/pythonWorkspace/chapter09-IO/demo02'):
    print y
    print os.path.isfile(y)