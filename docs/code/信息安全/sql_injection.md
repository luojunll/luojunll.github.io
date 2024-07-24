---
title: portswigger sql 注入案例
date: 2024-07-16
category:
  - 代码编程
  - 信息安全
tag:
  - 信息安全
sticky: true
star: true
order: -1
---

# portswigger sql 注入案例

## 实验准备
1. 案例地址：  https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses
<br>
2.sql 注入工具：burpsquite

## 实验中遇到的坑
1. 光标不齐
需要改变一下字体大小， 在设置里搜索font。
<br>
2. 添加变量的时候需要添加$$ , 是两个不是一个。
<br>
3. 在最后的结果里，可以根据成功的标志过滤出正确响应，然后按payload1 排序，出来的就是原顺序的密码了。