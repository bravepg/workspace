#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2018-01-26 16:40:12
# @Last modified by:   gaopeng
# @Last modified time: 2018-01-29 14:17:32


from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=50, blank=True)
    date_time = models.DateTimeField(auto_now_add=True)
    content=models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta: # 按时间降序排序
        ordering = ['-date_time']
