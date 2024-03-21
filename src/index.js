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
        let yOffsetAdjustment = Math.pow(1 - positionFactor, 1) * canvas.height / 2; // 左側をより低くする

        context.lineTo(i, unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment);
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
document.addEventListener("DOMContentLoaded", function() {
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
document.querySelector(".el_hamburger").addEventListener("click", function () {
  const globalNavi = document.querySelector(".bl_globalNavi");
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  globalNavi.classList.toggle("active"); // activeクラスをトグル
});

document.querySelector(".el_hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
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
// anime({
//   targets: '.bl_bubble',
//   keyframes: [
//     {scaleX: 1.05, scaleY: 0.95, translateY: -10, duration: 2000},
//     {scaleX: 0.95, scaleY: 1.05, translateY: 10, duration: 2000},
//     {scaleX: 1.1, scaleY: 0.9, translateY: -20, duration: 2000},
//     {scaleX: 0.9, scaleY: 1.1, translateY: 20, duration: 2000},
//     {scaleX: 1, scaleY: 1, translateY: 0, duration: 2000}
//   ],
//   loop: true,
//   easing: 'easeInOutSine',
//   duration: 10000
// });

// anime js

if (document.querySelector(".bl_bubble")) {
  anime({
    targets: ".bl_bubble",
    keyframes: [
      { scaleX: 1.05, scaleY: 0.95, translateY: -10, duration: 2000 },
      { scaleX: 0.95, scaleY: 1.05, translateY: 10, duration: 2000 },
      { scaleX: 1.1, scaleY: 0.9, translateY: -20, duration: 2000 },
      { scaleX: 0.9, scaleY: 1.1, translateY: 20, duration: 2000 },
      { scaleX: 1, scaleY: 1, translateY: 0, duration: 2000 },
    ],
    loop: true,
    easing: "easeInOutSine",
    duration: 10000,
  });
}

// app固定用
function adjustElementPosition() {
  const element = document.querySelector('.your-fixed-element');
  if (element) {
      element.style.bottom = '0';
      element.style.left = '0';
  }
}

// ページ読み込み時と画面サイズ変更時に位置を調整
window.addEventListener('load', adjustElementPosition);
window.addEventListener('resize', adjustElementPosition);
