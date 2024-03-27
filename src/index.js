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

// youtubeの場合
document.addEventListener("DOMContentLoaded", function () {
  // bodyタグにfrontPageのIDが存在するかチェック
  if (document.body.id === "frontPage") {
    // DOM要素を取得
    let modal = document.querySelector(".bl_videoModal");
    let btn = document.querySelector(".bl_videoBlock_link");
    let span = document.querySelector(".bl_videoModal_closeBtn");
    let iframe = document.querySelector(".bl_videoModal_video");
    let body = document.body; // スクロール禁止を適用するためのbody要素

    // YouTubeの動画IDと基本URL
    let videoID = "UTnE0qQ41eE"; // ここに動画IDを設定
    let baseURL = `https://www.youtube.com/embed/${videoID}?`;

    // モーダルを開くボタンをクリックするとモーダルを表示
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      modal.style.display = "block";
      body.classList.add("js_bodyNoScroll"); // スクロール禁止クラスを追加
      setTimeout(() => {
        modal.classList.add("is_show");
        // 自動再生するURLを設定（ミュートなし）
        iframe.src = `${baseURL}autoplay=1`; // ミュートを解除
      }, 10);
    });

    // モーダルを閉じる関数
    const closeModal = () => {
      modal.classList.remove("is_show");
      setTimeout(() => {
        modal.style.display = "none";
        body.classList.remove("js_bodyNoScroll"); // スクロール禁止クラスを削除
        // 再生を停止し、iframeのsrcをリセット
        iframe.src = "";
      }, 500);
    };

    // クリックイベントを追加
    span.onclick = closeModal;
    window.onclick = function (event) {
      if (event.target == modal) {
        closeModal();
      }
    };
  }
});

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
//   targets: ".bl_bubble",
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

// 修正、枠線をうようよ
// anime({
//   targets: '.bl_bubble',
//   rotate: '1turn',
//   scale: [
//       {value: 0.95, duration: 5000, easing: 'easeInOutSine'},
//       {value: 1, duration: 5000, easing: 'easeInOutSine'}
//   ],
//   loop: true,
//   easing: 'easeInOutSine',

// });

// 修正閉じ

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
 *
 *
 *
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
    // available effects for the animations (animation class names) - when a item comes in / out
    this.animEffectsOut = ["slideRightOut"];
    this.animEffectsIn = ["slideRightIn"];

    // the items olの子のliを取得
    this.items = this.el.querySelector("ol.slides").children;

    // total items
    this.itemsCount = this.items.length;
    if (!this.itemsCount) return;

    // index of the current item
    this.current = 0;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  TiltSlider.prototype.options = {};

  TiltSlider.prototype._init = function () {
    // this._addNavigation();
    this._initEvents();
    this._initScrollEvents(); // スクロールイベントの初期化
    this._initDragEvents(); // ドラッグイベントの初期化
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
      startX,
      endX;

    this.el.addEventListener("mousedown", function (e) {
      startX = e.pageX;
      self.isDragging = true;
    });

    window.addEventListener("mousemove", function (e) {
      if (!self.isDragging) return;
      endX = e.pageX;
    });

    window.addEventListener("mouseup", function (e) {
      if (!self.isDragging) return;
      self.isDragging = false;
      var threshold = 100; // ドラッグの閾値
      if (Math.abs(startX - endX) > threshold) {
        var direction = startX > endX ? 1 : -1;
        // スライドのインデックスを更新して循環させる
        var newPos =
          (self.current + direction + self.itemsCount) % self.itemsCount;
        self._showItem(newPos);
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

  TiltSlider.prototype._initEvents = function () {
    // var self = this;
    // this.navDots.forEach(function (dot, idx) {
    //     dot.addEventListener("click", function () {
    //         if (self.isAnimating) return; // アニメーション中は処理を行わない
    //         // idxが現在のスライドインデックスと同じで、それが最後のスライドの場合、最初のスライドへ戻る
    //         if (idx === self.current && idx === self.itemsCount - 1) {
    //             self._showItem(0); // 最初のスライドへ
    //         } else {
    //             self._showItem(idx); // それ以外の場合はクリックされたスライドへ
    //         }
    //     });
    // });
  };

  TiltSlider.prototype._showItem = function (pos) {
    if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;

    this.isAnimating = true;

    var currentItem = this.items[this.current]; // 現在のアイテム
    var nextItem = this.items[pos]; // 次に表示するアイテム

    if (!currentItem || !nextItem) {
      this.isAnimating = false;
      return;
    }

    // スライドの範囲を超えていないかチェックし、必要に応じてリセット
    if (pos >= this.itemsCount) {
      pos = 0;
      nextItem = this.items[pos]; // posのリセット後にnextItemを更新
    }

    var self = this;
    var outEffect = "slideRightOut";
    var inEffect = "slideRightIn";

    currentItem.setAttribute("data-effect-out", outEffect);
    nextItem.setAttribute("data-effect-in", inEffect);

    // アニメーション終了時の処理
    var onEndAnimationCurrentItem = () => {
      currentItem.removeEventListener(
        animEndEventName,
        onEndAnimationCurrentItem
      );
      currentItem.classList.remove("hide");
      nextItem.classList.add("show");
    };

    var onEndAnimationNextItem = function () {
      nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);
      nextItem.classList.remove("show");
      nextItem.classList.add("current");
      self.isAnimating = false;
      // ここで他の必要な処理を行う
    };

    // アニメーション終了イベントリスナーを設定
    currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);
    nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);

    // アニメーションを開始するためのクラスを適用
    currentItem.classList.add("hide");
    // 次のアイテムへのアニメーションクラスの適用は、

    this.current = pos; // 現在の位置を更新
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
// 流体アニメーション設定値
const randomness = 300, // 振れ幅（例：90の場合は0〜90の値になる）
  threshold = 500; // しきい値
// 流体アニメーション関数を定義
// const fluid = function () {
//   // animate関数を使用
//   $(".bl_bubble_img").animate(
//     {
//       borderTopLeftRadius: String(
//         Math.round(Math.random() * randomness + threshold) + "px"
//       ),
//       borderTopRightRadius: String(
//         Math.round(Math.random() * randomness + threshold) + "px"
//       ),
//       borderBottomLeftRadius: String(
//         Math.round(Math.random() * randomness + threshold) + "px"
//       ),
//       borderBottomRightRadius: String(
//         Math.round(Math.random() * randomness + threshold) + "px"
//       ),
//       // borderWidth: String(Math.round(Math.random() * borderRandomness + borderThreshold) + "px"),
//     },
//     {
//       duration: 800,
//       easing: "easeInOutQuad", // より滑らかな動きに
//       complete: fluid,
//     }
//   );
// };
// cssの方がなめらか？
function fluid() {
  $(".bl_bubble_img").css({
    borderTopLeftRadius: Math.round(Math.random() * randomness + threshold) + "px",
    borderTopRightRadius: Math.round(Math.random() * randomness + threshold) + "px",
    borderBottomLeftRadius: Math.round(Math.random() * randomness + threshold) + "px",
    borderBottomRightRadius: Math.round(Math.random() * randomness + threshold) + "px",
  });

  setTimeout(fluid, 800); // 800ミリ秒ごとに再帰的に実行
}
// requestAnimationFrameを使用
// function fluid() {
//   // バブルの枠に合わせてスタイルを変更
//   $(".bl_bubble_img").css({
//     borderTopLeftRadius: Math.round(Math.random() * randomness + threshold) + "px",
//     borderTopRightRadius: Math.round(Math.random() * randomness + threshold) + "px",
//     borderBottomLeftRadius: Math.round(Math.random() * randomness + threshold) + "px",
//     borderBottomRightRadius: Math.round(Math.random() * randomness + threshold) + "px",
//   });

//   // 次のフレームでこの関数を再度実行
//   window.requestAnimationFrame(fluid);
// }

// window.requestAnimationFrame(fluid);



// 流体アニメーション関数を実行
fluid();

