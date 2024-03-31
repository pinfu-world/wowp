// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   let time = 0;

// //   function draw() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     // 背景を塗りつぶし
// //     ctx.fillStyle = "rgba(220, 220, 220, 1)";
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);

// //     // ゆがんだ円を描画
// //     ctx.globalCompositeOperation = "destination-out";
// //     drawWobblyCircle(ctx, canvas.width / 2, canvas.height / 2, time);
// //     ctx.globalCompositeOperation = "source-over";

// //     time += 0.05;
// //     requestAnimationFrame(draw);
// //   }


// //   function drawWobblyCircle(ctx, centerX, centerY, time) {
// //     const baseRadius = 100; // 基本の半径
// //     const amplitude = 50; // 半径の振幅
// //     const frequency = 0.05; // 半径の変化の頻度
// //     // 半径にランダムな変動を加える部分を削除または減少させる
// //     const randomOffset = 0; // ギザギザを減らすためにランダムオフセットを0にする

// //     ctx.beginPath();
// //     for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
// //       // 半径の変動を加えるが、ランダム性は除去
// //       const r =
// //         baseRadius + Math.sin(time * frequency) * amplitude + randomOffset;
// //       const x = centerX + r * Math.cos(angle);
// //       const y = centerY + r * Math.sin(angle);
// //       if (angle === 0) {
// //         ctx.moveTo(x, y);
// //       } else {
// //         ctx.lineTo(x, y);
// //       }
// //     }
// //     ctx.closePath();

// //     ctx.lineWidth = 10; // 枠線の太さ
// //     ctx.strokeStyle = "#FF0000"; // 枠線の色

// //     // 描画の順番を保持
// //     ctx.globalCompositeOperation = "destination-out";
// //     ctx.fill(); // 塗りつぶしで「穴」を作成

// //     ctx.globalCompositeOperation = "source-over";
// //     ctx.stroke(); // 枠線を描画
// //   }

// function drawWobblyCircle(ctx, centerX, centerY, time) {
//     const baseRadius = 100; // 基本の半径
//     const amplitude = 50; // 半径の振幅
//     const frequency = 0.05; // 半径の変化の頻度

//     // 形状変化のための時間依存パラメータを計算（0から1の間を循環）
//     const shapeTransition = (Math.sin(time) + 1) / 2;

//     ctx.beginPath();

//     for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
//         // 円形と四角形の半径の計算
//         let r = baseRadius;
//         if (shapeTransition < 0.5) {
//             // 円形に近づける
//             r += Math.sin(time * frequency) * amplitude * (1 - shapeTransition * 2);
//         } else {
//             // 四角形に近づける
//             // 四角形の辺に沿って動くように半径を調整
//             let xFactor = Math.cos(angle);
//             let yFactor = Math.sin(angle);
//             r += Math.max(Math.abs(xFactor), Math.abs(yFactor)) * amplitude * ((shapeTransition - 0.5) * 2);
//         }

//         const x = centerX + r * Math.cos(angle);
//         const y = centerY + r * Math.sin(angle);

//         if (angle === 0) {
//             ctx.moveTo(x, y);
//         } else {
//             ctx.lineTo(x, y);
//         }
//     }

//     ctx.closePath();
//     ctx.lineWidth = 10;
//     ctx.strokeStyle = "#FF0000";
//     ctx.globalCompositeOperation = "destination-out";
//     ctx.fill(); // 塗りつぶしで「穴」を作成
//     ctx.globalCompositeOperation = "source-over";
//     ctx.stroke(); // 枠線を描画
// }


  
//   // 描画関数を呼び出す際に中心点の座標を調整
//   function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // 背景を塗りつぶし
//     ctx.fillStyle = "rgba(220, 220, 220, 1)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // ゆがんだ円を描画（中心点を右半分に設定）
//     ctx.globalCompositeOperation = "destination-out";
//     drawWobblyCircle(ctx, (canvas.width * 3) / 4, canvas.height / 2, time); // ここで中心点を調整
//     ctx.globalCompositeOperation = "source-over";

//     time += 0.05;
//     requestAnimationFrame(draw);
//   }

//   requestAnimationFrame(draw);
// });

// // ウィンドウのリサイズイベントに対応する関数を定義
// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   if (typeof draw === "function") {
//     draw(); // Canvasを再描画
//   }
// }

// // ウィンドウのリサイズイベントリスナーを追加
// window.addEventListener("resize", resizeCanvas);

// // 初期ロード時にもCanvasサイズを設定
// resizeCanvas();

// 画像が表示されているか実験
// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const image = new Image();
//     image.src = './assets/img/iphpne15_fv.png'; // 画像のパスを正確に設定してください
//     image.onload = () => {
//         console.log("Image loaded successfully");
//         draw();
//     };

//     image.onerror = (error) => {
//         console.error("Error loading the image", error);
//     };

//     function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         // 画像をCanvasの中央に表示
//         const x = (canvas.width - image.width) / 2;
//         const y = (canvas.height - image.height) / 2;
//         ctx.drawImage(image, x, y);
//     }
// });

/**
 * ギザギザの変なやつ
 */
// document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let time = 0;

//     function drawShapeTransition(ctx, centerX, centerY, time) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         ctx.fillStyle = "rgba(220, 220, 220, 1)";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         let shapeTransition = Math.sin(time) * 0.5 + 0.5;
//         const radius = 100;
//         const noiseIntensity = 5; // ノイズの強度
//         const steps = 100;
//         const step = (Math.PI * 2) / steps;

//         ctx.beginPath();
//         for (let i = 0; i <= steps; i++) {
//             let angle = step * i;
//             let t = shapeTransition * Math.PI / 4;
//             let x = radius * Math.cos(angle + t) / Math.cos(t);
//             let y = radius * Math.sin(angle + t) / Math.cos(t);

//             // 四角形と円形の間の補間
//             x = x * (1 - shapeTransition) + radius * Math.sign(x) * shapeTransition;
//             y = y * (1 - shapeTransition) + radius * Math.sign(y) * shapeTransition;

//             // ランダムな変動を加える
//             x += (Math.random() - 0.5) * noiseIntensity;
//             y += (Math.random() - 0.5) * noiseIntensity;

//             if (i == 0) {
//                 ctx.moveTo(centerX + x, centerY + y);
//             } else {
//                 ctx.lineTo(centerX + x, centerY + y);
//             }
//         }
//         ctx.closePath();

//         ctx.globalCompositeOperation = "destination-out";
//         ctx.fill();
//         ctx.globalCompositeOperation = "source-over";
//         ctx.lineWidth = 5;
//         ctx.strokeStyle = "#FF0000";
//         ctx.stroke();

//         time += 0.05;
//         requestAnimationFrame(() => drawShapeTransition(ctx, centerX, centerY, time));
//     }

//     drawShapeTransition(ctx, canvas.width / 2, canvas.height / 2, time);
// });


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    /**
     * 止まったり動いたり
     */
    // function drawShapeTransition(ctx, centerX, centerY, time) {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //     // 背景を再描画（透明な部分を見せるため）
    //     ctx.fillStyle = "rgba(220, 220, 220, 1)";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    //     let shapeTransition = Math.sin(time) * 0.5 + 0.5;
    //     const radius = 100; // 基本の半径
    //     const steps = 100; // 形状を構成する点の数
    //     const step = (Math.PI * 2) / steps;
    
    //     // 流体的な動きを加えるためのパラメータ
    //     let fluidity = 2; // 流動性の強さ
    //     let frequency = 5; // 変動の頻度
    
    //     ctx.beginPath();
    //     for (let i = 0; i <= steps; i++) {
    //         let angle = step * i;
    //         // 流体的な動きを再現するための半径の変動
    //         let dynamicRadius = radius + Math.sin(time * frequency + angle * frequency) * fluidity * shapeTransition;
            
    //         // 半径の変動を加えた座標を計算
    //         let x = centerX + dynamicRadius * Math.cos(angle);
    //         let y = centerY + dynamicRadius * Math.sin(angle);
    
    //         if (i == 0) {
    //             ctx.moveTo(x, y);
    //         } else {
    //             ctx.lineTo(x, y);
    //         }
    //     }
    //     ctx.closePath();
    
    //     // "destination-out"を使って形状の内部をクリアし、穴を作成
    //     ctx.globalCompositeOperation = "destination-out";
    //     ctx.fill();
    
    //     // 通常の描画モードに戻す
    //     ctx.globalCompositeOperation = "source-over";
    //     ctx.lineWidth = 5;
    //     ctx.strokeStyle = "#FF0000"; // 枠線の色
    //     ctx.stroke(); // 形状の外枠を描画
    
    //     time += 0.05;
    //     requestAnimationFrame(() => drawShapeTransition(ctx, centerX, centerY, time));
    // }
    
    
    /**
     * 分割線でなめらかになった
     */
    // function drawShapeTransition(ctx, centerX, centerY, time) {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        
    //     // 背景を再描画（透明な部分を見せるため）
    //     ctx.fillStyle = "rgba(220, 220, 220, 1)";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    //     const radius = 100; // 基本の半径
    //     const steps = 100; // 形状を構成する点の数を減らす
    //     const step = (Math.PI * 2) / steps;
    
    //     ctx.beginPath();
    //     for (let i = 0; i <= steps; i++) {
    //         // 時間経過と角度に基づいた半径の変動を導入
    //         let angle = step * i;
    //         let dynamicRadius = radius + Math.sin(time * 0.2 + angle * 2) * 30; // 動きを変えてみる
            
    //         let x = centerX + dynamicRadius * Math.cos(angle);
    //         let y = centerY + dynamicRadius * Math.sin(angle);
            
    //         if (i == 0) {
    //             ctx.moveTo(x, y);
    //         } else {
    //             ctx.lineTo(x, y);
    //         }
    //     }
    //     ctx.closePath();
        
    //     ctx.globalCompositeOperation = "destination-out";
    //     ctx.fill();
    //     ctx.globalCompositeOperation = "source-over";
    //     ctx.lineWidth = 5;
    //     ctx.strokeStyle = "#FF0000";
    //     ctx.stroke();
    
    //     time += 0.05; // 時間の進行
    //     requestAnimationFrame(() => drawShapeTransition(ctx, centerX, centerY, time));
    // }

    // 仮定：simplenoiseがすでに読み込まれていること
// noise.seed(Math.random());

function drawShapeTransition(ctx, centerX, centerY, time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "rgba(220, 220, 220, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const radius = 100;
    const steps = 100;
    const step = (Math.PI * 2) / steps;

    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
        let angle = step * i;
        // Perlinノイズを半径に適用
        let noiseScale = 20; // ノイズのスケールを調整
        let noiseValue = noise.simplex3(centerX + Math.cos(angle) * radius / 100, centerY + Math.sin(angle) * radius / 100, time * 0.5);
        let dynamicRadius = radius + noiseValue * 5; // ノイズに基づく半径の変動
        
        let x = centerX + dynamicRadius * Math.cos(angle);
        let y = centerY + dynamicRadius * Math.sin(angle);
        
        if (i == 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    
    ctx.globalCompositeOperation = "destination-out";
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();

    time += 0.015;
    requestAnimationFrame(() => drawShapeTransition(ctx, centerX, centerY, time));
}

    
    

    drawShapeTransition(ctx, canvas.width / 2, canvas.height / 2, time);
});
