import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";

if (document.querySelector("#webgl1") !== null) {
  // #canvas1用の初期化コード

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Canvas
  const canvas = document.querySelector("#webgl");

  // Scene
  const scene = new THREE.Scene();

  /**
   * Textures
   */
  const textureLoader = new THREE.TextureLoader();

  // Geometry
  const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

  // Material
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
  });

  // Mesh
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(0.25, -0.25, 1);
  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const animate = () => {
    //時間取得
    const elapsedTime = clock.getElapsedTime();

    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
  };

  animate();
}

// else  (document.querySelector('#canvas2') !== null) {
//   // #canvas2用の初期化コード
// }
else {
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

    //   function drawSine(t, zoom, delay) {
    //     let xAxis = Math.floor(canvas.height / 2);
    //     let yAxis = 0;
    //     let context = canvas.contextCache;

    //     // 傾斜の度合いを一定に保つための調整値
    //     let slopeAdjustment = 50; // この値で波の傾斜を調整

    //     for (let i = yAxis; i <= canvas.width + 10; i += 10) {
    //         let x = t + (-yAxis + i) / unit / zoom;
    //         let y = Math.sin(x - delay) / 3;
    //         let heightAdjustmentFactor = 1 - (i / canvas.width);

    //       // Y座標を調整して左側を高く見せる
    //       let yOffset = (canvas.height * (1 - heightAdjustmentFactor)) / 4; // 左側が高くなるように調整

    //       context.lineTo(i, unit * y * heightAdjustmentFactor + xAxis + slopeAdjustment - yOffset);
    //     }
    // }

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
      canvas.height = 300; // 高さを設定
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
      let yAxis = 0;
      let context = canvas.contextCache;

      // 傾斜の度合いを一定に保つための調整値
      let slopeAdjustment = 20; // この値で波の傾斜を調整

      for (let i = yAxis; i <= canvas.width + 10; i += 10) {
        let x = t + (-yAxis + i) / unit / zoom;
        let y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis + slopeAdjustment);
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
      canvas.height = 300;
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
      let yAxis = 0;
      let context = canvas.contextCache;

      let slopeAdjustment = 20; // この値で波の傾斜を調整

      for (let i = yAxis; i <= canvas.width + 10; i += 10) {
        let x = t + (-yAxis + i) / unit / zoom;
        let y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis + slopeAdjustment);
      }
    }

    window.addEventListener("resize", init);

    init();
  })();
}

// // videの場合
// // モーダルを取得
// let modal = document.querySelector(".bl_videoModal");

// // モーダルを開くボタンを取得
// let btn = document.querySelector(".bl_videoBlock_link");

// // モーダルを閉じる<span>要素を取得
// let span = document.querySelector(".bl_videoModal_closeBtn");

// // ビデオ要素を取得
// let video = modal.querySelector("video");

// // ボタンをクリックするとモーダルを表示し、ビデオを再生
// btn.addEventListener("click", function (event) {
//   event.preventDefault(); // デフォルトの動作（リンクの遷移など）をキャンセル
//   modal.style.display = "block";
//   setTimeout(() => {
//     modal.classList.add("show"); // 少し遅らせて.showクラスを追加
//     video.play(); // ビデオを再生
//   }, 10); // DOMが更新されるのを待つために微小な遅延を設ける
// });

// // <span> (x) またはモーダルの外側をクリックするとモーダルを閉じ、ビデオを停止
// const closeModal = () => {
//   modal.classList.remove('show'); // .showクラスを削除してフェードアウト
//   setTimeout(() => {
//     modal.style.display = "none"; // 完全に非表示にする
//     video.pause(); // ビデオの再生を停止
//     video.currentTime = 0; // ビデオを最初から再開するために時間をリセット
//   }, 500); // アニメーションの時間に合わせて遅延を設ける
// };

// span.onclick = closeModal;

// window.onclick = function(event) {
//   if (event.target == modal) {
//     closeModal();
//   }
// };

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
  // 全てのハンバーガーメニューボタンを取得
  const hamburgerButtons = document.querySelectorAll(".el_hamburger");

  // 各ハンバーガーメニューボタンにイベントリスナーを設定
  hamburgerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // aria-expanded属性の切り替え
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);

      // クリックされたハンバーガーメニューに関連付けられたグローバルナビを取得
      const selector = this.getAttribute("aria-controls");
      const globalNavi = document.getElementById(selector);

      console.log("Selector:", selector); // ここでセレクターをログ出力
      console.log("Global Navi Element:", globalNavi); // ここで取得された要素をログ出力

      // グローバルナビが存在する場合、.activeクラスをトグル
      if (globalNavi) {
        globalNavi.classList.toggle("active");
      }

      // ハンバーガーメニュー自身にも.activeクラスをトグル
      this.classList.toggle("active");
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
      console.log("Slideshow element not found");
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
    this._addNavigation();
    this._initEvents();
  };

  // add the navigation to the DOM　ナビ
  TiltSlider.prototype._addNavigation = function () {
    // add nav "dots"
    this.nav = document.createElement("nav");
    var inner = "";
    for (var i = 0; i < this.itemsCount; ++i) {
      inner += i === 0 ? '<span class="current"></span>' : "<span></span>";
    }
    this.nav.innerHTML = inner;
    this.el.appendChild(this.nav);
    this.navDots = [].slice.call(this.nav.children);
  };

  TiltSlider.prototype._initEvents = function () {
    var self = this;
    this.navDots.forEach(function (dot, idx) {
        dot.addEventListener("click", function () {
            // 現在のアニメーションが進行中でなければ切り替えを実行
            if (!self.isAnimating) {
                self._showItem(idx);
            }
        });
    });
};




TiltSlider.prototype._initEvents = function () {
  var self = this;
  this.navDots.forEach(function (dot, idx) {
      dot.addEventListener("click", function () {
          if (self.isAnimating) return; // アニメーション中は処理を行わない
          
          // idxが現在のスライドインデックスと同じで、それが最後のスライドの場合、最初のスライドへ戻る
          if (idx === self.current && idx === self.itemsCount - 1) {
              self._showItem(0); // 最初のスライドへ
          } else {
              self._showItem(idx); // それ以外の場合はクリックされたスライドへ
          }
      });
  });
};



TiltSlider.prototype._showItem = function(pos) {
  if (this.isAnimating) return false;
  this.isAnimating = true;

  // スライドの範囲を超えていないかチェックし、必要に応じてリセット
  if (pos >= this.itemsCount) {
    pos = 0;
  }

  var self = this,
      currentItem = this.items[this.current], // 現在のアイテム
      nextItem = this.items[pos]; // 次に表示するアイテム

  var outEffect = "slideRightOut",
      inEffect = "slideRightIn";

  currentItem.setAttribute("data-effect-out", outEffect);
  nextItem.setAttribute("data-effect-in", inEffect);

  var onEndAnimationCurrentItem = function() {
      currentItem.removeEventListener(animEndEventName, onEndAnimationCurrentItem);
      classie.removeClass(currentItem, "hide");
      classie.addClass(nextItem, "show");
  };

  var onEndAnimationNextItem = function() {
      nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);
      classie.removeClass(nextItem, "show");
      classie.addClass(nextItem, "current");
      self.isAnimating = false;
  };

  currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);
  nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);

  this.current = pos; // Update the current position
  classie.addClass(currentItem, "hide"); // Start the 'out' animation
};




  // add to global namespace
  window.TiltSlider = TiltSlider;
})(window);

/**
 *
 * ナビを除いて書き直したもの
 */
// (function (window) {
//   "use strict";

//   Modernizr.addTest('csstransformspreserve3d', function () {
//     var prop = Modernizr.prefixed('transformStyle');
//     var val = 'preserve-3d';
//     var computedStyle;
//     if (!prop) return false;

//     prop = prop.replace(/([A-Z])/g, function (str, m1) {
//       return '-' + m1.toLowerCase();
//     }).replace(/^ms-/, '-ms-');

//     Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
//       computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
//     });

//     return (computedStyle === val);
//   });

//   var support = {
//     animations: Modernizr.cssanimations,
//     preserve3d: Modernizr.csstransformspreserve3d,
//     transforms3d: Modernizr.csstransforms3d,
//   },
//   isSupported = support.animations && support.preserve3d && support.transforms3d,
//   animEndEventNames = {
//     WebkitAnimation: "webkitAnimationEnd",
//     OAnimation: "oAnimationEnd",
//     msAnimation: "MSAnimationEnd",
//     animation: "animationend",
//   },
//   animEndEventName = animEndEventNames[Modernizr.prefixed("animation")];

//   function TiltSlider(el, options) {
//     this.el = el;
//     this.items = this.el.querySelector("ol.slides").children;
//     this.itemsCount = this.items.length;
//     if (!this.itemsCount) return;
//     this.current = 0;
//     this._init();
//     this._initEvents();
//   }

//   TiltSlider.prototype._init = function () {
//     this.items[0].classList.add('current');
//   };

//   TiltSlider.prototype._initEvents = function () {
//     var self = this;
//     window.addEventListener("scroll", function () {
//       var newIndex = self._determineItemIndexBasedOnScroll();
//       if (newIndex !== self.current) {
//         self._showItem(newIndex);
//       }
//     });
//   };

//   TiltSlider.prototype._determineItemIndexBasedOnScroll = function () {
//     var scrollY = window.pageYOffset || document.documentElement.scrollTop;
//     var index = Math.min(this.itemsCount - 1, Math.floor(scrollY / 500)); // この500は、スクロール量とアイテムインデックスの比率を調整するためのものです
//     return index;
//   };

//   TiltSlider.prototype._showItem = function (pos) {
//     if (this.isAnimating) return false;
//     this.isAnimating = true;
//     var currentItem = this.items[this.current];
//     var nextItem = this.items[pos];

//     // 現在のアイテムから次のアイテムへのクラスの切り替え
//     currentItem.classList.remove('current');
//     nextItem.classList.add('current');

//     var self = this;
//     var onEndAnimation = function () {
//       self.isAnimating = false;
//       self.current = pos;
//     };

//     if (!isSupported) {
//       onEndAnimation();
//     } else {
//       nextItem.addEventListener(animEndEventName, function evt() {
//         nextItem.removeEventListener(animEndEventName, evt);
//         onEndAnimation();
//       });
//     }
//   };

//   // グローバルな名前空間に追加
//   window.TiltSlider = TiltSlider;
// })(window);

// document.addEventListener("DOMContentLoaded", function () {
//   var el = document.querySelector("#slideshow");
//   if (el) {
//     new TiltSlider(el);
//   } else {
//     console.log("Slideshow element not found");
//   }
// });
