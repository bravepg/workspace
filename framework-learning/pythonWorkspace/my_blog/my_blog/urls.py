#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2018-01-26 15:53:27
# @Last modified by:   gaopeng
# @Last modified time: 2018-01-29 15:26:30


from django.conf.urls import url
from django.contrib import admin
from article import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^(?P<id>\d+)/$', views.detail, name='detail')
]
