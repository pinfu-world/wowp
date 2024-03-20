<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Three.js Transition Example</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
    </style>
</head>
<body>
    <!-- three.jsのシーンを描画するためのコンテナ -->
    <div id="three-container"></div>
    <!-- その他のページコンテンツ -->
    <div>静的なコンテンツ</div>
    <button id="animate-button">アニメーション開始</button>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // three.jsの基本的なセットアップ
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('three-container').appendChild(renderer.domElement);

        // シンプルな3Dオブジェクト（立方体）をシーンに追加
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // アニメーションを行う関数
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // ボタンクリックで立方体を回転させる
        document.getElementById('animate-button').addEventListener('click', function() {
            cube.rotation.x += 1;
            cube.rotation.y += 1;
        });
    </script>
</body>
</html>
