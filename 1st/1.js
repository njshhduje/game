

// ===== 数字システム =====
const maxLength = 4;
const correctCode = "1215";

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
    if (display.value === correctCode) {
        window.location.href = "../2nd/2.html";
    } else {
        message.textContent = "Miss";
        display.value = "";

        setTimeout(() => {
            message.textContent = "";
        }, 2000);
    }
}


// ===== フェードシステム =====
// ===== 要素取得 =====
const startScreen = document.getElementById("start-screen");
const mainScreen = document.getElementById("main-screen");
const fade = document.getElementById("fade");

// 初期状態
mainScreen.style.display = "none";

// ===== ページ読み込み =====
window.addEventListener("load", () => {

    // 最初は黒
    fade.style.opacity = "1";

    // 少し待ってからフェード表示
    setTimeout(() => {
        fade.style.opacity = "0";
    }, 100);
});


// ===== スタートクリック =====
startScreen.addEventListener("click", () => {



    // ★フェード開始（黒へ）
     fade.style.opacity ="1";

	  requestAnimationFrame(() =>{
    // ★ここが重要：CSSと同じ時間待つ
    setTimeout(() => {

        // 完全に黒になってから切替
        startScreen.style.display = "none";
        mainScreen.style.display = "block";

          requestAnimationFrame(() => {
        // 少し待ってからフェード表示

            fade.style.opacity = "0";
				});


    }, 2500); // ←CSSと必ず一致
  });
});
