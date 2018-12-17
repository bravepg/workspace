# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-16 15:22:19
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-16 15:40:14

# if判断语句
age = 3
if age >= 18:
    print 'adult'
elif age >= 6:
    print 'teenager'
else:
    print 'kid'

# 循环（一共两种）
# 第一种，通过for...in依次把list或者tuple中的每个元素迭代出来
names = ['Michael', 'Bob']
for name in names:
    print name

# 通过一个range()函数可以生成一个整数序列
sum = 0;
for x in range(101):
    sum = sum + x
print sum

# 第二种，通过while循环


# raw_input读取的内容永远以字符串的形式返回，把字符串和整数比较就不会得到期待的结果，必须先用int()把字符串转换为我们想要的整型
# birth = raw_input('birth: ')
# if(birth < 2000):
#     print '00前'
# else:
#     print '00后'

# 上面的写法不会得到想要的结果
birth = int(raw_input('birth: '))
if(birth < 2000):
    print '00前'
else:
    print '00后'

