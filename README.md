# FileShare
### 文件分享站

---

一个使用 Vue + TypeScript + ElementUI 构建的开源文件分享平台

## 功能
1. **账户管理**
    - 登录/注册
2. **文件管理**
    - 上传/下载
3. **离线文件下载**
4. **在线视频转码**

## 特点
1. **跨平台**
    - 可以在任何可以使用网络浏览器的地方使用
2. **轻量化**
    - 除了上传下载以及基本的文件转码功能外，无其他多余功能
3. **速度快**
    - 支持多线程下载、文件分片上传

## 使用方法
### 下载已构建好的 HTML 文件
前往 [Github Release](https://github.com/Dongyifengs/FileShareUI/releases) 或 [Gitea Release](https://wzpmc.cn:3000/wzp/FileShareUI/releases) 下载最新的构建版本。

### 手动构建
#### 环境要求
- Node.js 版本 >= 20
- 任意版本的 pnpm

#### 步骤
1. 下载依赖
   ```bash
   pnpm install
   ```
2. 编译
   ```bash
   pnpm run build
   ```
3. 编译完成后，生成的 HTML 及其 CSS 和 JS 依赖文件将在 dist 文件夹下找到。