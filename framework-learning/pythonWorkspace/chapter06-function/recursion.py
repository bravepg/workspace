# 递归函数
def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)

print(fact(5))



# 使用递归要注意防止栈的溢出
# print(fact(1000))  造成栈溢出

# 解决递归调用栈溢出的方法是尾递归优化
def fact02(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)

print(fact02(10))
