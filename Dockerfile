# 使用官方 Node.js 作為 base image
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 lock file（加快安裝速度）
COPY package.json pnpm-lock.yaml* ./

# 安裝 pnpm（你也可以換成 yarn 或 npm）
RUN npm install -g pnpm && pnpm install

# 複製專案檔案（除了 Dockerignore 裡排除的）
COPY . .

# 設定環境變數（production 模式）
ENV NODE_ENV=production

# build Next.js 專案
RUN pnpm build

# 使用 Next.js 的內建伺服器啟動
EXPOSE 3001
CMD ["pnpm", "start"]
