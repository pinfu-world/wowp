/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function () {\n  let unit = 100,\n    canvas,\n    info = {\n      seconds: 0,\n      t: 0\n    },\n    // 初期値を設定\n    colors;\n  function init() {\n    colors = [\"#ffffff\", \"#7BADEF\"];\n    canvas = document.querySelector(\"#waveCanvas\");\n    if (!canvas) return; // canvasがなければ初期化を中断\n\n    canvas.width = document.documentElement.clientWidth;\n    canvas.height = 160;\n    canvas.contextCache = canvas.getContext(\"2d\");\n    startAnimation();\n  }\n  function startAnimation() {\n    if (info.animationFrameId) {\n      cancelAnimationFrame(info.animationFrameId); // 前のアニメーションフレームをキャンセル\n    }\n    update();\n  }\n  function update() {\n    draw();\n\n    // 波の速度を調整\n    info.seconds += 0.007; // ここで波の速度を調整（値を小さくすると速度が遅くなる）\n    info.t = -info.seconds * Math.PI;\n    info.animationFrameId = requestAnimationFrame(update);\n  }\n  function draw() {\n    let context = canvas.contextCache;\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    context.globalAlpha = 0.5;\n    drawWave(colors[0], 3, 0);\n    context.globalAlpha = 1;\n    drawWave(colors[1], 2, 150);\n  }\n  function drawWave(color, zoom, delay) {\n    let context = canvas.contextCache;\n    context.fillStyle = color;\n    context.beginPath();\n    drawSine(info.t / 0.5, zoom, delay);\n    context.lineTo(canvas.width + 10, canvas.height);\n    context.lineTo(0, canvas.height);\n    context.closePath();\n    context.fill();\n  }\n  function drawSine(t, zoom, delay) {\n    let xAxis = Math.floor(canvas.height / 2);\n    let context = canvas.contextCache;\n    for (let i = 0; i <= canvas.width + 10; i += 10) {\n      let x = t + (-0 + i) / unit / zoom;\n      let y = Math.sin(x - delay) / 3;\n\n      // 右側を高く、左側をより低くするための調整を強化\n      let positionFactor = i / canvas.width;\n      // 左側をさらに低くするために、影響を強化する\n      let heightAdjustmentFactor = Math.pow(positionFactor, 1); // 右側が高くなる効果を強化\n      let yOffsetAdjustment = Math.pow(1 - positionFactor, 1) * canvas.height / 2; // 左側をより低くする\n\n      context.lineTo(i, unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment);\n    }\n  }\n  window.addEventListener(\"resize\", init);\n  init();\n})();\n(function () {\n  let unit = 100,\n    canvas,\n    info = {\n      seconds: 0,\n      t: 0\n    },\n    // 初期値を設定\n    colors;\n  function init() {\n    colors = [\"#FFFFFF80\", \"#FAF7D5\"]; // 色を変更します（例: \"#ADD8E6\"はlight blue、\"#6495ED\"はcornflower blue）\n\n    canvas = document.getElementById(\"waveCanvas2\"); // IDを\"waveCanvas2\"に変更\n    if (!canvas) return; // canvasがなければ初期化を中断\n\n    canvas.width = document.documentElement.clientWidth;\n    canvas.height = 160; // 高さを設定\n    canvas.contextCache = canvas.getContext(\"2d\"); // コンテキストをキャッシュ\n\n    startAnimation();\n  }\n  function startAnimation() {\n    if (info.animationFrameId) {\n      cancelAnimationFrame(info.animationFrameId); // 前のアニメーションフレームをキャンセル\n    }\n    update();\n  }\n  function update() {\n    draw();\n\n    // 波の速度を調整\n    info.seconds += 0.007; // ここで波の速度を調整（値を小さくすると速度が遅くなる）\n    info.t = -info.seconds * Math.PI;\n    info.animationFrameId = requestAnimationFrame(update);\n  }\n  function draw() {\n    let context = canvas.contextCache;\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    context.globalAlpha = 0.5;\n    drawWave(colors[0], 3, 0); // 第1の波を描画\n\n    context.globalAlpha = 1;\n    drawWave(colors[1], 2, 150); // 第2の波を描画\n  }\n  function drawWave(color, zoom, delay) {\n    let context = canvas.contextCache;\n    context.fillStyle = color;\n    context.beginPath();\n    drawSine(info.t / 0.5, zoom, delay);\n    context.lineTo(canvas.width + 10, canvas.height);\n    context.lineTo(0, canvas.height);\n    context.closePath();\n    context.fill();\n  }\n  function drawSine(t, zoom, delay) {\n    let xAxis = Math.floor(canvas.height / 2);\n    let context = canvas.contextCache;\n    for (let i = 0; i <= canvas.width + 10; i += 10) {\n      let x = t + (-0 + i) / unit / zoom;\n      let y = Math.sin(x - delay) / 3;\n\n      // 右側を高く、左側をより低くするための調整を強化\n      let positionFactor = i / canvas.width;\n      // 左側をさらに低くするために、影響を強化する\n      let heightAdjustmentFactor = Math.pow(positionFactor, 1); // 右側が高くなる効果を強化\n      let yOffsetAdjustment = Math.pow(1 - positionFactor, 1) * canvas.height / 2; // 左側をより低くする\n\n      context.lineTo(i, unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment);\n    }\n  }\n  window.addEventListener(\"resize\", init);\n  init();\n})();\n(function () {\n  let unit = 100,\n    canvas,\n    info = {\n      seconds: 0,\n      t: 0\n    },\n    // 初期値を設定\n    colors;\n  function init() {\n    colors = [\"#FFFFFF80\", \"#D2E6FF\"];\n    canvas = document.getElementById(\"waveCanvas3\"); // IDを\"waveCanvas3\"に変更\n    if (!canvas) return; // canvasがなければ初期化を中断\n\n    canvas.width = document.documentElement.clientWidth;\n    canvas.height = 160;\n    canvas.contextCache = canvas.getContext(\"2d\");\n    startAnimation();\n  }\n  function startAnimation() {\n    if (info.animationFrameId) {\n      cancelAnimationFrame(info.animationFrameId); // 前のアニメーションフレームをキャンセル\n    }\n    update();\n  }\n  function update() {\n    draw();\n\n    // 波の速度を調整\n    info.seconds += 0.007; // ここで波の速度を調整（値を小さくすると速度が遅くなる）\n    info.t = -info.seconds * Math.PI;\n    info.animationFrameId = requestAnimationFrame(update);\n  }\n  function draw() {\n    let context = canvas.contextCache;\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    context.globalAlpha = 0.5;\n    drawWave(colors[0], 3, 0);\n    context.globalAlpha = 1;\n    drawWave(colors[1], 2, 150);\n  }\n  function drawWave(color, zoom, delay) {\n    let context = canvas.contextCache;\n    context.fillStyle = color;\n    context.beginPath();\n    drawSine(info.t / 0.5, zoom, delay);\n    context.lineTo(canvas.width + 10, canvas.height);\n    context.lineTo(0, canvas.height);\n    context.closePath();\n    context.fill();\n  }\n  function drawSine(t, zoom, delay) {\n    let xAxis = Math.floor(canvas.height / 2);\n    let context = canvas.contextCache;\n    for (let i = 0; i <= canvas.width + 10; i += 10) {\n      let x = t + (-0 + i) / unit / zoom;\n      let y = Math.sin(x - delay) / 3;\n\n      // 右側を高く、左側をより低くするための調整を強化\n      let positionFactor = i / canvas.width;\n      // 左側をさらに低くするために、影響を強化する\n      let heightAdjustmentFactor = Math.pow(positionFactor, 1); // 右側が高くなる効果を強化\n      let yOffsetAdjustment = Math.pow(1 - positionFactor, 1) * canvas.height / 2; // 左側をより低くする\n\n      context.lineTo(i, unit * y * heightAdjustmentFactor + xAxis - yOffsetAdjustment);\n    }\n  }\n  window.addEventListener(\"resize\", init);\n  init();\n})();\n\n// videの場合\n// モーダルを取得\n// let modal = document.querySelector(\".bl_videoModal\");\n\n// // モーダルを開くボタンを取得\n// let btn = document.querySelector(\".bl_videoBlock_link\");\n\n// // モーダルを閉じる<span>要素を取得\n// let span = document.querySelector(\".bl_videoModal_closeBtn\");\n\n// // ビデオ要素を取得\n// let video = modal.querySelector(\"video\");\n\n// // ボタンをクリックするとモーダルを表示し、ビデオを再生\n// btn.addEventListener(\"click\", function (event) {\n//   event.preventDefault(); // デフォルトの動作（リンクの遷移など）をキャンセル\n//   modal.style.display = \"block\";\n//   setTimeout(() => {\n//     modal.classList.add(\"is_show\"); // 少し遅らせて.showクラスを追加\n//     video.play(); // ビデオを再生\n//   }, 10); // DOMが更新されるのを待つために微小な遅延を設ける\n// });\n\n// // <span> (x) またはモーダルの外側をクリックするとモーダルを閉じ、ビデオを停止\n// const closeModal = () => {\n//   modal.classList.remove('is_show'); // .showクラスを削除してフェードアウト\n//   setTimeout(() => {\n//     modal.style.display = \"none\"; // 完全に非表示にする\n//     video.pause(); // ビデオの再生を停止\n//     video.currentTime = 0; // ビデオを最初から再開するために時間をリセット\n//   }, 500); // アニメーションの時間に合わせて遅延を設ける\n// };\n\n// span.onclick = closeModal;\n\n// window.onclick = function(event) {\n//   if (event.target == modal) {\n//     closeModal();\n//   }\n// };\nconst modal = document.querySelector(\".bl_videoModal\");\nif (modal) {\n  // モーダルを開くボタンを取得\n  const btn = document.querySelector(\".bl_videoBlock_link\");\n\n  // モーダルを閉じる<span>要素を取得\n  const span = document.querySelector(\".bl_videoModal_closeBtn\");\n\n  // ビデオ要素を取得\n  const video = modal.querySelector(\"video\");\n  if (btn && span && video) {\n    // ボタンをクリックするとモーダルを表示し、ビデオを再生\n    btn.addEventListener(\"click\", event => {\n      event.preventDefault(); // デフォルトの動作（リンクの遷移など）をキャンセル\n      modal.style.display = \"block\";\n      setTimeout(() => {\n        modal.classList.add(\"is_show\"); // 少し遅らせて.showクラスを追加\n        video.play(); // ビデオを再生\n      }, 10); // DOMが更新されるのを待つために微小な遅延を設ける\n    });\n\n    // <span> (x) またはモーダルの外側をクリックするとモーダルを閉じ、ビデオを停止\n    const closeModal = () => {\n      modal.classList.remove('is_show'); // .showクラスを削除してフェードアウト\n      setTimeout(() => {\n        modal.style.display = \"none\"; // 完全に非表示にする\n        video.pause(); // ビデオの再生を停止\n        video.currentTime = 0; // ビデオを最初から再開するために時間をリセット\n      }, 500); // アニメーションの時間に合わせて遅延を設ける\n    };\n    span.onclick = closeModal;\n    window.onclick = event => {\n      if (event.target == modal) {\n        closeModal();\n      }\n    };\n  } else {\n    console.error(\"Some elements are missing\");\n  }\n} else {\n  // console.error(\"Modal element is missing\");\n}\n\n// グローバルナビ\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // ハンバーガーメニューボタンにイベントリスナーを設定\n  document.querySelectorAll(\".el_hamburger\").forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      const expanded = this.getAttribute(\"aria-expanded\") === \"true\";\n      this.setAttribute(\"aria-expanded\", !expanded);\n      this.classList.toggle(\"active\");\n\n      // 関連するドロワーメニューの取得とトグル\n      const drawer = document.getElementById(this.getAttribute(\"aria-controls\"));\n      if (drawer) {\n        drawer.classList.toggle(\"active\");\n      }\n    });\n  });\n\n  // 全てのナビゲーションリンクにイベントリスナーを追加\n  document.querySelectorAll(\".bl_globalNavi_link a\").forEach(function (link) {\n    link.addEventListener(\"click\", function () {\n      // 全てのドロワーメニューとハンバーガーメニューボタンを処理\n      document.querySelectorAll(\".el_hamburger\").forEach(function (button) {\n        const controls = button.getAttribute(\"aria-controls\");\n        const drawer = document.getElementById(controls);\n        if (drawer && drawer.classList.contains(\"active\")) {\n          drawer.classList.remove(\"active\");\n          button.setAttribute(\"aria-expanded\", \"false\");\n          button.classList.remove(\"active\");\n        }\n      });\n    });\n  });\n});\n\n// 波の非表示\n// ここでは、ボタンのクリックにより波形SVGの表示状態を制御します。\ndocument.querySelector(\".el_hamburger\").addEventListener(\"click\", function () {\n  // .bl_globalNavi_wave1 と .bl_globalNavi_wave2 を取得\n  const wave1 = document.querySelector(\".bl_globalNavi_wave1\");\n  const wave2 = document.querySelector(\".bl_globalNavi_wave2\");\n\n  // 各要素にactiveクラスをトグル\n  wave1.classList.toggle(\"active\");\n  wave2.classList.toggle(\"active\");\n});\n\n// pop\n// ホバー対象の要素を取得\ndocument.addEventListener(\"DOMContentLoaded\", event => {\n  // ホバー対象の要素をすべて取得\n  const appleLinkWrappers = document.querySelectorAll(\".el_appleLink_wrapper\");\n  appleLinkWrappers.forEach(wrapper => {\n    const appLinkPop = wrapper.querySelector(\".el_appLink_pop\"); // 各wrapperに対する.pop要素を取得\n\n    if (appLinkPop) {\n      // ホバー時のイベントリスナーを追加\n      wrapper.addEventListener(\"mouseenter\", function () {\n        // ホバー時に.pop要素に.activeクラスを追加\n        appLinkPop.classList.add(\"active\");\n      });\n\n      // ホバーが解除された時のイベントリスナーを追加\n      wrapper.addEventListener(\"mouseleave\", function () {\n        // ホバー解除時に.pop要素から.activeクラスを削除\n        appLinkPop.classList.remove(\"active\");\n      });\n    }\n  });\n});\n\n// タッチしたとき\ndocument.addEventListener(\"DOMContentLoaded\", event => {\n  const appleLinkWrappers = document.querySelectorAll(\".el_appleLink_wrapper\");\n  appleLinkWrappers.forEach(wrapper => {\n    // .el_appLink_pop を探す\n    const appLinkPop = wrapper.querySelector(\".el_appLink_pop\");\n    if (appLinkPop) {\n      // タップ（touchend）時のイベントリスナーを追加\n      wrapper.addEventListener(\"touchend\", function (e) {\n        // デフォルトのイベントを防止（リンクなどのデフォルト動作をキャンセルするため）\n        e.preventDefault();\n\n        // 他のポップが開いていたら閉じる\n        document.querySelectorAll(\".el_appLink_pop.active\").forEach(activePop => {\n          if (activePop !== appLinkPop) {\n            activePop.classList.remove(\"active\");\n          }\n        });\n\n        // タップされた要素の.popに対して.activeクラスをトグル\n        appLinkPop.classList.toggle(\"active\");\n\n        // イベントの伝播を停止（ドキュメントの他の部分でタッチイベントが捕捉されるのを防ぐ）\n        e.stopPropagation();\n      });\n\n      // ドキュメント全体に対するタッチイベントをリスンし、\n      // タッチされた要素が .el_appLink_pop の外だった場合、active クラスを除去\n      // この部分は、wrapper の外でタップされた場合の挙動を制御するために追加します\n      document.addEventListener(\"touchend\", function (e) {\n        if (!appLinkPop.contains(e.target) && appLinkPop.classList.contains(\"active\")) {\n          appLinkPop.classList.remove(\"active\");\n        }\n      });\n    }\n  });\n});\n\n// ドラッグ操作の追加\nlet isDown = false; // マウスがクリックされているか追跡\nlet startY; // ドラッグ開始のY座標\nlet scrollTop; // ドラッグ開始時のスクロール位置\n\nconst end = () => {\n  isDown = false;\n  document.body.style.cursor = \"\"; // マウスカーソルのスタイルを元に戻す\n};\ndocument.body.addEventListener(\"mousedown\", e => {\n  isDown = true;\n  startY = e.pageY - document.body.offsetTop;\n  scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n  document.body.style.cursor = \"grabbing\"; // ドラッグ中のマウスカーソルのスタイル\n});\ndocument.body.addEventListener(\"mouseleave\", end);\ndocument.body.addEventListener(\"mouseup\", end);\ndocument.body.addEventListener(\"mousemove\", e => {\n  if (!isDown) return; // マウスがクリックされていなければ何もしない\n  e.preventDefault(); // デフォルトのイベントをキャンセル\n  const y = e.pageY - document.body.offsetTop;\n  const walk = (y - startY) * 1; // ドラッグの距離 * スクロール速度\n  window.scrollTo(0, scrollTop - walk);\n});\n\n// anime js\n// if (document.querySelector(\".bl_bubble\")) {\n//   anime({\n//     targets: \".bl_bubble\",\n//     keyframes: [\n//       { scaleX: 1.05, scaleY: 0.95, translateX: -10, translateY: -10, duration: 2000 },\n//       { scaleX: 0.95, scaleY: 1.05, translateX: 10, translateY: 10, duration: 2000 },\n//       { scaleX: 1.1, scaleY: 0.9, translateX: -20, translateY: -20, duration: 2000 },\n//       { scaleX: 0.9, scaleY: 1.1, translateX: 20, translateY: 20, duration: 2000 },\n//       { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, duration: 2000 },\n//       // 追加する不規則な動き\n//       { scaleX: 1.03, scaleY: 0.97, translateX: 15, translateY: -15, duration: 2000 },\n//       { scaleX: 0.97, scaleY: 1.03, translateX: -15, translateY: 15, duration: 2000 },\n//       { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, duration: 2000 },\n//     ],\n//     loop: true,\n//     easing: \"easeInOutSine\",\n//     duration: 10000,\n//   });\n// }\n\n// anime({\n//   targets: \".bl_bubble\",\n//   keyframes: [\n//     { translateX: -10, translateY: -10, duration: 2000 },\n//     { translateX: 10, translateY: 10, duration: 2000 },\n//     { translateX: -20, translateY: -20, duration: 2000 },\n//     { translateX: 20, translateY: 20, duration: 2000 },\n//     { translateX: 0, translateY: 0, duration: 2000 },\n//     { translateX: 15, translateY: -15, duration: 2000 },\n//     { translateX: -15, translateY: 15, duration: 2000 },\n//     { translateX: 0, translateY: 0, duration: 2000 },\n//   ],\n//   loop: true,\n//   easing: \"easeInOutSine\",\n//   duration: 10000,\n// });\n\n// 修正、枠線をうようよ\n// anime({\n//   targets: '.bl_bubble',\n//   rotate: '1turn',\n//   scale: [\n//       {value: 0.95, duration: 5000, easing: 'easeInOutSine'},\n//       {value: 1, duration: 5000, easing: 'easeInOutSine'}\n//   ],\n//   loop: true,\n//   easing: 'easeInOutSine',\n\n// });\n\n// 修正閉じ\n\n// app固定用\nfunction adjustElementPosition() {\n  const element = document.querySelector(\".your-fixed-element\");\n  if (element) {\n    element.style.bottom = \"0\";\n    element.style.left = \"0\";\n  }\n}\n\n// ページ読み込み時と画面サイズ変更時に位置を調整\nwindow.addEventListener(\"load\", adjustElementPosition);\nwindow.addEventListener(\"resize\", adjustElementPosition);\n\n/**\r\n *\r\n *\r\n *\r\n *\r\n *\r\n * fvアニメーション\r\n */\n/**\r\n * tiltSlider.js v1.0.0\r\n * http://www.codrops.com\r\n *\r\n * Licensed under the MIT license.\r\n * http://www.opensource.org/licenses/mit-license.php\r\n *\r\n * Copyright 2014, Codrops\r\n * http://www.codrops.com\r\n */\n(function (window) {\n  \"use strict\";\n\n  // ページにid=\"fv\"が存在するかどうかをチェック\n  var fvElement = document.getElementById(\"fv\");\n  if (!fvElement) {\n    // id=\"fv\"がない場合は、これ以降のコードを実行しない\n    return;\n  }\n  Modernizr.addTest(\"csstransformspreserve3d\", function () {\n    var prop = Modernizr.prefixed(\"transformStyle\");\n    var val = \"preserve-3d\";\n    var computedStyle;\n    if (!prop) return false;\n    prop = prop.replace(/([A-Z])/g, function (str, m1) {\n      return \"-\" + m1.toLowerCase();\n    }).replace(/^ms-/, \"-ms-\");\n    Modernizr.testStyles(\"#modernizr{\" + prop + \":\" + val + \";}\", function (el, rule) {\n      computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : \"\";\n    });\n    return computedStyle === val;\n  });\n  var support = {\n      animations: Modernizr.cssanimations,\n      preserve3d: Modernizr.csstransformspreserve3d,\n      transforms3d: Modernizr.csstransforms3d\n    },\n    isSupported = support.animations && support.preserve3d && support.transforms3d,\n    animEndEventNames = {\n      WebkitAnimation: \"webkitAnimationEnd\",\n      OAnimation: \"oAnimationEnd\",\n      msAnimation: \"MSAnimationEnd\",\n      animation: \"animationend\"\n    },\n    // animation end event name\n    animEndEventName = animEndEventNames[Modernizr.prefixed(\"animation\")];\n  function extend(a, b) {\n    for (var key in b) {\n      if (b.hasOwnProperty(key)) {\n        a[key] = b[key];\n      }\n    }\n    return a;\n  }\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var el = document.querySelector(\"#slideshow\");\n    if (el) {\n      var tiltSlider = new TiltSlider(el); // ここで TiltSlider のインスタンスを作成\n      tiltSlider._initEvents(); // インスタンスに対して initEvents メソッドを直接呼び出す\n    } else {}\n  });\n  function TiltSlider(el, options) {\n    this.el = el;\n    // available effects for the animations (animation class names) - when a item comes in / out\n    this.animEffectsOut = [\"slideRightOut\"];\n    this.animEffectsIn = [\"slideRightIn\"];\n\n    // the items olの子のliを取得\n    this.items = this.el.querySelector(\"ol.slides\").children;\n\n    // total items\n    this.itemsCount = this.items.length;\n    if (!this.itemsCount) return;\n\n    // index of the current item\n    this.current = 0;\n    this.options = extend({}, this.options);\n    extend(this.options, options);\n    this._init();\n  }\n  TiltSlider.prototype.options = {};\n  TiltSlider.prototype._init = function () {\n    // this._addNavigation();\n    this._initEvents();\n    this._initScrollEvents(); // スクロールイベントの初期化\n    this._initDragEvents(); // ドラッグイベントの初期化\n  };\n  TiltSlider.prototype._initScrollEvents = function () {\n    let lastTime = 0;\n    window.addEventListener(\"wheel\", e => {\n      const currentTime = Date.now();\n      if (currentTime - lastTime < 1200) {\n        // 短時間の連続スクロールを無視\n        return;\n      }\n      this._showItem(this.current + 1); // スクロール方向に関わらず次のスライドへ\n\n      lastTime = currentTime; // 最後のスクロール時間を更新\n    });\n  };\n  TiltSlider.prototype._initDragEvents = function () {\n    var self = this,\n      startX;\n    this.el.addEventListener(\"mousedown\", function (e) {\n      startX = e.pageX;\n      self.isDragging = true;\n    });\n    window.addEventListener(\"mousemove\", function (e) {\n      if (!self.isDragging) return;\n    });\n    window.addEventListener(\"mouseup\", function (e) {\n      if (!self.isDragging) return;\n      self.isDragging = false;\n      if (Math.abs(startX - e.pageX) > 100) {\n        // ドラッグ距離が100pxを超えた場合\n        if (self.current === self.itemsCount - 1) {\n          // 最後のスライドであるかチェック\n          document.body.classList.add('fade_out'); // フェードアウトアニメーションを<body>に適用\n          // 'animationend' イベントを<body>に設定\n          document.body.addEventListener('animationend', function () {\n            window.location.href = '../top.html'; // アニメーション完了後に遷移\n          }, {\n            once: true\n          });\n        } else {\n          var newPos = self.current + 1;\n          self._showItem(newPos);\n        }\n      }\n    });\n  };\n  TiltSlider.prototype._initTouchEvents = function () {\n    let startX = 0; // タッチ開始のX座標\n    let startY = 0; // タッチ開始のY座標\n    let moveX = 0; // タッチ移動時のX座標\n    let moveY = 0; // タッチ移動時のY座標\n\n    this.el.addEventListener(\"touchstart\", e => {\n      startX = e.touches[0].pageX;\n      startY = e.touches[0].pageY;\n    });\n    this.el.addEventListener(\"touchmove\", e => {\n      moveX = e.touches[0].pageX;\n      moveY = e.touches[0].pageY;\n    });\n    this.el.addEventListener(\"touchend\", e => {\n      const deltaX = moveX - startX;\n      const deltaY = moveY - startY;\n\n      // スワイプの方向を検出（左右のみ）\n      if (Math.abs(deltaX) > Math.abs(deltaY)) {\n        // 水平方向の移動がより大きい\n        if (deltaX > 50) {\n          // 右にスワイプ\n          this._showItem(this.current - 1); // 前のアイテムを表示\n        } else if (deltaX < -50) {\n          // 左にスワイプ\n          this._showItem(this.current + 1); // 次のアイテムを表示\n        }\n      }\n    });\n  };\n\n  // add the navigation to the DOM　ナビ\n  TiltSlider.prototype._addNavigation = function () {\n    // // add nav \"dots\"\n    // this.nav = document.createElement(\"nav\");\n    // var inner = \"\";\n    // for (var i = 0; i < this.itemsCount; ++i) {\n    //   inner += i === 0 ? '<span class=\"current\"></span>' : \"<span></span>\";\n    // }\n    // this.nav.innerHTML = inner;\n    // this.el.appendChild(this.nav);\n    // this.navDots = [].slice.call(this.nav.children);\n  };\n  TiltSlider.prototype._initEvents = function () {};\n\n  // TiltSlider.prototype._showItem = function (pos) {\n  //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;\n\n  //   this.isAnimating = true;\n\n  //   var currentItem = this.items[this.current]; // 現在のアイテム\n  //   var nextItem = this.items[pos]; // 次に表示するアイテム\n\n  //   if (!currentItem || !nextItem) {\n  //     this.isAnimating = false;\n  //     return;\n  //   }\n\n  //   // スライドの範囲を超えていないかチェックし、必要に応じてリセット\n  //   if (pos >= this.itemsCount) {\n  //     pos = 0;\n  //     nextItem = this.items[pos]; // posのリセット後にnextItemを更新\n  //   }\n\n  //   var self = this;\n  //   var outEffect = \"slideRightOut\";\n  //   var inEffect = \"slideRightIn\";\n\n  //   currentItem.setAttribute(\"data-effect-out\", outEffect);\n  //   nextItem.setAttribute(\"data-effect-in\", inEffect);\n\n  //   // アニメーション終了時の処理\n  //   var onEndAnimationCurrentItem = () => {\n  //     currentItem.removeEventListener(\n  //       animEndEventName,\n  //       onEndAnimationCurrentItem\n  //     );\n  //     currentItem.classList.remove(\"hide\");\n  //     nextItem.classList.add(\"show\");\n  //   };\n\n  //   var onEndAnimationNextItem = function () {\n  //     nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);\n  //     nextItem.classList.remove(\"show\");\n  //     nextItem.classList.add(\"current\");\n  //     self.isAnimating = false;\n  //     // ここで他の必要な処理を行う\n  //   };\n\n  //   // アニメーション終了イベントリスナーを設定\n  //   currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);\n  //   nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);\n\n  //   // アニメーションを開始するためのクラスを適用\n  //   currentItem.classList.add(\"hide\");\n  //   // 次のアイテムへのアニメーションクラスの適用は、\n\n  //   this.current = pos; // 現在の位置を更新\n  // };\n  // 最後に別ページへ遷移\n  // TiltSlider.prototype._showItem = function (pos) {\n  //   if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;\n\n  //   this.isAnimating = true;\n\n  //   var currentItem = this.items[this.current]; // 現在のアイテム\n  //   var nextItem = this.items[pos]; // 次に表示するアイテム\n\n  //   if (!currentItem || !nextItem) {\n  //     this.isAnimating = false;\n  //     return;\n  //   }\n\n  //   // スライドの範囲を超えていないかチェックし、必要に応じてリセット\n  //   if (pos >= this.itemsCount) {\n  //     pos = 0;\n  //     nextItem = this.items[pos]; // posのリセット後にnextItemを更新\n  //   }\n\n  //   var self = this;\n  //   var outEffect = \"slideRightOut\";\n  //   var inEffect = \"slideRightIn\";\n\n  //   currentItem.setAttribute(\"data-effect-out\", outEffect);\n  //   nextItem.setAttribute(\"data-effect-in\", inEffect);\n\n  //   // アニメーション終了時の処理\n  //   var onEndAnimationCurrentItem = () => {\n  //     currentItem.removeEventListener(animEndEventName, onEndAnimationCurrentItem);\n  //     currentItem.classList.remove(\"hide\");\n  //     nextItem.classList.add(\"show\");\n  //   };\n\n  //   var onEndAnimationNextItem = function () {\n  //     nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);\n  //     nextItem.classList.remove(\"show\");\n  //     nextItem.classList.add(\"current\");\n  //     self.isAnimating = false;\n\n  //     // 最後のスライドの後にページ遷移する処理\n  //     if (pos === self.itemsCount - 1) {\n  //       window.location.href = '../top.html'; // ここに遷移させたいページのURLを指定\n  //     }\n  //   };\n\n  //   // アニメーション終了イベントリスナーを設定\n  //   currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);\n  //   nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);\n\n  //   currentItem.classList.add(\"hide\"); // アニメーションを開始するためのクラスを適用\n\n  //   this.current = pos; // 現在の位置を更新\n  // };\n\n  // _showItem メソッドの改修版\n  TiltSlider.prototype._showItem = function (pos) {\n    if (this.isAnimating || pos < 0 || pos >= this.itemsCount) return false;\n    this.isAnimating = true;\n    var currentItem = this.items[this.current];\n    var nextItem = this.items[pos];\n    if (!currentItem || !nextItem) {\n      this.isAnimating = false;\n      return;\n    }\n    if (pos >= this.itemsCount) {\n      pos = 0;\n      nextItem = this.items[pos];\n    }\n    var self = this;\n    currentItem.setAttribute(\"data-effect-out\", \"slideRightOut\");\n    nextItem.setAttribute(\"data-effect-in\", \"slideRightIn\");\n    var onEndAnimationCurrentItem = function () {\n      currentItem.removeEventListener(animEndEventName, onEndAnimationCurrentItem);\n      currentItem.classList.remove(\"hide\");\n      nextItem.classList.add(\"show\");\n    };\n    var onEndAnimationNextItem = function () {\n      nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);\n      nextItem.classList.remove(\"show\");\n      nextItem.classList.add(\"current\");\n      self.isAnimating = false;\n\n      // 最後のスライドの後にページ遷移する処理\n      if (pos === self.itemsCount - 1) {\n        self._setupTransitionEventsForLastSlide(); // 最後のスライドでのイベントリスナーを設定\n      }\n    };\n\n    // アニメーション終了イベントリスナーを設定\n    currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);\n    nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);\n    currentItem.classList.add(\"hide\");\n    nextItem.classList.remove(\"current\");\n    this.current = pos; // 現在の位置を更新\n  };\n\n  // 最後のスライドでのページ遷移をトリガーするためのイベントリスナーを設定する\n  TiltSlider.prototype._setupTransitionEventsForLastSlide = function () {\n    var self = this;\n\n    // スクロールによるページ遷移のトリガー\n    var handleScrollToTransition = function (event) {\n      window.removeEventListener('wheel', handleScrollToTransition); // 一度のスクロールで1回だけ発火\n      window.location.href = '../top.html'; // ここに遷移先のURLを設定\n    };\n\n    // ドラッグ（マウスまたはタッチ操作）によるページ遷移のトリガー\n    var handleDragEndToTransition = function (event) {\n      window.removeEventListener('mouseup', handleDragEndToTransition);\n      window.removeEventListener('touchend', handleDragEndToTransition); // 一度のドラッグで1回だけ発火\n      window.location.href = '../top.html'; // ここに遷移先のURLを設定\n    };\n\n    // イベントリスナーを追加\n    window.addEventListener('wheel', handleScrollToTransition);\n    window.addEventListener('mouseup', handleDragEndToTransition);\n    window.addEventListener('touchend', handleDragEndToTransition);\n  };\n\n  // add to global namespace\n  window.TiltSlider = TiltSlider;\n})(window);\n\n/**\r\n * Gsap\r\n */\n\nif (document.body.id === \"frontPage\") {\n  gsap.registerPlugin(ScrollTrigger);\n  console.log(\"p_top\");\n  gsap.utils.toArray(\".scroll-fade-in\").forEach(function (element) {\n    gsap.from(element, {\n      duration: 1.5,\n      y: 50,\n      opacity: 0,\n      ease: \"power4.inOut\",\n      // イージング関数を調整\n      scrollTrigger: {\n        trigger: element,\n        start: \"top 90%\",\n        // 画面の上から90%の位置でアニメーションを開始\n        toggleActions: \"play none none none\"\n      }\n    });\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var transitionLinks = document.querySelectorAll(\".transition-link\");\n  transitionLinks.forEach(function (link) {\n    link.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // リンクのデフォルト動作を停止\n\n      var href = this.getAttribute(\"href\"); // リンク先のURLを取得\n\n      // ここでアニメーションを実行...\n      gsap.to(\"#content\", {\n        opacity: 0,\n        duration: 0.5,\n        onComplete: function () {\n          window.location.href = href; // アニメーション完了後にリンク先に遷移\n        }\n      });\n    });\n  });\n});\n\n// 流体アニメーションfv\n// 流体アニメーション設定値\nconst randomness = 300,\n  // 振れ幅（例：90の場合は0〜90の値になる）\n  threshold = 500; // しきい値\n// 流体アニメーション関数を定義\n// const fluid = function () {\n//   // animate関数を使用\n//   $(\".bl_bubble_img\").animate(\n//     {\n//       borderTopLeftRadius: String(\n//         Math.round(Math.random() * randomness + threshold) + \"px\"\n//       ),\n//       borderTopRightRadius: String(\n//         Math.round(Math.random() * randomness + threshold) + \"px\"\n//       ),\n//       borderBottomLeftRadius: String(\n//         Math.round(Math.random() * randomness + threshold) + \"px\"\n//       ),\n//       borderBottomRightRadius: String(\n//         Math.round(Math.random() * randomness + threshold) + \"px\"\n//       ),\n//       // borderWidth: String(Math.round(Math.random() * borderRandomness + borderThreshold) + \"px\"),\n//     },\n//     {\n//       duration: 800,\n//       easing: \"easeInOutQuad\", // より滑らかな動きに\n//       complete: fluid,\n//     }\n//   );\n// };\n// cssの方がなめらか？\nfunction fluid() {\n  $(\".bl_bubble_img\").css({\n    borderTopLeftRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n    borderTopRightRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n    borderBottomLeftRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n    borderBottomRightRadius: Math.round(Math.random() * randomness + threshold) + \"px\"\n  });\n  setTimeout(fluid, 800); // 800ミリ秒ごとに再帰的に実行\n}\n// requestAnimationFrameを使用\n// function fluid() {\n//   // バブルの枠に合わせてスタイルを変更\n//   $(\".bl_bubble_img\").css({\n//     borderTopLeftRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n//     borderTopRightRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n//     borderBottomLeftRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n//     borderBottomRightRadius: Math.round(Math.random() * randomness + threshold) + \"px\",\n//   });\n\n//   // 次のフレームでこの関数を再度実行\n//   window.requestAnimationFrame(fluid);\n// }\n\n// window.requestAnimationFrame(fluid);\n\n// 流体アニメーション関数を実行\nfluid();\n\n//# sourceURL=webpack://wowp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;