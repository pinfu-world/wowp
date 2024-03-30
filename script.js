// 変な形の穴

// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const image = new Image();
//     image.src = './assets/img/iphpne15_fv.png'; // 画像のパスを指定
//     image.onload = () => {
//         requestAnimationFrame(draw);
//     };

//     let time = 0;

//     function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(image, (canvas.width - 500) / 2, (canvas.height - 500) / 2, 500, 500);
//         ctx.fillStyle = 'rgba(220, 220, 220, 1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         ctx.globalCompositeOperation = 'destination-out';

//         // ゆがんだ円を描画
//         ctx.beginPath();
//         const centerX = canvas.width / 2;
//         const centerY = canvas.height / 2;
//         let radius = 50 + Math.sin(time) * 25; // 半径を動的に変更
//         for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
//             radius += Math.sin(time + angle * 5) * 2; // 円周上の各点で半径に変化を加える
//             const x = centerX + radius * Math.cos(angle);
//             const y = centerY + radius * Math.sin(angle);
//             if (angle === 0) {
//                 ctx.moveTo(x, y);
//             } else {
//                 ctx.lineTo(x, y);
//             }
//         }
//         ctx.closePath();
//         ctx.fill();

//         ctx.globalCompositeOperation = 'source-over';

//         time += 0.05;
//         requestAnimationFrame(draw);
//     };
// });


// 　ラディアスの変化。不自然
// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const image = new Image();
//     image.src = './assets/img/iphpne15_fv.png'; // 画像のパスを指定
//     let time = 0;

//     // キーフレームに基づいた形状のパラメータ
//     const keyframes = [
//         [63, 37, 54, 46, 55, 48, 52, 45],
//         [50, 50, 50, 50, 50, 50, 50, 50],
//         // 以下、他のキーフレームを省略
//         [63, 37, 54, 46, 55, 48, 52, 45] // 最後のキーフレームは最初と同じでループ
//     ];

//     // 現在のキーフレームと次のキーフレームの間の補間を計算
//     function interpolateKeyframes(t) {
//         const totalFrames = keyframes.length;
//         const frameIndex = Math.floor(t / 100 * totalFrames) % totalFrames;
//         const nextFrameIndex = (frameIndex + 1) % totalFrames;
//         const fraction = (t / 100 * totalFrames) % 1; // 現在のフレーム内での進行度

//         return keyframes[frameIndex].map((start, i) => {
//             const end = keyframes[nextFrameIndex][i];
//             return start + (end - start) * fraction; // 線形補間
//         });
//     }

//     function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(image, (canvas.width - 500) / 2, (canvas.height - 500) / 2, 500, 500);

//         // 背景を塗りつぶし
//         ctx.fillStyle = 'rgba(220, 220, 220, 1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         // 流体的な形状を描画
//         const shapeParams = interpolateKeyframes(time);
//         ctx.globalCompositeOperation = 'destination-out';
//         drawFluidShape(ctx, canvas.width / 2, canvas.height / 2, shapeParams);
//         ctx.globalCompositeOperation = 'source-over';

//         time = (time + 0.5) % 100; // 時間を更新し、100でループ
//         requestAnimationFrame(draw);
//     }

//     function drawFluidShape(ctx, centerX, centerY, shapeParams) {
//         ctx.beginPath();
//         const radius = 150; // 形状の基本半径
//         for (let i = 0; i < 360; i += 1) {
//             const angle = i * Math.PI / 180;
//             const index = Math.floor(i / 45) % 8; // 45度ごとにパラメータを変更
//             const mod = shapeParams[index] / 50; // 形状の変形度を適用
//             const x = centerX + radius * mod * Math.cos(angle);
//             const y = centerY + radius * mod * Math.sin(angle);
//             if (i === 0) {
//                 ctx.moveTo(x, y);
//             } else {
//                 ctx.lineTo(x, y);
//             }
//         }
//         ctx.closePath();
//         ctx.fill();
//     }

//     image.onload = () => {
//         requestAnimationFrame(draw);
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const image = new Image();
//     image.src = './assets/img/iphpne15_fv.png'; // 画像のパスを正確に設定してください
//     let time = 0;

//     image.onload = () => {
//         console.log("Image loaded successfully");
//         requestAnimationFrame(draw);
//     };

//     image.onerror = (error) => {
//         console.error("Error loading the image", error);
//     };

//     function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(image, (canvas.width - 500) / 2, (canvas.height - 500) / 2, 500, 500);

//         // 背景を塗りつぶし
//         ctx.fillStyle = 'rgba(220, 220, 220, 1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         // ゆがんだ円を描画
//         ctx.globalCompositeOperation = 'destination-out';
//         drawWobblyCircle(ctx, canvas.width / 2, canvas.height / 2, time);
//         ctx.globalCompositeOperation = 'source-over';

//         time += 0.05;
//         requestAnimationFrame(draw);
//     }

//     function drawWobblyCircle(ctx, centerX, centerY, time) {
//         const baseRadius = 100; // 基本の半径を大きくする
//         const amplitude = 50; // 半径の振幅を大きくする
//         const frequency = 0.05; // 半径の変化の頻度（このままでもよい）
//         const radius = baseRadius + Math.sin(time * frequency) * amplitude; // 半径の変動
    
//         ctx.beginPath();
//         for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
//             // 各点にわずかなランダムな変動を加える
//             const randomOffset = 5 * Math.random();
//             const r = radius + randomOffset; // ここで使用する半径にランダムな変動を加える
//             const x = centerX + r * Math.cos(angle);
//             const y = centerY + r * Math.sin(angle);
//             if (angle === 0) {
//                 ctx.moveTo(x, y);
//             } else {
//                 ctx.lineTo(x, y);
//             }
//         }
//         ctx.closePath();
//         ctx.fill();
//     }
    
// });

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 背景を塗りつぶし
        ctx.fillStyle = 'rgba(220, 220, 220, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // ゆがんだ円を描画
        ctx.globalCompositeOperation = 'destination-out';
        drawWobblyCircle(ctx, canvas.width / 2, canvas.height / 2, time);
        ctx.globalCompositeOperation = 'source-over';

        time += 0.05;
        requestAnimationFrame(draw);
    }

    // function drawWobblyCircle(ctx, centerX, centerY, time) {
    //     const baseRadius = 100; // 基本の半径
    //     const amplitude = 50; // 半径の振幅
    //     const frequency = 0.05; // 半径の変化の頻度
    //     const radius = baseRadius + Math.sin(time * frequency) * amplitude; // 半径の変動

    //     ctx.beginPath();
    //     for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    //         // 各点にわずかなランダムな変動を加える
    //         const randomOffset = 5 * Math.random();
    //         const r = radius + randomOffset; // 半径にランダムな変動を加える
    //         const x = centerX + r * Math.cos(angle);
    //         const y = centerY + r * Math.sin(angle);
    //         if (angle === 0) {
    //             ctx.moveTo(x, y);
    //         } else {
    //             ctx.lineTo(x, y);
    //         }
    //     }
    //     ctx.closePath();
    //     ctx.fill();
    // }

    // function drawWobblyCircle(ctx, centerX, centerY, time) {
    //     const baseRadius = 100; // 基本の半径
    //     const amplitude = 50; // 半径の振幅
    //     const frequency = 0.05; // 半径の変化の頻度
    //     const radius = baseRadius + Math.sin(time * frequency) * amplitude; // 半径の変動
    
    //     // 枠線の太さを指定
    //     ctx.lineWidth = 10; // 枠線の太さ
    
    //     // 枠線の色を指定
    //     ctx.strokeStyle = '#FF0000'; // 枠線の色（赤）
    
    //     ctx.beginPath();
    //     for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    //         const randomOffset = 5 * Math.random();
    //         const r = radius + randomOffset; // 半径にランダムな変動を加える
    //         const x = centerX + r * Math.cos(angle);
    //         const y = centerY + r * Math.sin(angle);
    //         if (angle === 0) {
    //             ctx.moveTo(x, y);
    //         } else {
    //             ctx.lineTo(x, y);
    //         }
    //     }
    //     ctx.closePath();
    
    //     // ここで'globalCompositeOperation'を使用して穴を作る
    //     ctx.globalCompositeOperation = 'destination-out';
    //     ctx.fill(); // 塗りつぶしで「穴」を作成
    
    //     // 枠線を描画
    //     ctx.globalCompositeOperation = 'source-over';
    //     ctx.stroke(); // 枠線を描画
    // }
    
    // function drawWobblyCircle(ctx, centerX, centerY, time) {
    //     const baseRadius = 100; // 基本の半径
    //     const amplitude = 30; // 半径の振幅を小さくして変化を滑らかに
    //     const frequency = 0.02; // 半径の変化の頻度を下げてゆっくりとした動きに
    //     const radius = baseRadius + Math.sin(time * frequency) * amplitude; // 半径の変動
    
    //     // 枠線の太さを指定
    //     ctx.lineWidth = 10; // 枠線の太さ
    
    //     // 枠線の色を指定
    //     ctx.strokeStyle = '#FF0000'; // 枠線の色（赤）
    
    //     ctx.beginPath();
    //     for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    //         const randomOffset = 2 * Math.random(); // ランダムな変動を小さくする
    //         const r = radius + randomOffset; // 半径にランダムな変動を加える
    //         const x = centerX + r * Math.cos(angle);
    //         const y = centerY + r * Math.sin(angle);
    //         if (angle === 0) {
    //             ctx.moveTo(x, y);
    //         } else {
    //             ctx.lineTo(x, y);
    //         }
    //     }
    //     ctx.closePath();
    
    //     // 'destination-out'で穴を開ける前に、枠線を描画
    //     ctx.stroke(); // 枠線を描画
    
    //     ctx.globalCompositeOperation = 'destination-out';
    //     ctx.fill(); // 塗りつぶしで「穴」を作成
    
    //     // 次の描画のために合成オペレーションを元に戻す
    //     ctx.globalCompositeOperation = 'source-over';
    // }

    // function drawWobblyCircle(ctx, centerX, centerY, time) {
    //     const baseRadius = 100; // 基本の半径
    //     const amplitude = 50; // 半径の振幅
    //     const frequency = 0.05; // 半径の変化の頻度
    //     const radius = baseRadius + Math.sin(time * frequency) * amplitude; // 半径の変動
    
    //     // 枠線の色と太さを指定
    //     ctx.lineWidth = 10; // 枠線の太さ
    //     ctx.strokeStyle = '#FF0000'; // 枠線の色（赤）
    
    //     // 枠線用のパスを作成（実際の描画は後で）
    //     ctx.beginPath();
    //     for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    //         const randomOffset = 0.1 * Math.random();
    //         const r = radius + randomOffset; // 半径にランダムな変動を加える
    //         const x = centerX + r * Math.cos(angle);
    //         const y = centerY + r * Math.sin(angle);
    //         if (angle === 0) {
    //             ctx.moveTo(x, y);
    //         } else {
    //             ctx.lineTo(x, y);
    //         }
    //     }
    //     ctx.closePath();
    
    //     // 'destination-out'で穴を開ける
    //     ctx.globalCompositeOperation = 'destination-out';
    //     ctx.fill(); // 塗りつぶしで「穴」を作成
    
    //     // 枠線を描画（'destination-out'の影響を受けないように）
    //     ctx.globalCompositeOperation = 'source-over';
    //     ctx.stroke(); // 枠線を描画
    // }

    function drawWobblyCircle(ctx, centerX, centerY, time) {
        const baseRadius = 100; // 基本の半径
        const amplitude = 50; // 半径の振幅
        const frequency = 0.05; // 半径の変化の頻度
        // 半径にランダムな変動を加える部分を削除または減少させる
        const randomOffset = 0; // ギザギザを減らすためにランダムオフセットを0にする
    
        ctx.beginPath();
        for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
            // 半径の変動を加えるが、ランダム性は除去
            const r = baseRadius + Math.sin(time * frequency) * amplitude + randomOffset;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (angle === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
    
        ctx.lineWidth = 10; // 枠線の太さ
        ctx.strokeStyle = '#FF0000'; // 枠線の色
    
        // 描画の順番を保持
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fill(); // 塗りつぶしで「穴」を作成
    
        ctx.globalCompositeOperation = 'source-over';
        ctx.stroke(); // 枠線を描画
    }
    
    
    

    // 描画関数を呼び出す際に中心点の座標を調整
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 背景を塗りつぶし
    ctx.fillStyle = 'rgba(220, 220, 220, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ゆがんだ円を描画（中心点を右半分に設定）
    ctx.globalCompositeOperation = 'destination-out';
    drawWobblyCircle(ctx, canvas.width * 3 / 4, canvas.height / 2, time); // ここで中心点を調整
    ctx.globalCompositeOperation = 'source-over';

    time += 0.05;
    requestAnimationFrame(draw);
}

    requestAnimationFrame(draw);
});

// ウィンドウのリサイズイベントに対応する関数を定義
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(); // Canvasを再描画
}

// ウィンドウのリサイズイベントリスナーを追加
window.addEventListener('resize', resizeCanvas);

// 初期ロード時にもCanvasサイズを設定
resizeCanvas();



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
