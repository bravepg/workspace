# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 11:19:56
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 11:29:24

# HTMLParser
from HTMLParser import HTMLParser
from htmlentitydefs import name2codepoint

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print('<%s>' % tag)

    def handle_endtag(self, tag):
        print('<%s>' % tag)

    def handle_startendtag(self, tag, attrs):
        print('<%s>' % tag)

    def handle_tag(self, data):
        print('data')

    def handle_comment(self, data):
        print('<!-- -->')

    def handle_entityref(self, name):
        print('&%s:' % name)

    def handle_charref(self, name):
        print('&#%s:' % name)

parser = MyHTMLParser()
parser.feed('<html><head></head><body><p>Some <a href=\"#\">html</a>tutorial<br>END</p></body></html>')
