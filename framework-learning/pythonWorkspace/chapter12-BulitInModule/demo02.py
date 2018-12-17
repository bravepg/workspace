# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-08 16:50:25
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 10:44:09

# base64
import base64
print base64.b64encode('binary\x00string')  # YmluYXJ5AHN0cmluZw==
print base64.b64encode(r'binary\x00string') # YmluYXJ5XHgwMHN0cmluZw==

print base64.b64decode('YmluYXJ5AHN0cmluZw==') # binary string
print base64.b64decode('YmluYXJ5XHgwMHN0cmluZw==') # binary\x00string

# 由于url参数中不能出现字符+和/
# url safe
print base64.b64encode('i\xb7\x1d\xfb\xef\xff') # abcd++//
print base64.urlsafe_b64encode('i\xb7\x1d\xfb\xef\xff') # abcd--__
print base64.urlsafe_b64decode('abcd--__') # i?
