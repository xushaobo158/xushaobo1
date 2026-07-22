import "./social-app-empty.css";

const isSocialAppProject = /^\/projects\/social-app\/?$/.test(
  window.location.pathname,
);

const root = document.getElementById("root");

if (isSocialAppProject && root) {
  document.title = "项目内容整理中 | Xushaobo";
  root.innerHTML = `
    <div class="social-empty-page">
      <header class="social-empty-header">
        <a class="social-empty-brand" href="/">Xushaobo</a>
        <nav class="social-empty-nav" aria-label="主导航">
          <a href="/">首页</a>
          <a href="/#resume-preview">简历</a>
          <a href="/#work">作品</a>
          <a href="/#contact">联系</a>
        </nav>
        <div class="social-empty-language" aria-label="语言">
          <strong>中</strong><span>|</span><span>EN</span>
        </div>
      </header>

      <main class="social-empty-main">
        <a class="social-empty-back" href="/#work">← 返回作品</a>
        <section class="social-empty-state" aria-labelledby="social-empty-title">
          <p class="social-empty-eyebrow">PROJECT UPDATE</p>
          <h1 id="social-empty-title">项目内容整理中</h1>
          <p class="social-empty-description">旧项目内容已清空，新版本将在这里更新。</p>
        </section>
      </main>
    </div>
  `;
} else {
  import("./main.jsx");
}
