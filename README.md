# Nextjs_learn

一個基於 **Next.js 14 App Router 架構** 的全端練習專案，整合 React Query、Server Components、Middleware、API Routes、MongoDB 連線池管理與 Vercel Serverless 部署實作。適合前後端協作、SSR/CSR/SSG 測試與權限控管演練。

---

## 本地開發與執行

### 1️. 安裝專案

```bash
git clone https://github.com/Yunzhe0329/Nextjs_learn.git
cd Nextjs_learn
npm install
npm run prettier # 可以自動整理程式碼的結構
---

### 2️ 建立環境變數 `.env.local`

```env
MONGODB_URI=your-mongodb-uri-here
```
 將MONGODB_URI放進.env檔案後，在 .gitignore加入 .env*，避免直接把資料庫的資訊push 到 repo。

### 3️ 啟動開發伺服器

```bash
 npm run dev
```

前往 `http://localhost:3000` 即可開啟本地端。

---

## 資料夾結構概覽

```
Nextjs_learn/
├── app/                      # App Router 根目錄
│   ├── layout.tsx           # 全域佈局
│   ├── page.tsx             # 首頁
│   └── providers/           # 包裝用 Provider（如 React Query）
├── components/              # 共用元件（如 Post）
├── modules/                 # 分頁模組（如 home）
│   └── home/
│       ├── content.tsx
│       └── post-list.tsx
├── hooks/                   # 自定義 hook（如 useQueryPostList）
├── pages/api/               # API Route（後端邏輯）
├── middleware.ts            # 權限控管與導向邏輯
├── lib/                     # 資料庫連線管理
│   └── mongodb.ts
├── public/                  
└── README.md                
```

---

## 核心功能模組

* `app/layout.tsx`：全域樣式與 Provider 包裝
* `app/providers/my_query_provider.tsx`：初始化 React Query
* `hooks/use-query-post-list.ts`：從 API 抓取貼文清單
* `middleware.ts`：檢查 cookie 是否存在，無則導向 `/en/verify`
* `lib/mongodb.ts`：使用 `global` 快取 MongoDB 連線池，做連線的控管

---

## Vercel 快速部署

1. 登入 Vercel 並綁定 GitHub Repository
2. 設定環境變數 `MONGODB_URI`
3. 自動部署完成

---

