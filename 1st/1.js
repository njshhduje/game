// 最大桁数
const maxLength = 4;

// 正解コード
const correctCode = "1215";

// 表示欄
const display = document.getElementById("display");

/* 数字入力 */
function inputValue(val) {
    if (display.value.length < maxLength) {
        display.value += val;
    }
}

/* 削除 */
function deleteValue() {
    display.value = display.value.slice(0, -1);
}

/* Enter処理 */
const message = document.getElementById("message");

function enterValue() {
    if (display.value === correctCode) {
        window.location.href = "success.html";
    } else {
        message.textContent = "Miss"; // ←表示
        display.value = "";

        // 1秒後に消す
        setTimeout(() => {
            message.textContent = "";
        }, 2000);
    }
}

const startScreen = document.getElementById("start-screen");
const mainScreen = document.getElementById("main-screen");

// どこクリックしても開始
startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
    mainScreen.style.display = "block";
});

const fade = document.getElementById("fade");

startScreen.addEventListener("click", () => {

    // ★即真っ黒（ここが最重要）
    fade.style.transition = "none";
    fade.style.opacity = "1";

    // ★次フレームでアニメーションON
    requestAnimationFrame(() => {
        fade.style.transition = "opacity 1s ease";

        setTimeout(() => {
            // ★黒で隠れてる間に切り替え
            startScreen.style.display = "none";
            mainScreen.style.display = "block";

            // ★フェードイン
            fade.style.opacity = "0";

        }, 2000); // ←少しだけ待つ
    });
});

window.addEventListener("load", () => {
    const fade = document.getElementById("fade");

    // 少しだけ待ってからフェード（自然にする）
    setTimeout(() => {
        fade.style.opacity = "0";
    }, 1000);
});