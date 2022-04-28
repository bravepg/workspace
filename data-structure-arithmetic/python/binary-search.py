# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Email:  gaopeng_hdu@163.com
# @Date:   2018-06-11 19:29:21
# @Last Modified by:   gaopeng
# @Last Modified time: 2018-08-16 15:33:06

def binary_search(list, item):
	low = 0
	high = len(list) - 1
	while low <= high:
		mid = (low + high) / 2
		guess = list[mid]
		if guess == item:
			return mid
		if guess > item:
			high = mid - 1   # 关键点
		if guess < item:
			low = mid + 1    # 关键点
	return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3));
