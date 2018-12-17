# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-23 14:51:28
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-23 15:24:21
'a test module'
__author__ = 'gaopeng'

import sys
def test():
    args = sys.argv
    if len(args) == 1:
        print 'Hello World'
    elif len(args) == 2:
        print 'Hello, %s!' %args[1]
    else:
        print 'Too many arguments'

if __name__ == '__main__':
    test()