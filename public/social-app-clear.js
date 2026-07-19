(() => {
  if (window.location.pathname.replace(/\/+$/, "") !== "/projects/social-app") {
    return;
  }

  const renderClearedCase = () => {
    const main = document.querySelector("#root main");
    if (!main || main.dataset.socialAppCleared === "true") {
      return false;
    }

    const isSocialCase = main.querySelector(
      "#project-detail, [class*='social-app'], img[src*='social-app']"
    );

    if (!isSocialCase) {
      return false;
    }

    main.dataset.socialAppCleared = "true";
    main.innerHTML = [
      '<section class="cleared-case-page" aria-labelledby="cleared-case-title">',
      '  <div class="cleared-case-panel">',
      '    <a class="cleared-case-back" href="/">← 返回首页</a>',
      '    <p class="cleared-case-eyebrow">Case Study</p>',
      '    <h1 id="cleared-case-title">作品正在整理中</h1>',
      '    <p>该 C 端项目案例正在重新整理，后续会以更完整、轻量的形式更新展示。</p>',
      '  </div>',
      '</section>',
    ].join("");

    return true;
  };

  const observer = new MutationObserver(() => {
    if (renderClearedCase()) {
      observer.disconnect();
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("DOMContentLoaded", renderClearedCase, { once: true });
})();
