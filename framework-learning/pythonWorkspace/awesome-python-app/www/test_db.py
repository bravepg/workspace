#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-11-13 17:30:00
# @Last modified by:   gaopeng
# @Last modified time: 2018-01-22 17:06:11

from models import User, Blog, Comment

from transwarp import db

db.create_engine('root', 'root', 'test')

u = User(name='Test', email='test@example.com', password='1234567890', image='about:blank')

u.insert()

print 'new user id:', u.id

u1 = User.find_first('where email=?', 'test@example.com')
print 'find user\'s name:', u1.name

# u1.delete()
#
# u2 = User.find_first('where email=?', 'test@example.com')
# print 'find user:', u2
