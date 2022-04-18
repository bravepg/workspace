# 在内存中写 str（StringIO）
from io import BytesIO, StringIO

f = StringIO()
f.write('Hello')

f.write(' ')

f.write('world')

print(f.getvalue()) # Hello world

# 在内存中读取 str（StringIO）
f = StringIO('Hello!\nHi!\nGoodbye!')
while True:
    s = f.readline()
    if s == '':
        break
    # Hello!
    # Hi!
    # Goodbye!
    print(s.strip())

# 在内存中写 str（BytesIO）
f = BytesIO()
f.write('中文'.encode('utf-8'))
print(f.getvalue()) # b'\xe4\xb8\xad\xe6\x96\x87'

# 在内存中读取 str（BytesIO）
f = BytesIO(b'\xe4\xb8\xad\xe6\x96\x87')
print(f.read()) # b'\xe4\xb8\xad\xe6\x96\x87'
