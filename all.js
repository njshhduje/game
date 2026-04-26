// ===== 光システム =====

// DOM読み込み後に実行（load禁止）
document.addEventListener("DOMContentLoaded", () => {

  const viewer = document.querySelector(".hikari-viewer");
  const black = document.querySelector(".hikari-black");
  const img1 = document.querySelector(".hikari-img1");
  const img2 = document.querySelector(".hikari-img2");
  const close = document.querySelector(".hikari-close");
  const lights = document.querySelectorAll(".hikari-light");

  // 初期状態
  if (viewer) viewer.style.display = "none";
  if (black) black.style.opacity = 0;

  // ===== 光 =====
  lights.forEach(light => {

    const x = light.dataset.x || 0;
    const y = light.dataset.y || 0;

    light.style.left = x + "px";
    light.style.top = y + "px";

    light.addEventListener("click", () => {

      const src1 = light.dataset.img1;
      const src2 = light.dataset.img2;

      if (!src1 || !viewer) return;

      // 表示
      viewer.style.display = "flex";

      // 黒背景
      black.style.opacity = 1;

      // 初期化
      img1.style.opacity = 0;
      img2.style.opacity = 0;

      img1.src = src1;
      img2.src = src2 || "";

      // フェード表示
      setTimeout(() => {
        img1.style.opacity = 1;
        img1.style.transform = "scale(1)";

        if (src2) {
          img2.style.opacity = 1;
          img2.style.transform = "scale(1)";
        }
      }, 200);
    });
  });

  // ===== 閉じる =====
  if (close) {
    close.addEventListener("click", () => {

      img1.style.opacity = 0;
      img2.style.opacity = 0;

      setTimeout(() => {
        viewer.style.display = "none";
        black.style.opacity = 0;
      }, 400);
    });
  }

});