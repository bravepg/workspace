# 以读文件的模式打开一个文件对象
# try:
#     f = open('./test.txt', 'r')
#     print f.read()
# finally:
#     if f:
#         f.close()

# 更简单的写法
# 返回具有 read 方法的对象
# 这个对象统称为 file like object
# 字节流、网络流都可以是 file like object
with open('./test.txt', 'r') as f:
    print(f.read())

# 读取二进制文件
# with open('./yuner.jpg', 'rb') as f:
#     print f.read()

# f = open('./test2.txt', 'rb')
# u = f.read().decode('utf8')
# print u
# 更简单的写法
import codecs
with codecs.open('./test2.txt', 'r', 'utf8') as f:
    print(f.read())
