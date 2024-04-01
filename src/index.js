(function () {
  let unit = 100,
    canvas,
    info = { seconds: 0, t: 0 }, // 初期値を設定
    colors;

  function init() {
    colors = ["#ffffff", "#7BADEF"];

    canvas = document.querySelector("#waveCanvas");
    if (!canvas) return; // canvasがなければ初期化を中断

    canvas.width = document.documentElement.clientWidth;
    canvas.height = 160;
    canvas.contextCache = canvas.getContext("2d");

    startAnimation();
  }

  function startAnimation() {
    if (info.animationFrameId) {
      cancelAnimationFrame(info.animationFrameId); // 前のアニメーションフレームをキャンセル
    }
    update();
  }

  function update() {
    draw();

    // 波の速度を調整
    info.seconds += 0.007; // ここで波の速度を調整（値を小さくすると速度が遅くなる）
    info.t = -info.seconds * Math.PI;
    info.animationFrameId = requestAnimationFrame(update);
  }

  function draw() {
    let context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 0.5;
    drawWave(colors[0], 3, 0);

    context.globalAlpha = 1;
    drawWave(colors[1], 2, 150);
  }

  function drawWave(color, zoom, delay) {
    let context = canvas.contextCache;
    context.fillStyle = color;

    context.beginPath();
    drawSine(info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath();
    context.fill();
  }

  function drawSine(t, zoom, delay) {
    let xAxis = Math.floor(canvas.height / 2);
    let context = canvas.contextCache;

    for (let i = 0; i <= canvas.width + 10; i += 10) {
      let x = t + (-0 + i) / unit / zoom;
      let y = Math.sin(x - delay) / 3;

      // 右側を高く、左側をより低くするための調整を強化
      let positionFactor = i / canvas.width;
      // 左側をさらに低くするために、影響を強化する
      let heightAdjustmentFactor = Math.pow(positionFactor, 1); // 右側が高くなる効果を強化
      let yOffsetAdjustment =
        (Math.pow(1 - positionFactor, 1) * canvas.height) / 2; // 左側をより低くする

      context.lineTo(
        i,
        unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment
      );
    }
  }

  window.addEventListener("resize", init);

  init();
})();

(function () {
  let unit = 100,
    canvas,
    info = { seconds: 0, t: 0 }, // 初期値を設定
    colors;

  function init() {
    colors = ["#FFFFFF80", "#FAF7D5"]; // 色を変更します（例: "#ADD8E6"はlight blue、"#6495ED"はcornflower blue）

    canvas = document.getElementById("waveCanvas2"); // IDを"waveCanvas2"に変更
    if (!canvas) return; // canvasがなければ初期化を中断

    canvas.width = document.documentElement.clientWidth;
    canvas.height = 160; // 高さを設定
    canvas.contextCache = canvas.getContext("2d"); // コンテキストをキャッシュ

    startAnimation();
  }

  function startAnimation() {
    if (info.animationFrameId) {
      cancelAnimationFrame(info.animationFrameId); // 前のアニメーションフレームをキャンセル
    }
    update();
  }

  function update() {
    draw();

    // 波の速度を調整
    info.seconds += 0.007; // ここで波の速度を調整（値を小さくすると速度が遅くなる）
    info.t = -info.seconds * Math.PI;
    info.animationFrameId = requestAnimationFrame(update);
  }

  function draw() {
    let context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 0.5;
    drawWave(colors[0], 3, 0); // 第1の波を描画

    context.globalAlpha = 1;
    drawWave(colors[1], 2, 150); // 第2の波を描画
  }

  function drawWave(color, zoom, delay) {
    let context = canvas.contextCache;
    context.fillStyle = color;

    context.beginPath();
    drawSine(info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath();
    context.fill();
  }

  function drawSine(t, zoom, delay) {
    let xAxis = Math.floor(canvas.height / 2);
    let context = canvas.contextCache;

    for (let i = 0; i <= canvas.width + 10; i += 10) {
      let x = t + (-0 + i) / unit / zoom;
      let y = Math.sin(x - delay) / 3;

      // 右側を高く、左側をより低くするための調整を強化
      let positionFactor = i / canvas.width;
      // 左側をさらに低くするために、影響を強化する
      let heightAdjustmentFactor = Math.pow(positionFactor, 1); // 右側が高くなる効果を強化
      let yOffsetAdjustment =
        (Math.pow(1 - positionFactor, 1) * canvas.height) / 2; // 左側をより低くする

      context.lineTo(
        i,
        unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment
      );
    }
  }

  window.addEventListener("resize", init);

  init();
})();

(function () {
  let unit = 100,
    canvas,
    info = { seconds: 0, t: 0 }, // 初期値を設定
    colors;

  function init() {
    colors = ["#FFFFFF80", "#D2E6FF"];

    canvas = document.getElementById("waveCanvas3"); // IDを"waveCanvas3"に変更
    if (!canvas) return; // canvasがなければ初期化を中断

    canvas.width = document.documentElement.clientWidth;
    canvas.height = 160;
    canvas.contextCache = canvas.getContext("2d");

    startAnimation();
  }

  function startAnimation() {
    if (info.animationFrameId) {
      cancelAnimationFrame(info.animationFrameId); // 前のアニメーションフレームをキャンセル
    }
    update();
  }

  function update() {
    draw();

    // 波の速度を調整
    info.seconds += 0.007; // ここで波の速度を調整（値を小さくすると速度が遅くなる）
    info.t = -info.seconds * Math.PI;
    info.animationFrameId = requestAnimationFrame(update);
  }

  function draw() {
    let context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 0.5;
    drawWave(colors[0], 3, 0);

    context.globalAlpha = 1;
    drawWave(colors[1], 2, 150);
  }

  function drawWave(color, zoom, delay) {
    let context = canvas.contextCache;
    context.fillStyle = color;

    context.beginPath();
    drawSine(info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath();
    context.fill();
  }

  function drawSine(t, zoom, delay) {
    let xAxis = Math.floor(canvas.height / 2);
    let context = canvas.contextCache;

    for (let i = 0; i <= canvas.width + 10; i += 10) {
      let x = t + (-0 + i) / unit / zoom;
      let y = Math.sin(x - delay) / 3;

      // 右側を高く、左側をより低くするための調整を強化
      let positionFactor = i / canvas.width;
      // 左側をさらに低くするために、影響を強化する
      let heightAdjustmentFactor = Math.pow(positionFactor, 1); // 右側が高くなる効果を強化
      let yOffsetAdjustment =
        (Math.pow(1 - positionFactor, 1) * canvas.height) / 2; // 左側をより低くする

      context.lineTo(
        i,
        unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment
      );
    }
  }
  window.addEventListener("resize", init);

  init();
})();

// videoの場合
const modal = document.querySelector(".bl_videoModal");

if (modal) {
  // モーダルを開くボタンを取得
  const btn = document.querySelector(".bl_videoBlock_link");

  // モーダルを閉じる<span>要素を取得
  const span = document.querySelector(".bl_videoModal_closeBtn");

  // ビデオ要素を取得
  const video = modal.querySelector("video");

  if (btn && span && video) {
    // ボタンをクリックするとモーダルを表示し、ビデオを再生
    btn.addEventListener("click", (event) => {
      event.preventDefault(); // デフォルトの動作（リンクの遷移など）をキャンセル
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add("is_show"); // 少し遅らせて.showクラスを追加
        video.play(); // ビデオを再生
      }, 10); // DOMが更新されるのを待つために微小な遅延を設ける
    });

    // <span> (x) またはモーダルの外側をクリックするとモーダルを閉じ、ビデオを停止
    const closeModal = () => {
      modal.classList.remove("is_show"); // .showクラスを削除してフェードアウト
      setTimeout(() => {
        modal.style.display = "none"; // 完全に非表示にする
        video.pause(); // ビデオの再生を停止
        video.currentTime = 0; // ビデオを最初から再開するために時間をリセット
      }, 500); // アニメーションの時間に合わせて遅延を設ける
    };

    span.onclick = closeModal;

    window.onclick = (event) => {
      if (event.target == modal) {
        closeModal();
      }
    };
  } else {
    console.error("Some elements are missing");
  }
} else {
  // console.error("Modal element is missing");
}

// グローバルナビ
document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューボタンにイベントリスナーを設定
  document.querySelectorAll(".el_hamburger").forEach(function (button) {
    button.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);
      this.classList.toggle("active");

      // 関連するドロワーメニューの取得とトグル
      const drawer = document.getElementById(
        this.getAttribute("aria-controls")
      );
      if (drawer) {
        drawer.classList.toggle("active");
      }
    });
  });

  // 全てのナビゲーションリンクにイベントリスナーを追加
  document.querySelectorAll(".bl_globalNavi_link a").forEach(function (link) {
    link.addEventListener("click", function () {
      // 全てのドロワーメニューとハンバーガーメニューボタンを処理
      document.querySelectorAll(".el_hamburger").forEach(function (button) {
        const controls = button.getAttribute("aria-controls");
        const drawer = document.getElementById(controls);
        if (drawer && drawer.classList.contains("active")) {
          drawer.classList.remove("active");
          button.setAttribute("aria-expanded", "false");
          button.classList.remove("active");
        }
      });
    });
  });
});

// 波の非表示
// ここでは、ボタンのクリックにより波形SVGの表示状態を制御します。
document.querySelector(".el_hamburger").addEventListener("click", function () {
  // .bl_globalNavi_wave1 と .bl_globalNavi_wave2 を取得
  const wave1 = document.querySelector(".bl_globalNavi_wave1");
  const wave2 = document.querySelector(".bl_globalNavi_wave2");

  // 各要素にactiveクラスをトグル
  wave1.classList.toggle("active");
  wave2.classList.toggle("active");
});

// pop
// ホバー対象の要素を取得
document.addEventListener("DOMContentLoaded", (event) => {
  // ホバー対象の要素をすべて取得
  const appleLinkWrappers = document.querySelectorAll(".el_appleLink_wrapper");

  appleLinkWrappers.forEach((wrapper) => {
    const appLinkPop = wrapper.querySelector(".el_appLink_pop"); // 各wrapperに対する.pop要素を取得

    if (appLinkPop) {
      // ホバー時のイベントリスナーを追加
      wrapper.addEventListener("mouseenter", function () {
        // ホバー時に.pop要素に.activeクラスを追加
        appLinkPop.classList.add("active");
      });

      // ホバーが解除された時のイベントリスナーを追加
      wrapper.addEventListener("mouseleave", function () {
        // ホバー解除時に.pop要素から.activeクラスを削除
        appLinkPop.classList.remove("active");
      });
    }
  });
});

// タッチしたとき
document.addEventListener("DOMContentLoaded", (event) => {
  const appleLinkWrappers = document.querySelectorAll(".el_appleLink_wrapper");

  appleLinkWrappers.forEach((wrapper) => {
    // .el_appLink_pop を探す
    const appLinkPop = wrapper.querySelector(".el_appLink_pop");

    if (appLinkPop) {
      // タップ（touchend）時のイベントリスナーを追加
      wrapper.addEventListener("touchend", function (e) {
        // デフォルトのイベントを防止（リンクなどのデフォルト動作をキャンセルするため）
        e.preventDefault();

        // 他のポップが開いていたら閉じる
        document
          .querySelectorAll(".el_appLink_pop.active")
          .forEach((activePop) => {
            if (activePop !== appLinkPop) {
              activePop.classList.remove("active");
            }
          });

        // タップされた要素の.popに対して.activeクラスをトグル
        appLinkPop.classList.toggle("active");

        // イベントの伝播を停止（ドキュメントの他の部分でタッチイベントが捕捉されるのを防ぐ）
        e.stopPropagation();
      });

      // ドキュメント全体に対するタッチイベントをリスンし、
      // タッチされた要素が .el_appLink_pop の外だった場合、active クラスを除去
      // この部分は、wrapper の外でタップされた場合の挙動を制御するために追加します
      document.addEventListener("touchend", function (e) {
        if (
          !appLinkPop.contains(e.target) &&
          appLinkPop.classList.contains("active")
        ) {
          appLinkPop.classList.remove("active");
        }
      });
    }
  });
});

// ドラッグ操作の追加
let isDown = false; // マウスがクリックされているか追跡
let startY; // ドラッグ開始のY座標
let scrollTop; // ドラッグ開始時のスクロール位置

const end = () => {
  isDown = false;
  document.body.style.cursor = ""; // マウスカーソルのスタイルを元に戻す
};

document.body.addEventListener("mousedown", (e) => {
  isDown = true;
  startY = e.pageY - document.body.offsetTop;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.cursor = "grabbing"; // ドラッグ中のマウスカーソルのスタイル
});

document.body.addEventListener("mouseleave", end);
document.body.addEventListener("mouseup", end);

document.body.addEventListener("mousemove", (e) => {
  if (!isDown) return; // マウスがクリックされていなければ何もしない
  e.preventDefault(); // デフォルトのイベントをキャンセル
  const y = e.pageY - document.body.offsetTop;
  const walk = (y - startY) * 1; // ドラッグの距離 * スクロール速度
  window.scrollTo(0, scrollTop - walk);
});

// anime js
// if (document.querySelector(".bl_bubble")) {
//   anime({
//     targets: ".bl_bubble",
//     keyframes: [
//       { scaleX: 1.05, scaleY: 0.95, translateX: -10, translateY: -10, duration: 2000 },
//       { scaleX: 0.95, scaleY: 1.05, translateX: 10, translateY: 10, duration: 2000 },
//       { scaleX: 1.1, scaleY: 0.9, translateX: -20, translateY: -20, duration: 2000 },
//       { scaleX: 0.9, scaleY: 1.1, translateX: 20, translateY: 20, duration: 2000 },
//       { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, duration: 2000 },
//       // 追加する不規則な動き
//       { scaleX: 1.03, scaleY: 0.97, translateX: 15, translateY: -15, duration: 2000 },
//       { scaleX: 0.97, scaleY: 1.03, translateX: -15, translateY: 15, duration: 2000 },
//       { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, duration: 2000 },
//     ],
//     loop: true,
//     easing: "easeInOutSine",
//     duration: 10000,
//   });
// }

// anime({
//   targets: ".bl_bubble img",
//   easing: "ease-in-out",
//   keyframes: [
//     { translateX: -10, translateY: -10, duration: 2000 },
//     { translateX: 10, translateY: 10, duration: 2000 },
//     { translateX: -20, translateY: -20, duration: 2000 },
//     { translateX: 20, translateY: 20, duration: 2000 },
//     { translateX: 0, translateY: 0, duration: 2000 },
//     { translateX: 15, translateY: -15, duration: 2000 },
//     { translateX: -15, translateY: 15, duration: 2000 },
//     { translateX: 0, translateY: 0, duration: 2000 },
//   ],
//   loop: true,
//   easing: "easeInOutSine",
//   duration: 10000,
// });

anime({
  targets: ".bl_bubble img",
  easing: "easeInOutSine", // アニメーションの滑らかさを向上させるイージング関数
  keyframes: [
    { translateX: -10, translateY: -10 },
    { translateX: 10, translateY: 10 },
    { translateX: -20, translateY: -20 },
    { translateX: 20, translateY: 20 },
    { translateX: 0, translateY: 0 },
    { translateX: 15, translateY: -15 },
    { translateX: -15, translateY: 15 },
    { translateX: 0, translateY: 0 },
  ],
  loop: true,
  duration: 16000, // キーフレームの動作を滑らかにするための全体の期間を調整
});

// app固定用
function adjustElementPosition() {
  const element = document.querySelector(".your-fixed-element");
  if (element) {
    element.style.bottom = "0";
    element.style.left = "0";
  }
}

// ページ読み込み時と画面サイズ変更時に位置を調整
window.addEventListener("load", adjustElementPosition);
window.addEventListener("resize", adjustElementPosition);

/**
 *
 * fvアニメーション
 */
/**
 * tiltSlider.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
// (function (window) {
//   "use strict";

//   // ページにid="fv"が存在するかどうかをチェック
//   var fvElement = document.getElementById("fv");
//   if (!fvElement) {
//     // id="fv"がない場合は、これ以降のコードを実行しない
//     return;
//   }

//   Modernizr.addTest("csstransformspreserve3d", function () {
//     var prop = Modernizr.prefixed("transformStyle");
//     var val = "preserve-3d";
//     var computedStyle;
//     if (!prop) return false;

//     prop = prop
//       .replace(/([A-Z])/g, function (str, m1) {
//         return "-" + m1.toLowerCase();
//       })
//       .replace(/^ms-/, "-ms-");

//     Modernizr.testStyles(
//       "#modernizr{" + prop + ":" + val + ";}",
//       function (el, rule) {
//         computedStyle = window.getComputedStyle
//           ? getComputedStyle(el, null).getPropertyValue(prop)
//           : "";
//       }
//     );

//     return computedStyle === val;
//   });

//   var support = {
//       animations: Modernizr.cssanimations,
//       preserve3d: Modernizr.csstransformspreserve3d,
//       transforms3d: Modernizr.csstransforms3d,
//     },
//     isSupported =
//       support.animations && support.preserve3d && support.transforms3d,
//     animEndEventNames = {
//       WebkitAnimation: "webkitAnimationEnd",
//       OAnimation: "oAnimationEnd",
//       msAnimation: "MSAnimationEnd",
//       animation: "animationend",
//     },
//     // animation end event name
//     animEndEventName = animEndEventNames[Modernizr.prefixed("animation")];

//   function extend(a, b) {
//     for (var key in b) {
//       if (b.hasOwnProperty(key)) {
//         a[key] = b[key];
//       }
//     }
//     return a;
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     var el = document.querySelector("#slideshow");
//     if (el) {
//       var tiltSlider = new TiltSlider(el); // ここで TiltSlider のインスタンスを作成
//       tiltSlider._initEvents(); // インスタンスに対して initEvents メソッドを直接呼び出す
//     } else {
//     }
//   });

//   function TiltSlider(el, options) {
//     this.el = el;
//     // available effects for the animations (animation class names) - when a item comes in / out
//     this.animEffectsOut = ["slideRightOut"];
//     this.animEffectsIn = ["slideRightIn"];

//     // the items olの子のliを取得
//     this.items = this.el.querySelector("ol.slides").children;

//     // total items
//     this.itemsCount = this.items.length;
//     if (!this.itemsCount) return;

//     // index of the current item
//     this.current = 0;
//     this.options = extend({}, this.options);
//     extend(this.options, options);
//     this._init();
//   }

//   TiltSlider.prototype.options = {};

//   TiltSlider.prototype._init = function () {
//     // this._addNavigation();
//     this._initEvents();
//     this._initScrollEvents(); // スクロールイベントの初期化
//     this._initDragEvents(); // ドラッグイベントの初期化
//   };

//   TiltSlider.prototype._initScrollEvents = function () {
//     let lastTime = 0;

//     window.addEventListener("wheel", (e) => {
//       const currentTime = Date.now();
//       if (currentTime - lastTime < 1200) {
//         // 短時間の連続スクロールを無視
//         return;
//       }

//       this._showItem(this.current + 1); // スクロール方向に関わらず次のスライドへ

//       lastTime = currentTime; // 最後のスクロール時間を更新
//     });
//   };

//   TiltSlider.prototype._initDragEvents = function () {
//     var self = this,
//       startX;

//     this.el.addEventListener("mousedown", function (e) {
//       startX = e.pageX;
//       self.isDragging = true;
//     });

//     window.addEventListener("mousemove", function (e) {
//       if (!self.isDragging) return;
//     });

//     window.addEventListener("mouseup", function (e) {
//       if (!self.isDragging) return;
//       self.isDragging = false;

//       if (Math.abs(startX - e.pageX) > 100) {
//         // ドラッグ距離が100pxを超えた場合
//         if (self.current === self.itemsCount - 1) {
//           // 最後のスライドであるかチェック
//           document.body.classList.add("fade_out"); // フェードアウトアニメーションを<body>に適用
//           // 'animationend' イベントを<body>に設定
//           document.body.addEventListener(
//             "animationend",
//             function () {
//               window.location.href = "../top.html"; // アニメーション完了後に遷移
//             },
//             { once: true }
//           );
//         } else {
//           var newPos = self.current + 1;
//           self._showItem(newPos);
//         }
//       }
//     });
//   };

//   TiltSlider.prototype._initTouchEvents = function () {
//     let startX = 0; // タッチ開始のX座標
//     let startY = 0; // タッチ開始のY座標
//     let moveX = 0; // タッチ移動時のX座標
//     let moveY = 0; // タッチ移動時のY座標

//     this.el.addEventListener("touchstart", (e) => {
//       startX = e.touches[0].pageX;
//       startY = e.touches[0].pageY;
//     });

//     this.el.addEventListener("touchmove", (e) => {
//       moveX = e.touches[0].pageX;
//       moveY = e.touches[0].pageY;
//     });

//     this.el.addEventListener("touchend", (e) => {
//       const deltaX = moveX - startX;
//       const deltaY = moveY - startY;

//       // スワイプの方向を検出（左右のみ）
//       if (Math.abs(deltaX) > Math.abs(deltaY)) {
//         // 水平方向の移動がより大きい
//         if (deltaX > 50) {
//           // 右にスワイプ
//           this._showItem(this.current - 1); // 前のアイテムを表示
//         } else if (deltaX < -50) {
//           // 左にスワイプ
//           this._showItem(this.current + 1); // 次のアイテムを表示
//         }
//       }
//     });
//   };

//   // add the navigation to the DOM　ナビ
//   TiltSlider.prototype._addNavigation = function () {
//     // // add nav "dots"
//     // this.nav = document.createElement("nav");
//     // var inner = "";
//     // for (var i = 0; i < this.itemsCount; ++i) {
//     //   inner += i === 0 ? '<span class="current"></span>' : "<span></span>";
//     // }
//     // this.nav.innerHTML = inner;
//     // this.el.appendChild(this.nav);
//     // this.navDots = [].slice.call(this.nav.children);
//   };

//   TiltSlider.prototype._initEvents = function () {};

//   // _showItem メソッドの改修版
//   // TiltSlider.prototype._showItem = function(pos) {
//   //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

//   //   this.isAnimating = true;

//   //   var currentItem = this.items[this.current];
//   //   var nextItem = this.items[pos];

//   //   if (!currentItem || !nextItem) {
//   //     this.isAnimating = false;
//   //     return;
//   //   }

//   //   if (pos >= this.itemsCount) {
//   //     pos = 0;
//   //     nextItem = this.items[pos];
//   //   }

//   //   var self = this;
//   //   currentItem.setAttribute("data-effect-out", "slideRightOut");
//   //   nextItem.setAttribute("data-effect-in", "slideRightIn");

//   //   var onEndAnimationCurrentItem = function() {
//   //     currentItem.removeEventListener(animEndEventName, onEndAnimationCurrentItem);
//   //     currentItem.classList.remove("hide");
//   //     nextItem.classList.add("show");
//   //   };

//   //   var onEndAnimationNextItem = function() {
//   //     nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);
//   //     nextItem.classList.remove("show");
//   //     nextItem.classList.add("current");
//   //     self.isAnimating = false;

//   //     // 最後のスライドの後にページ遷移する処理
//   //     if (pos === self.itemsCount - 1) {
//   //       self._setupTransitionEventsForLastSlide(); // 最後のスライドでのイベントリスナーを設定
//   //     }
//   //   };

//   //   // アニメーション終了イベントリスナーを設定
//   //   currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);
//   //   nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);

//   //   currentItem.classList.add("hide");
//   //   nextItem.classList.remove("current");

//   //   this.current = pos; // 現在の位置を更新
//   // };

//   /**
//    * showitem gsap使用
//    */
//   // TiltSlider.prototype._showItem = function (pos) {
//   //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

//   //   this.isAnimating = true;
//   //   var currentItem = this.items[this.current];
//   //   var nextItem = this.items[pos];

//   //   if (!currentItem || !nextItem) {
//   //     this.isAnimating = false;
//   //     return;
//   //   }

//   //   if (pos >= this.itemsCount) {
//   //     pos = 0; // 循環させる場合
//   //     nextItem = this.items[pos];
//   //   }

//   //   var self = this;
//   //   // currentItemのスライドアウトアニメーション
//   //   gsap.to(currentItem, {
//   //     duration: 1,
//   //     ease: "ease-in-out",
//   //     x: 1500,
//   //     y: -500,
//   //     onStart: function() {
//   //       // アニメーション開始時にクラス名を操作
//   //       currentItem.classList.add("hide");
//   //       currentItem.setAttribute("data-effect-out", "slideRightOut");
//   //     },
//   //     onComplete: function() {
//   //       currentItem.classList.remove("current");
//   //       nextItem.classList.add("show");
//   //     }
//   //   });

//   //   // // nextItemのスライドインアニメーション
//   //   gsap.from(nextItem, {
//   //     duration: 1,
//   //     ease: "ease-in-out",
//   //     x: -1250,
//   //     y: 625,
//   //     onStart: function() {
//   //       // アニメーション開始時にクラス名を操作
//   //       nextItem.setAttribute("data-effect-in", "slideRightIn");
//   //     },
//   //     onComplete: function() {
//   //       nextItem.classList.remove("hide");
//   //       nextItem.classList.add("current");
//   //       self.isAnimating = false;

//   //       // 最後のスライドでの追加処理が必要な場合
//   //       if (pos === self.itemsCount - 1) {
//   //         self._setupTransitionEventsForLastSlide();
//   //       }
//   //     }
//   //   });

//   //   // currentItemのスライドアウトアニメーションを修正
//   //   // gsap.to(currentItem.querySelector(".bl_bubble_box.tiltview"), {
//   //   //   duration: 1,
//   //   //   ease: "ease-in-out",
//   //   //   x: 1500,
//   //   //   y: -500,
//   //   //   onStart: function () {
//   //   //     currentItem.classList.add("hide");
//   //   //     // その他のアニメーション開始時に必要な操作があればここに追加
//   //   //   },
//   //   //   onComplete: function () {
//   //   //     currentItem.classList.remove("current");
//   //   //     // アニメーション終了時の操作
//   //   //   },
//   //   // });

//   //   // アニメーション対象の要素を正しく選択しているか確認
//   //   // console.log(nextItem.querySelector(".bl_bubble_box.tiltview"));

//   //   // nextItemのスライドインアニメーション
//   //   // gsap.fromTo(
//   //   //   nextItem.querySelector(".bl_bubble_box.tiltview"),
//   //   //   {
//   //   //     x: -1250, // X座標の開始値
//   //   //     y: 625, // Y座標の開始値
//   //   //   },
//   //   //   {
//   //   //     x: 0, // X座標の終了値（元の位置に戻る）
//   //   //     y: 0, // Y座標の終了値（Y方向の移動はないため、0に戻す）
//   //   //     duration: 1, // アニメーションの持続時間
//   //   //     ease: "ease-in-out", // イージング関数
//   //   //     onComplete: function () {
//   //   //       nextItem.classList.add("current");
//   //   //       self.isAnimating = false;
//   //   //       // 最後のスライドでの追加処理が必要な場合
//   //   //       console.log("Animation completed");
//   //   //     },
//   //   //   }
//   //   // );

//   //   this.current = pos; // 現在の位置を更新
//   // };

//   // TiltSlider.prototype._showItem = function (pos) {
//   //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

//   //   this.isAnimating = true;
//   //   var currentItem = this.items[this.current];
//   //   var nextItem = this.items[pos];

//   //   if (!currentItem || !nextItem) {
//   //     this.isAnimating = false;
//   //     return;
//   //   }

//   //   if (pos >= this.itemsCount) {
//   //     pos = 0; // 循環させる場合
//   //     nextItem = this.items[pos];
//   //   }

//   //   var self = this;
//   //   // currentItemのスライドアウトアニメーション
//   //   // gsap.to(currentItem, {
//   //   //   duration: 1,
//   //   //   ease: "ease-in-out",
//   //   //   x: 1500,
//   //   //   y: -500,
//   //   //   onStart: function() {
//   //   //     // アニメーション開始時にクラス名を操作
//   //   //     currentItem.classList.add("hide");
//   //   //     currentItem.setAttribute("data-effect-out", "slideRightOut");
//   //   //   },
//   //   //   onComplete: function() {
//   //   //     currentItem.classList.remove("current");
//   //   //     nextItem.classList.add("show");
//   //   //   }
//   //   // });

//   //   // // nextItemのスライドインアニメーション
//   //   // gsap.from(nextItem, {
//   //   //   duration: 1,
//   //   //   ease: "ease-in-out",
//   //   //   x: -1250,
//   //   //   y: 625,
//   //   //   onStart: function() {
//   //   //     // アニメーション開始時にクラス名を操作
//   //   //     nextItem.setAttribute("data-effect-in", "slideRightIn");
//   //   //   },
//   //   //   onComplete: function() {
//   //   //     nextItem.classList.remove("hide");
//   //   //     nextItem.classList.add("current");
//   //   //     self.isAnimating = false;

//   //   //     // 最後のスライドでの追加処理が必要な場合
//   //   //     if (pos === self.itemsCount - 1) {
//   //   //       self._setupTransitionEventsForLastSlide();
//   //   //     }
//   //   //   }
//   //   // });

//   //   // currentItemのスライドアウトアニメーションを修正
//   //   gsap.to(currentItem.querySelector(".bl_bubble_box.tiltview"), {
//   //     duration: 1,
//   //     ease: "ease-in-out",
//   //     x: 1500,
//   //     y: -500,
//   //     onStart: function () {
//   //       currentItem.classList.add("hide");
//   //       // その他のアニメーション開始時に必要な操作があればここに追加
//   //     },
//   //     onComplete: function () {
//   //       currentItem.classList.remove("current");
//   //       // アニメーション終了時の操作
//   //     },
//   //   });

//   //   // アニメーション対象の要素を正しく選択しているか確認
//   //   console.log(nextItem.querySelector(".bl_bubble_box.tiltview"));

//   //   // nextItemのスライドインアニメーション
//   //   gsap.fromTo(
//   //     nextItem.querySelector(".bl_bubble_box.tiltview"),
//   //     {
//   //       x: -1250, // X座標の開始値
//   //       y: 625, // Y座標の開始値
//   //     },
//   //     {
//   //       x: 0, // X座標の終了値（元の位置に戻る）
//   //       y: 0, // Y座標の終了値（Y方向の移動はないため、0に戻す）
//   //       duration: 1, // アニメーションの持続時間
//   //       ease: "ease-in-out", // イージング関数
//   //       onComplete: function () {
//   //         nextItem.classList.add("current");
//   //         self.isAnimating = false;
//   //         // 最後のスライドでの追加処理が必要な場合
//   //         console.log("Animation completed");
//   //       },
//   //     }
//   //   );

//   //   this.current = pos; // 現在の位置を更新
//   // };

//   /**
//    * 別のアプローチ
//    */
//   TiltSlider.prototype._showItem = function(pos) {
//     if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;
  
//     this.isAnimating = true;
//     var currentItem = this.items[this.current];
//     var nextItem = this.items[pos];
  
//     if (!currentItem || !nextItem) {
//       this.isAnimating = false;
//       return;
//     }
  
//     var self = this;
//     // スライドアウトアニメーション
//     gsap.to(currentItem.querySelector(".bl_bubble_box.tiltview"), {
//       duration: 1,
//       ease: "ease-in-out",
//       x: 1500,
//       y: -500,
//       onStart: function() {
//         currentItem.classList.add("hide");
//       },
//       onComplete: function() {
//         currentItem.classList.remove("current", "show");
//         currentItem.classList.add("hide"); // 非表示に設定
//       }
//     });
  
//     // スライドインアニメーション
//     gsap.fromTo(nextItem.querySelector(".bl_bubble_box.tiltview"), {
//       x: -1250,
//       y: 625
//     }, {
//       x: 0,
//       y: 0,
//       duration: 1,
//       ease: "ease-in-out",
//       onStart: function() {
//         nextItem.classList.remove("hide");
//       },
//       onComplete: function() {
//         nextItem.classList.add("current");
//         nextItem.classList.remove("show", "hide"); // 必要に応じて調整
//         self.isAnimating = false;
//       }
//     });
  
//     this.current = pos; // 現在の位置を更新
//   };
  




//   TiltSlider.prototype._setupTransitionEventsForLastSlide = function () {
//     var self = this;

//     // スクロールによるページ遷移のトリガー
//     var handleScrollToTransition = function (event) {
//       window.removeEventListener("wheel", handleScrollToTransition); // 一度のスクロールで1回だけ発火
//       window.location.href = "../top.html"; // ここに遷移先のURLを設定
//     };

//     // ドラッグ（マウスまたはタッチ操作）によるページ遷移のトリガー
//     var handleDragEndToTransition = function (event) {
//       window.removeEventListener("mouseup", handleDragEndToTransition);
//       window.removeEventListener("touchend", handleDragEndToTransition); // 一度のドラッグで1回だけ発火
//       window.location.href = "../top.html"; // ここに遷移先のURLを設定
//     };

//     // イベントリスナーを追加
//     window.addEventListener("wheel", handleScrollToTransition);
//     window.addEventListener("mouseup", handleDragEndToTransition);
//     window.addEventListener("touchend", handleDragEndToTransition);
//   };

//   // add to global namespace
//   window.TiltSlider = TiltSlider;
// })(window);


(function (window) {
  "use strict";

  // ページにid="fv"が存在するかどうかをチェック
  var fvElement = document.getElementById("fv");
  if (!fvElement) {
    // id="fv"がない場合は、これ以降のコードを実行しない
    return;
  }

  Modernizr.addTest("csstransformspreserve3d", function () {
    var prop = Modernizr.prefixed("transformStyle");
    var val = "preserve-3d";
    var computedStyle;
    if (!prop) return false;

    prop = prop
      .replace(/([A-Z])/g, function (str, m1) {
        return "-" + m1.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");

    Modernizr.testStyles(
      "#modernizr{" + prop + ":" + val + ";}",
      function (el, rule) {
        computedStyle = window.getComputedStyle
          ? getComputedStyle(el, null).getPropertyValue(prop)
          : "";
      }
    );

    return computedStyle === val;
  });

  var support = {
      animations: Modernizr.cssanimations,
      preserve3d: Modernizr.csstransformspreserve3d,
      transforms3d: Modernizr.csstransforms3d,
    },
    isSupported =
      support.animations && support.preserve3d && support.transforms3d,
    animEndEventNames = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd",
      animation: "animationend",
    },
    // animation end event name
    animEndEventName = animEndEventNames[Modernizr.prefixed("animation")];

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelector("#slideshow");
    if (el) {
      var tiltSlider = new TiltSlider(el); // ここで TiltSlider のインスタンスを作成
      tiltSlider._initEvents(); // インスタンスに対して initEvents メソッドを直接呼び出す
    } else {
    }
  });

  function TiltSlider(el, options) {
    this.el = el;
    this.animEffectsOut = ["slideRightOut"];
    this.animEffectsIn = ["slideRightIn"];
    this.items = this.el.querySelector("ol.slides").children;
    this.itemsCount = this.items.length;
    this.current = 0;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
}

  TiltSlider.prototype.options = {};

  TiltSlider.prototype._init = function() {
    // 既存の初期化処理
    this._initEvents();
    this._initScrollEvents();
    this._initDragEvents();
    
    // 2枚目以降のスライドの初期位置を設定
    this._setPositionForSlides();
};

TiltSlider.prototype._setPositionForSlides = function() {
  for (var i = 1; i < this.items.length; i++) {
      var bubbleBox = this.items[i].querySelector('.bl_bubble_box.tiltview');
      console.log(bubbleBox); // 対象の要素が正しく選択されているかログ出力
      if (bubbleBox) {
          gsap.set(bubbleBox, {x: -1250, y: 625});
      }
  }
};

  TiltSlider.prototype._initScrollEvents = function () {
    let lastTime = 0;

    window.addEventListener("wheel", (e) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < 1200) {
        // 短時間の連続スクロールを無視
        return;
      }

      this._showItem(this.current + 1); // スクロール方向に関わらず次のスライドへ

      lastTime = currentTime; // 最後のスクロール時間を更新
    });
  };

  TiltSlider.prototype._initDragEvents = function () {
    var self = this,
      startX;

    this.el.addEventListener("mousedown", function (e) {
      startX = e.pageX;
      self.isDragging = true;
    });

    window.addEventListener("mousemove", function (e) {
      if (!self.isDragging) return;
    });

    window.addEventListener("mouseup", function (e) {
      if (!self.isDragging) return;
      self.isDragging = false;

      if (Math.abs(startX - e.pageX) > 100) {
        // ドラッグ距離が100pxを超えた場合
        if (self.current === self.itemsCount - 1) {
          // 最後のスライドであるかチェック
          document.body.classList.add("fade_out"); // フェードアウトアニメーションを<body>に適用
          // 'animationend' イベントを<body>に設定
          document.body.addEventListener(
            "animationend",
            function () {
              window.location.href = "../top.html"; // アニメーション完了後に遷移
            },
            { once: true }
          );
        } else {
          var newPos = self.current + 1;
          self._showItem(newPos);
        }
      }
    });
  };

  TiltSlider.prototype._initTouchEvents = function () {
    let startX = 0; // タッチ開始のX座標
    let startY = 0; // タッチ開始のY座標
    let moveX = 0; // タッチ移動時のX座標
    let moveY = 0; // タッチ移動時のY座標

    this.el.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
    });

    this.el.addEventListener("touchmove", (e) => {
      moveX = e.touches[0].pageX;
      moveY = e.touches[0].pageY;
    });

    this.el.addEventListener("touchend", (e) => {
      const deltaX = moveX - startX;
      const deltaY = moveY - startY;

      // スワイプの方向を検出（左右のみ）
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // 水平方向の移動がより大きい
        if (deltaX > 50) {
          // 右にスワイプ
          this._showItem(this.current - 1); // 前のアイテムを表示
        } else if (deltaX < -50) {
          // 左にスワイプ
          this._showItem(this.current + 1); // 次のアイテムを表示
        }
      }
    });
  };

  // add the navigation to the DOM　ナビ
  TiltSlider.prototype._addNavigation = function () {
    // // add nav "dots"
    // this.nav = document.createElement("nav");
    // var inner = "";
    // for (var i = 0; i < this.itemsCount; ++i) {
    //   inner += i === 0 ? '<span class="current"></span>' : "<span></span>";
    // }
    // this.nav.innerHTML = inner;
    // this.el.appendChild(this.nav);
    // this.navDots = [].slice.call(this.nav.children);
  };

  TiltSlider.prototype._initEvents = function () {};

  // _showItem メソッドの改修版
  // TiltSlider.prototype._showItem = function(pos) {
  //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

  //   this.isAnimating = true;

  //   var currentItem = this.items[this.current];
  //   var nextItem = this.items[pos];

  //   if (!currentItem || !nextItem) {
  //     this.isAnimating = false;
  //     return;
  //   }

  //   if (pos >= this.itemsCount) {
  //     pos = 0;
  //     nextItem = this.items[pos];
  //   }

  //   var self = this;
  //   currentItem.setAttribute("data-effect-out", "slideRightOut");
  //   nextItem.setAttribute("data-effect-in", "slideRightIn");

  //   var onEndAnimationCurrentItem = function() {
  //     currentItem.removeEventListener(animEndEventName, onEndAnimationCurrentItem);
  //     currentItem.classList.remove("hide");
  //     nextItem.classList.add("show");
  //   };

  //   var onEndAnimationNextItem = function() {
  //     nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);
  //     nextItem.classList.remove("show");
  //     nextItem.classList.add("current");
  //     self.isAnimating = false;

  //     // 最後のスライドの後にページ遷移する処理
  //     if (pos === self.itemsCount - 1) {
  //       self._setupTransitionEventsForLastSlide(); // 最後のスライドでのイベントリスナーを設定
  //     }
  //   };

  //   // アニメーション終了イベントリスナーを設定
  //   currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);
  //   nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);

  //   currentItem.classList.add("hide");
  //   nextItem.classList.remove("current");

  //   this.current = pos; // 現在の位置を更新
  // };

  /**
   * showitem gsap使用
   */
  // TiltSlider.prototype._showItem = function (pos) {
  //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

  //   this.isAnimating = true;
  //   var currentItem = this.items[this.current];
  //   var nextItem = this.items[pos];

  //   if (!currentItem || !nextItem) {
  //     this.isAnimating = false;
  //     return;
  //   }

  //   if (pos >= this.itemsCount) {
  //     pos = 0; // 循環させる場合
  //     nextItem = this.items[pos];
  //   }

  //   var self = this;
  //   // currentItemのスライドアウトアニメーション
  //   gsap.to(currentItem, {
  //     duration: 1,
  //     ease: "ease-in-out",
  //     x: 1500,
  //     y: -500,
  //     onStart: function() {
  //       // アニメーション開始時にクラス名を操作
  //       currentItem.classList.add("hide");
  //       currentItem.setAttribute("data-effect-out", "slideRightOut");
  //     },
  //     onComplete: function() {
  //       currentItem.classList.remove("current");
  //       nextItem.classList.add("show");
  //     }
  //   });

  //   // // nextItemのスライドインアニメーション
  //   gsap.from(nextItem, {
  //     duration: 1,
  //     ease: "ease-in-out",
  //     x: -1250,
  //     y: 625,
  //     onStart: function() {
  //       // アニメーション開始時にクラス名を操作
  //       nextItem.setAttribute("data-effect-in", "slideRightIn");
  //     },
  //     onComplete: function() {
  //       nextItem.classList.remove("hide");
  //       nextItem.classList.add("current");
  //       self.isAnimating = false;

  //       // 最後のスライドでの追加処理が必要な場合
  //       if (pos === self.itemsCount - 1) {
  //         self._setupTransitionEventsForLastSlide();
  //       }
  //     }
  //   });

  //   // currentItemのスライドアウトアニメーションを修正
  //   // gsap.to(currentItem.querySelector(".bl_bubble_box.tiltview"), {
  //   //   duration: 1,
  //   //   ease: "ease-in-out",
  //   //   x: 1500,
  //   //   y: -500,
  //   //   onStart: function () {
  //   //     currentItem.classList.add("hide");
  //   //     // その他のアニメーション開始時に必要な操作があればここに追加
  //   //   },
  //   //   onComplete: function () {
  //   //     currentItem.classList.remove("current");
  //   //     // アニメーション終了時の操作
  //   //   },
  //   // });

  //   // アニメーション対象の要素を正しく選択しているか確認
  //   // console.log(nextItem.querySelector(".bl_bubble_box.tiltview"));

  //   // nextItemのスライドインアニメーション
  //   // gsap.fromTo(
  //   //   nextItem.querySelector(".bl_bubble_box.tiltview"),
  //   //   {
  //   //     x: -1250, // X座標の開始値
  //   //     y: 625, // Y座標の開始値
  //   //   },
  //   //   {
  //   //     x: 0, // X座標の終了値（元の位置に戻る）
  //   //     y: 0, // Y座標の終了値（Y方向の移動はないため、0に戻す）
  //   //     duration: 1, // アニメーションの持続時間
  //   //     ease: "ease-in-out", // イージング関数
  //   //     onComplete: function () {
  //   //       nextItem.classList.add("current");
  //   //       self.isAnimating = false;
  //   //       // 最後のスライドでの追加処理が必要な場合
  //   //       console.log("Animation completed");
  //   //     },
  //   //   }
  //   // );

  //   this.current = pos; // 現在の位置を更新
  // };

  // TiltSlider.prototype._showItem = function (pos) {
  //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

  //   this.isAnimating = true;
  //   var currentItem = this.items[this.current];
  //   var nextItem = this.items[pos];

  //   if (!currentItem || !nextItem) {
  //     this.isAnimating = false;
  //     return;
  //   }

  //   if (pos >= this.itemsCount) {
  //     pos = 0; // 循環させる場合
  //     nextItem = this.items[pos];
  //   }

  //   var self = this;
  //   // currentItemのスライドアウトアニメーション
  //   // gsap.to(currentItem, {
  //   //   duration: 1,
  //   //   ease: "ease-in-out",
  //   //   x: 1500,
  //   //   y: -500,
  //   //   onStart: function() {
  //   //     // アニメーション開始時にクラス名を操作
  //   //     currentItem.classList.add("hide");
  //   //     currentItem.setAttribute("data-effect-out", "slideRightOut");
  //   //   },
  //   //   onComplete: function() {
  //   //     currentItem.classList.remove("current");
  //   //     nextItem.classList.add("show");
  //   //   }
  //   // });

  //   // // nextItemのスライドインアニメーション
  //   // gsap.from(nextItem, {
  //   //   duration: 1,
  //   //   ease: "ease-in-out",
  //   //   x: -1250,
  //   //   y: 625,
  //   //   onStart: function() {
  //   //     // アニメーション開始時にクラス名を操作
  //   //     nextItem.setAttribute("data-effect-in", "slideRightIn");
  //   //   },
  //   //   onComplete: function() {
  //   //     nextItem.classList.remove("hide");
  //   //     nextItem.classList.add("current");
  //   //     self.isAnimating = false;

  //   //     // 最後のスライドでの追加処理が必要な場合
  //   //     if (pos === self.itemsCount - 1) {
  //   //       self._setupTransitionEventsForLastSlide();
  //   //     }
  //   //   }
  //   // });

  //   // currentItemのスライドアウトアニメーションを修正
  //   gsap.to(currentItem.querySelector(".bl_bubble_box.tiltview"), {
  //     duration: 1,
  //     ease: "ease-in-out",
  //     x: 1500,
  //     y: -500,
  //     onStart: function () {
  //       currentItem.classList.add("hide");
  //       // その他のアニメーション開始時に必要な操作があればここに追加
  //     },
  //     onComplete: function () {
  //       currentItem.classList.remove("current");
  //       // アニメーション終了時の操作
  //     },
  //   });

  //   // アニメーション対象の要素を正しく選択しているか確認
  //   console.log(nextItem.querySelector(".bl_bubble_box.tiltview"));

  //   // nextItemのスライドインアニメーション
  //   gsap.fromTo(
  //     nextItem.querySelector(".bl_bubble_box.tiltview"),
  //     {
  //       x: -1250, // X座標の開始値
  //       y: 625, // Y座標の開始値
  //     },
  //     {
  //       x: 0, // X座標の終了値（元の位置に戻る）
  //       y: 0, // Y座標の終了値（Y方向の移動はないため、0に戻す）
  //       duration: 1, // アニメーションの持続時間
  //       ease: "ease-in-out", // イージング関数
  //       onComplete: function () {
  //         nextItem.classList.add("current");
  //         self.isAnimating = false;
  //         // 最後のスライドでの追加処理が必要な場合
  //         console.log("Animation completed");
  //       },
  //     }
  //   );

  //   this.current = pos; // 現在の位置を更新
  // };

  /**
   * 別のアプローチ
   */
  TiltSlider.prototype._showItem = function(pos) {
    if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;
  
    this.isAnimating = true;
    var currentItem = this.items[this.current];
    var nextItem = this.items[pos];
  
    if (!currentItem || !nextItem) {
      this.isAnimating = false;
      return;
    }
  
    var self = this;
    // スライドアウトアニメーション
    gsap.to(currentItem.querySelector(".bl_bubble_box.tiltview"), {
      duration: 0.5,
      ease: "ease-in-out",
      x: 1500,
      y: -500,
      onStart: function() {
        currentItem.classList.add("hide");
      },
      onComplete: function() {
        currentItem.classList.remove("current", "show");
        currentItem.classList.add("hide"); // 非表示に設定
      }
    });
  
    // スライドインアニメーション
    gsap.fromTo(nextItem.querySelector(".bl_bubble_box.tiltview"), {
      x: -1250,
      y: 625
    }, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "ease-in-out",
      onStart: function() {
        nextItem.classList.remove("hide");
      },
      onComplete: function() {
        nextItem.classList.add("current");
        nextItem.classList.remove("show", "hide"); // 必要に応じて調整
        self.isAnimating = false;
      }
    });
  
    this.current = pos; // 現在の位置を更新
  };
  




  TiltSlider.prototype._setupTransitionEventsForLastSlide = function () {
    var self = this;

    // スクロールによるページ遷移のトリガー
    var handleScrollToTransition = function (event) {
      window.removeEventListener("wheel", handleScrollToTransition); // 一度のスクロールで1回だけ発火
      window.location.href = "../top.html"; // ここに遷移先のURLを設定
    };

    // ドラッグ（マウスまたはタッチ操作）によるページ遷移のトリガー
    var handleDragEndToTransition = function (event) {
      window.removeEventListener("mouseup", handleDragEndToTransition);
      window.removeEventListener("touchend", handleDragEndToTransition); // 一度のドラッグで1回だけ発火
      window.location.href = "../top.html"; // ここに遷移先のURLを設定
    };

    // イベントリスナーを追加
    window.addEventListener("wheel", handleScrollToTransition);
    window.addEventListener("mouseup", handleDragEndToTransition);
    window.addEventListener("touchend", handleDragEndToTransition);
  };

  // add to global namespace
  window.TiltSlider = TiltSlider;
})(window);

/**
 * Gsap
 */

if (document.body.id === "frontPage") {
  gsap.registerPlugin(ScrollTrigger);
  console.log("p_top");

  gsap.utils.toArray(".scroll-fade-in").forEach(function (element) {
    gsap.from(element, {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power4.inOut", // イージング関数を調整
      scrollTrigger: {
        trigger: element,
        start: "top 90%", // 画面の上から90%の位置でアニメーションを開始
        toggleActions: "play none none none",
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var transitionLinks = document.querySelectorAll(".transition-link");

  transitionLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // リンクのデフォルト動作を停止

      var href = this.getAttribute("href"); // リンク先のURLを取得

      // ここでアニメーションを実行...
      gsap.to("#content", {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
          window.location.href = href; // アニメーション完了後にリンク先に遷移
        },
      });
    });
  });
});

// 流体アニメーションfv
// document.addEventListener("DOMContentLoaded", () => {
//   const dynamicImage = document.querySelector(".bl_bubble");
//   let time = 0;

//   function animate() {
//       requestAnimationFrame(animate);

//       // スケールとborder-radiusの変化
//       const scale = Math.abs(noise.simplex3(1, time * 0.5, 1.5)) * 0.25 + 0.75;
//       const topLeft = Math.abs(noise.simplex3(1, time, 0.5)) * 50 + 50;
//       const topRight = Math.abs(noise.simplex3(2, time, 0.5)) * 50 + 50;
//       const bottomRight = Math.abs(noise.simplex3(3, time, 0.5)) * 50 + 50;
//       const bottomLeft = Math.abs(noise.simplex3(4, time, 0.5)) * 50 + 50;

//       // ボーダーの太さを動的に変化させる
//       // ボーダーの太さを動的に変化させる
// const borderWidth = Math.abs(noise.simplex3(5, time, 0.5)) * 40 + 10; // 10pxから50pxの間で変化

//       // スタイルを適用
//       dynamicImage.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
//       dynamicImage.style.transform = `scale(${scale})`;
//       dynamicImage.style.borderWidth = `${borderWidth}px`;

//       time += 0.002;
//   }

//   animate();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const dynamicImage = document.querySelector(".bl_bubble");
//   let time = 0;

//   function animate() {
//       requestAnimationFrame(animate);

//       // スケールとborder-radiusの変化
//       const scale = Math.abs(noise.simplex3(1, time * 0.5, 1.5)) * 0.45 + 0.75; // 0.75から1.2の間で変化
//       const topLeft = Math.abs(noise.simplex3(1, time, 0.5)) * 50 + 50;
//       const topRight = Math.abs(noise.simplex3(2, time, 0.5)) * 50 + 50;
//       const bottomRight = Math.abs(noise.simplex3(3, time, 0.5)) * 50 + 50;
//       const bottomLeft = Math.abs(noise.simplex3(4, time, 0.5)) * 50 + 50;

//       // ボーダーの太さを動的に変化させる
//       const borderWidth = Math.abs(noise.simplex3(5, time, 0.5)) * 40 + 10; // 10pxから50pxの間で変化

//       // スタイルを適用
//       dynamicImage.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
//       dynamicImage.style.transform = `scale(${scale})`;
//       dynamicImage.style.borderWidth = `${borderWidth}px`;

//       time += 0.002;
//   }

//   animate();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const dynamicImage = document.querySelector(".bl_bubble");
//   const bubbleImage = dynamicImage.querySelector(".bl_bubble_img");
//   let time = 0;

//   function animate() {
//       requestAnimationFrame(animate);

//       const scale = Math.abs(noise.simplex3(1, time * 0.5, 1.5)) * 0.45 + 0.75; // 0.75から1.2の間で変化
//       const topLeft = Math.abs(noise.simplex3(1, time, 0.5)) * 50 + 50;
//       const topRight = Math.abs(noise.simplex3(2, time, 0.5)) * 50 + 50;
//       const bottomRight = Math.abs(noise.simplex3(3, time, 0.5)) * 50 + 50;
//       const bottomLeft = Math.abs(noise.simplex3(4, time, 0.5)) * 50 + 50;
//       const borderWidth = Math.abs(noise.simplex3(5, time, 0.5)) * 40 + 10; // 10pxから50pxの間で変化

//       dynamicImage.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
//       dynamicImage.style.transform = `scale(${scale})`;
//       dynamicImage.style.borderWidth = `${borderWidth}px`;

//       const inverseScale = 1 / scale;
//       bubbleImage.style.transform = `scale(${inverseScale})`;

//       time += 0.002;
//   }

//   animate();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const dynamicImage = document.querySelector(".bl_bubble");
//   const bubbleImage = dynamicImage.querySelector(".bl_bubble_scale");
//   let time = 0;

//   function animate() {
//       requestAnimationFrame(animate);

//       const scale = Math.abs(noise.simplex3(1, time * 0.5, 1.5)) * 0.45 + 0.75;
//       const topLeft = Math.abs(noise.simplex3(1, time, 0.5)) * 50 + 50;
//       const topRight = Math.abs(noise.simplex3(2, time, 0.5)) * 50 + 50;
//       const bottomRight = Math.abs(noise.simplex3(3, time, 0.5)) * 50 + 50;
//       const bottomLeft = Math.abs(noise.simplex3(4, time, 0.5)) * 50 + 50;
//       const borderWidth = Math.abs(noise.simplex3(5, time, 0.5)) * 40 + 10;

//       dynamicImage.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
//       dynamicImage.style.transform = `scale(${scale})`;
//       dynamicImage.style.borderWidth = `${borderWidth}px`;

//       const inverseScale = 1 / scale;
//       bubbleImage.style.transform = `scale(${inverseScale})`;

//       time += 0.002;
//   }

//   animate();
// });

document.addEventListener("DOMContentLoaded", () => {
  const dynamicImages = document.querySelectorAll(".bl_bubble");

  dynamicImages.forEach((dynamicImage) => {
    let time = 0;

    function animate() {
      requestAnimationFrame(animate);

      const scale = Math.abs(noise.simplex3(1, time * 0.5, 1.5)) * 0.45 + 0.75;
      const topLeft = Math.abs(noise.simplex3(1, time, 0.5)) * 50 + 50;
      const topRight = Math.abs(noise.simplex3(2, time, 0.5)) * 50 + 50;
      const bottomRight = Math.abs(noise.simplex3(3, time, 0.5)) * 50 + 50;
      const bottomLeft = Math.abs(noise.simplex3(4, time, 0.5)) * 50 + 50;
      const borderWidth = Math.abs(noise.simplex3(5, time, 0.5)) * 40 + 10;

      dynamicImage.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
      dynamicImage.style.transform = `scale(${scale})`;
      dynamicImage.style.borderWidth = `${borderWidth}px`;

      const bubbleImage = dynamicImage.querySelector(".bl_bubble_scale");
      const inverseScale = 1 / scale;
      if (bubbleImage) {
        bubbleImage.style.transform = `scale(${inverseScale})`;
      }

      time += 0.002;
    }

    animate();
  });
});
