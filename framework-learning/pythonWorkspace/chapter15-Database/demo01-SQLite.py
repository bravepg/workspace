# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 16:37:31
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 16:49:07
conn = sqlite3.connect('test.db')
cursor = conn.cursor()
# 执行查询语句:
cursor.execute('select * from user where id=?', ('1',))
# <sqlite3.Cursor object at 0x10f8aa340>
# 获得查询结果集:
values = cursor.fetchall()
# values
# [(u'1', u'Michael')]
cursor.close()
conn.close()