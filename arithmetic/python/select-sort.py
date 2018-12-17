# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Email:  gaopeng_hdu@163.com
# @Date:   2018-08-16 14:17:58
# @Last Modified by:   gaopeng
# @Last Modified time: 2018-08-16 14:47:37

# def findSmallest(arr):
# 	smallest = arr[0]
# 	smallest_index = 0
# 	for i in xrange(1, len(arr)):
# 		if arr[i] < smallest:
# 			smallest = arr[i]
# 			smallest_index = i
# 	return smallest_index

# def seletionSort(arr):
# 	newArr = [];
# 	for i in xrange(len(arr)):
# 		smallest = findSmallest(arr)
# 		newArr.append(arr.pop(smallest))
# 	return newArr

# print seletionSort([5, 3, 6, 2, 10])

# 自己写的选择排序比较耗费性能 但是依旧优秀
def seletionSort(arr):
	for i in xrange(len(arr) - 1):
		for j in xrange(i + 1, len(arr)):
			if arr[i] > arr[j]:
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
	return arr			
print seletionSort([5, 3, 6, 2, 10])
