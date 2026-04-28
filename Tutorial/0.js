// ===== 固定文字 =====
const fixedText = "田中　";
let userInput = "";

// ===== ページ遷移 =====
const routes = {
  "ゆい": "../1st/1.html",
  "しずく": "../Happy/Happy.html",
  "てすと": "test.html"
};

// ===== ひらがな配置 =====
const hiragana = [
  "わ","ら","や","ま","は","な","た","さ","か","あ",
  "","り","","み","ひ","に","ち","し","き","い",
  "を","る","ゆ","む","ふ","ぬ","つ","す","く","う",
  "","れ","","め","へ","ね","て","せ","け","え",
  "ん","ろ","よ","も","ほ","の","と","そ","こ","お",
];

// ===== 要素取得 =====
const keyboard = document.getElementById("keyboard");
const textBox = document.getElementById("textBox");
const deleteBtn = document.getElementById("deleteBtn");
const enterBtn = document.getElementById("enterBtn");

// ===== 表示更新 =====
function updateDisplay() {
  textBox.value = fixedText + userInput;
}
updateDisplay();

// ===== フェードイン（ページ表示時）=====
window.addEventListener("load", () => {
  document.body.style.opacity = 0;

  setTimeout(() => {
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = 1;
  }, 50);
});

// ===== ボタン生成 =====
hiragana.forEach(char => {
  const btn = document.createElement("button");
  btn.classList.add("key");

  if (char !== "") {
    btn.textContent = char;

    btn.addEventListener("click", () => {
      userInput += char;
      updateDisplay();
    });
  } else {
    btn.style.visibility = "hidden";
  }

  keyboard.appendChild(btn);
});

// ===== 削除 =====
deleteBtn.addEventListener("click", () => {
  userInput = userInput.slice(0, -1);
  updateDisplay();
});

// ===== 決定（透明フェード遷移）=====
enterBtn.addEventListener("click", () => {
  const text = userInput.trim().normalize("NFC");

  if (routes[text]) {

    // フェードアウト開始
    document.body.style.transition = "opacity 5s ease";
    document.body.style.opacity = 0;

    // 完全に終わったら遷移
    document.body.addEventListener("transitionend", function handler() {
      window.location.href = routes[text];

      // 1回だけ実行
      document.body.removeEventListener("transitionend", handler);
    });

  } else {
    alert("一致しない: " + text);
  }
});

// ===== スタート画面 =====
// ===== スタート画面（これだけ残す）=====
const startScreen = document.getElementById("startScreen");
const startFade = document.getElementById("startFade");
const ui = document.querySelector(".ui");

startScreen.addEventListener("click", () => {
  startFade.style.opacity = 1;

  setTimeout(() => {
    startScreen.style.display = "none";
    ui.classList.add("show");
    startFade.style.opacity = 0;
  }, 800);
});
// ===== 光 =====
const light = document.getElementById("light");
const viewer = document.getElementById("viewer");
const overlay = document.querySelector(".overlay");
const viewImage1 = document.getElementById("viewImage1");
const viewImage2 = document.getElementById("viewImage2");
const closeBtn = document.getElementById("closeBtn");

// 開く（←全部中に入れる）
light.addEventListener("click", () => {
  viewer.style.display = "flex";
  viewer.classList.add("active");

  overlay.style.opacity = 1;

  setTimeout(() => {
    viewImage1.style.opacity = 1;
    viewImage1.style.transform = "scale(1)";

    viewImage2.style.opacity = 1;
    viewImage2.style.transform = "scale(1)";
  }, 300);
});

// 閉じる
closeBtn.addEventListener("click", () => {
  viewImage1.style.opacity = 0;
  viewImage2.style.opacity = 0;

  viewImage1.style.transform = "scale(0.9)";
  viewImage2.style.transform = "scale(0.9)";

  overlay.style.opacity = 0;

  setTimeout(() => {
    viewer.style.display = "none";
    viewer.classList.remove("active");
  }, 600);
});

// ランダムでゆっくり点滅
// ゆっくり＆ランダム点滅
function randomBlink() {
  const duration = 4 + Math.random() * 6; // 4〜10秒
  light.style.animation = `lightPulse ${duration}s ease-in-out infinite`;

  setTimeout(randomBlink, duration * 1000);
}

randomBlink();





