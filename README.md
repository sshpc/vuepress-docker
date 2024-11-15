# docker vuepress 2.0 构建版

## 介绍

1. 基于node v20.5.0  自动构建编译md环境（就是一个docker版的工具）
2. 采用vuepress build 模式构建 非开发模式（访问需要web服务） 容器用后即停
3. 编译后的html静态文件可直接放在web目录

### 自带 VuePress 插件

* 主题切换（亮|暗）
* 代码区复制
* 顶部全局搜索

>如需添加、修改需自行npm安装,修改

## 快速使用

```sh
git clone https://github.com/sshpc/vuepress-docker.git
```
```sh
cd vuepress-docker
```
```sh
docker-compose up --build
```

## 详细文档

### 环境要求

能装docker的主机 
> 例 Ubuntu 2004+

* git 用于克隆
* docker 自行安装
 
>若安装失败 可用snap  
```sh
apt install snap 
```
```sh
snap install docker
```

### 开始安装

#### 克隆项目
```sh
git clone https://github.com/sshpc/vuepress-docker.git
```

#### 进入项目目录

```sh
cd vuepress-docker
```

#### 配置vuepress

修改自定义md文档 及配置vuepress [查看vuepress文档](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)


#### 构建执行

```sh
docker-compose up --build
```
注意：默认在当前的 ./docs 文件夹映射 即编译后的文件在此 需要修改docker-compose.yml文件

./docs:/app/docs

替换成直接网站根目录 例: /var/www:/app/docs/.vuepress/dist
>注意保留可写权限


### 修改文件后再次编译执行
 
```sh
docker-compose up
```











