import "./codex-social-app-empty.css";

const root = document.querySelector("#root");

document.documentElement.lang = "zh-CN";
document.title = "项目整理中 | Xushaobo";

root.innerHTML = `
  <div class="social-project-empty">
    <header class="social-project-empty__header">
      <a class="social-project-empty__brand" href="/">Xushaobo</a>
      <nav aria-label="主导航">
        <a href="/">首页</a>
        <a href="/#resume-preview">简历</a>
        <a href="/#work">作品</a>
        <a href="/#contact">联系</a>
      </nav>
      <span class="social-project-empty__language">中&nbsp; | &nbsp;EN</span>
    </header>

    <main class="social-project-empty__main">
      <a class="social-project-empty__back" href="/#work">← 返回首页</a>
      <section class="social-project-empty__content">
        <p class="social-project-empty__eyebrow">PROJECT UPDATE</p>
        <h1>项目内容整理中</h1>
        <p>第一个项目的原有内容已全部清空，新版本项目图片将在这里重新更新。</p>
      </section>
    </main>
  </div>
`;
