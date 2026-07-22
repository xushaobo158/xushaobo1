(() => {
  if (window.location.pathname !== "/projects/social-app") return;

  window.stop();

  document.open();
  document.write(`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>不夜星球社交项目 | 徐少柏</title>
  <style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    html, body { min-height: 100%; margin: 0; }
    body {
      background: #f6f3ed;
      color: #151413;
      font-family: Arial, "Microsoft YaHei", sans-serif;
    }
    .page { min-height: 100vh; padding: 24px; }
    .nav {
      display: flex;
      align-items: center;
      gap: 32px;
      min-height: 56px;
      padding: 0 28px;
      border: 1px solid #dfd9cf;
      background: rgba(250, 248, 243, .92);
    }
    .brand { margin-right: 16px; color: inherit; font-weight: 800; text-decoration: none; }
    .nav a { color: inherit; font-weight: 700; text-decoration: none; }
    .content {
      display: grid;
      place-items: center;
      min-height: calc(100vh - 104px);
      text-align: center;
    }
    .eyebrow { margin: 0 0 18px; color: #cc5735; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
    h1 { margin: 0; font-size: clamp(44px, 7vw, 98px); line-height: 1; }
    p { max-width: 480px; margin: 24px auto 0; color: #69645d; font-size: 18px; line-height: 1.8; }
    .back { display: inline-flex; margin-top: 34px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: #cc5735; font-weight: 800; text-decoration: none; }
    @media (max-width: 700px) {
      .page { padding: 14px; }
      .nav { flex-wrap: wrap; gap: 18px 26px; min-height: auto; padding: 18px 20px; }
      .brand { width: 100%; margin: 0; }
      .content { min-height: calc(100vh - 160px); padding: 56px 18px; }
      p { font-size: 16px; }
    }
  </style>
</head>
<body>
  <div class="page">
    <nav class="nav" aria-label="主导航">
      <a class="brand" href="/">Xushaobo</a>
      <a href="/">首页</a>
      <a href="/#resume-preview">简历</a>
      <a href="/#work">作品</a>
      <a href="/#contact">联系</a>
    </nav>
    <main class="content">
      <div>
        <p class="eyebrow">SOCIAL APP / PROJECT UPDATE</p>
        <h1>项目正在整理中</h1>
        <p>这一项目将替换为全新的案例图片与内容，正在重新编排，稍后更新。</p>
        <a class="back" href="/#work">返回作品列表</a>
      </div>
    </main>
  </div>
</body>
</html>`);
  document.close();
})();
