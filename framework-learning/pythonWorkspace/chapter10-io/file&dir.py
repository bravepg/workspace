# 查看当前目录的绝对路径
import os
print(os.path.abspath('.')) # /Users/gaopeng/PersonalSpace/workspace/framework-learning/pythonWorkspace/chapter10-io

# 在某个目录下创建新目录
# 首先把新目录的完整路径表示出来
absolte_path = os.path.abspath('.')
# 然后创建一个目录
os.mkdir(os.path.join(absolte_path, 'testdir'))
# 删掉一个目录
os.rmdir(os.path.join(absolte_path, 'testdir'))

# 对文件重命名
# os.rename('test02.txt', 'test2.txt')
# 删除文件
# os.remove('test3.txt')

# 过滤文件
print([x for x in os.listdir('.') if not os.path.isdir(x)])


L = []
def search(s):
    for x in os.listdir(s):
        if(os.path.isdir(x)):
            search(os.path.join(s, x))
        if(os.path.isfile(os.path.join(s, x)) and os.path.splitext(x)[1] == '.py'):
            L.append(x)
search(os.path.abspath('.'))
print(L)
