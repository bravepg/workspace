# dict 通过 key-value 形式存储，一个 key 只能对应一个 value，如果多次对一个 key 放入 value ，后面的值会把前面的覆盖掉
d = {}
d['Adam'] = 67
print(d['Adam']) # 67

# 如果 key 不存在，dict 会报错
# 要避免 key 不存在的错误，一是通过 in 判断 key 是否存在，二是通过 dict 提供的 get 方法，若不存在，可以返回 None，或者自己指定的 value
print('Thomas' in d) # False
d.get('Thomas', -1) # -1
print(d.get('Thomas', -1))
