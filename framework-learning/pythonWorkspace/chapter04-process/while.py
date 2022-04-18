# 第二种，通过 while 循环
# input 读取的内容永远以字符串的形式返回，把字符串和整数比较就不会得到期待的结果，必须先用 int() 把字符串转换为我们想要的整型
# birth = input('birth: ')
# if birth < 2000:
#     print '00前'
# else:
#     print '00后'

# 上面的写法不会得到想要的结果
birth = int(input('birth: '))
if birth < 2000:
    print('00前')
else:
    print('00后')
