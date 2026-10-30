# 个人博客与作品集

一个使用 Astro 构建的静态个人站，预设展示研究、项目、实习、荣誉和生活文章。站点目标地址为 **https://liuyouyan.github.io**，GitHub 仓库应为 **https://github.com/liuyouyan/liuyouyan.github.io**。

目前站内的个人资料、项目、奖项与文章均为**演示占位内容**。`src/data/site.ts` 中的 `site.draft` 默认为 `true`；此时 `BaseLayout` 会给页面输出 `noindex, nofollow`，并显示演示提示横幅。**只有全部占位内容替换完成后，才把 `site.draft` 改为 `false`**，这两项演示保护才会移除。

在公开发布前，请替换**全部**占位资料、项目、奖项和文章。邮箱字段目前为空；如果希望网站显示联系邮箱，请填写你愿意公开的专用邮箱。不要只改姓名就关闭草稿模式，以免访客将其余示例误认为真实经历。

## 本地运行

需要 Node.js 和 npm。在项目目录运行：

```powershell
npm install
npm run dev
```

终端会显示本地预览地址，通常是 `http://localhost:4321`。完成修改后运行：

```powershell
npm run check
npm run build
npm run preview
```

`dist/` 是构建产物，无需手动编辑或提交到仓库。

## 替换个人资料

- `src/data/site.ts`：`draft` 发布开关、姓名、简介、联系方式（邮箱初始为空）、教育、实习和获奖。
- `src/content/projects/`：研究和项目案例，每篇 Markdown 对应一个详情页。
- `src/content/posts/`：技术笔记、生活随笔等文章。
- `public/images/`：公开展示的图片；请用自己的图片替换演示插画。
- `src/styles/global.css`：配色、字体、间距等整体视觉样式。

研究或项目详情建议写明：问题背景、自己的职责、方法、可公开的结果、链接与复盘。奖项注明名称、年份和颁发单位。所有示例文案都应换成真实内容后再上线。

## 发布到 GitHub Pages

1. 在 GitHub 账号 `liuyouyan` 下创建**公开**仓库 `liuyouyan.github.io`。
2. 将这个项目的**内容**推送到该仓库根目录的 `main` 分支，并提交 `package-lock.json`。
3. 打开仓库 **Settings → Pages → Build and deployment**，将 **Source** 设为 **GitHub Actions**。
4. `.github/workflows/deploy.yml` 会在每次推送到 `main` 后构建并发布网站。到 **Actions** 页面查看结果，成功后访问 https://liuyouyan.github.io。

首次推送可以在项目目录中执行（若仓库已存在或配置了 remote，先检查当前 Git 状态）：

```powershell
git init
git branch -M main
git remote add origin https://github.com/liuyouyan/liuyouyan.github.io.git
git add .
git commit -m "Create personal site"
git push -u origin main
```

项目使用静态生成，不需要数据库或付费服务器。GitHub Pages 在 GitHub Free 的公开仓库中可用，默认地址无需购买域名。以后如改用独立域名，需要先拥有该域名、配置 DNS，在 `public/CNAME` 中写入域名（不含 `https://`），然后设置 GitHub Pages 的 Custom domain，并将 `astro.config.mjs` 中的 `site` 改为新网址（或设置 `SITE_URL` 环境变量）。

## 公开内容检查

发布前请核对：证书上的学号、证件号等信息已遮挡；实习和科研材料已获准公开；图片中没有未经同意公开的他人肖像或定位信息。联系方式建议使用专用邮箱。

## 参考文档

- [Astro 文档](https://docs.astro.build/en/getting-started/)
- [Astro 的 GitHub Pages 部署指南](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
