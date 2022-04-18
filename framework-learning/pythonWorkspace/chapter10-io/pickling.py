# 序列化
import pickle
d = dict(name='Bob', age=20, score=80)
print(pickle.dumps(d))
# b'\x80\x04\x95$\x00\x00\x00\x00\x00\x00\x00}\x94(\x8c\x04name\x94\x8c\x03Bob\x94\x8c\x03age\x94K\x14\x8c\x05score\x94KPu.'

# f = open('dump.txt', 'wb')
# pickle.dump(d, f)
# f.close()
# f = open('./dump.txt', 'rb')
# d = pickle.load(f)
# print(d) # {'name': 'Bob', 'age': 20, 'score': 80}
# f.close()

import json
print(json.dumps(d)) # {"name": "Bob", "age": 20, "score": 80}
json_str = '{"age": 20, "score": 88, "name": "Bob"}'
print(json.loads(json_str)) # {'age': 20, 'score': 88, 'name': 'Bob'}
