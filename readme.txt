#开发
export NODE_ENV='development'
export SW_PROXY_TARGET="http://172.37.66.195:12800"
npm install
npm run serve

#如果默认不是nvm v16.16需要安装
nvm install v16.16
nvm list
nvm use v16.16.0

#当前修改
1. 当搜索tid时,忽略serviceId,不然总是要选择到对应的服务才行，通常有tid不知道经历哪些服务
2. 默认缩进菜单,腾出宽度给链路展示
3. 三行搜索条件变成两行,"清除条件" "搜索" 经常在右侧看不着,放到左边,右上角提供"近一天"的快捷选择

#配置首页
使用 新建仪表盘-->GENERAL-->SERVICE-->增加widget trace 然后设置它为 root