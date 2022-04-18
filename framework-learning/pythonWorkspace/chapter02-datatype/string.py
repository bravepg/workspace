str1 = 'Hello World'

print(str1[1:9]) # ello Wo 含左不含右
print(str1[1:]) # ello World
print(str1[-9:-1]) # llo Worl 含左不含右
print(str1[-9:]) # llo World

word = 'word'
sentence = "这是一个句子"
paragraph = """这是一个段落
包含了多个语句"""

print(word, sentence, paragraph)
print("word 的地址是 %s" % sentence)

print(r'''hello,\n
world''')

# unicode 表示的 str 通过 encode 编码为指定的 bytes
print('ABC'.encode('ascii')) # b'ABC'
print(type(u'中文')) # <class 'str'>
print('中文'.encode('utf-8')) # b'\xe4\xb8\xad\xe6\x96\x87'
# print('中文'.encode('ascii')) # 报错，无法编码
# python3 已经不提供字符串的解码功能，默认是 unicode
print(hasattr('s', 'decode')) # False 

# bytes 通过 decode 解码为对应的 str
print(b'ABC'.decode('ascii')) # ABC
print(b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')) # 中文
# 如果 bytes 中只有一小部分无效的字节，可以传入 errors='ignore' 忽略错误的字节
print(b'\xe4\xb8\xad\xe6'.decode('utf-8', errors='ignore')) # 中

# 通过 len 计算包含了多少了字符
print(len('ABC'), len('中文')) # 3 2
# 通过 len 计算包含了多少了字节
print(len(b'ABC'), len('中文'.encode('utf-8'))) # 3 6
