# 使用 Node.js 20.5.0 的官方镜像
FROM node:20.5.0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件到容器中
COPY . .

# 编译项目
# RUN npm run build

# 设置容器启动命令（可以根据需要修改）
# CMD ["npm", "start"]