# ams-app-backend

初始化後端 API 伺服器專案。

## 專案架構

- controllers
    - 資料處理過後，藉由 router 傳給前端 (JOSN)
- models
    - 與資料庫溝通，負責連線資料庫的伺服器
    - 將 connection 打包成 query 於每次撈資料時連線
    - try catch 捕獲錯誤
    - 在此使用 sql 語法直接打撈資料庫
- routes
    - 藉由網址，前端發 req 收 res
- app.js
    - 主程式