// ===============================
// 数字分岐ルート設定
// ===============================
const routes = {
    "82000": "../4th/4.html",
    "123": "route1.html",
    "999": "badend.html"
};

// ===============================
// 数字入力システム
// ===============================
const maxLength = 5;

const display = document.getElementById("display");
const message = document.getElementById("message");

function inputValue(val) {
    if (display.value.length < maxLength) {
        display.value += val;
    }
}

function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function enterValue() {
    const code = display.value;

    // 画面リセット
    display.value = "";
    message.textContent = "";

    // ===== 分岐処理 =====
    if (routes[code]) {
        // 正しいコード → 指定ページへ
        window.location.href = routes[code];

    } else {
        // ハズレ
        message.textContent = "Miss";

        setTimeout(() => {
            message.textContent = "";
        }, 2000);
    }
}

// ===============================
// フェードシステム
// ===============================
const startScreen = document.getElementById("start-screen");
const mainScreen = document.getElementById("main-screen");
const fade = document.getElementById("fade");

// 初期状態
mainScreen.style.display = "none";

// ===============================
// ページロード時フェードイン
// ===============================
window.addEventListener("load", () => {
    fade.style.opacity = "1";

    setTimeout(() => {
        fade.style.opacity = "0";
    }, 100);
});

// ===============================
// スタート画面クリック
// ===============================
startScreen.addEventListener("click", () => {

    fade.style.opacity = "1";

    requestAnimationFrame(() => {
        setTimeout(() => {

            startScreen.style.display = "none";
            mainScreen.style.display = "block";

            requestAnimationFrame(() => {
                fade.style.opacity = "0";
            });

        }, 2500); // CSSと同期
    });
});