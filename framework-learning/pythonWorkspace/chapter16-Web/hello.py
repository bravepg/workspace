# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 18:41:28
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 18:43:01
def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return '<h1>Hello, Web!</h1>'