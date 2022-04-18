# 循环（一共两种）
# 第一种，通过 for...in 依次把 list 或者 tuple 中的每个元素迭代出来
names = ['Michael', 'Bob']
for name in names:
    print(name)

# 通过一个 range() 函数可以生成一个整数序列
print(range(2), list(range(2))) # range(0, 2) [0, 1]
sum = 0;
for x in range(101):
    sum = sum + x
print(sum)
