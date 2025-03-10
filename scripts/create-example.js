import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import { fileURLToPath } from "url";

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数
const exampleNumber = process.argv[2];
if (!exampleNumber) {
  console.error("请提供示例编号，例如: npm run create 03");
  process.exit(1);
}

// 格式化编号为两位数
const paddedNumber = exampleNumber.padStart(2, "0");

// 创建目录
const exampleDir = path.join(__dirname, "..", "src", "examples", paddedNumber);
fs.mkdirSync(exampleDir, { recursive: true });

// 创建 HTML 文件
const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Three.js Learning - Example ${paddedNumber}</title>
    <style>
      .nav {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 100;
        background: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 5px;
      }
      .nav a {
        margin-right: 10px;
        color: #333;
        text-decoration: none;
      }
      .nav a:hover {
        color: #666;
      }
    </style>
  </head>
  <body>
    <nav class="nav">
      <a href="/">Home</a>
    </nav>
    <script type="module" src="./main.js"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(exampleDir, `${paddedNumber}.html`), htmlContent);

// 创建 JavaScript 文件
const jsContent = `import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();`;

fs.writeFileSync(path.join(exampleDir, "main.js"), jsContent);

// 更新 index.html
const indexPath = path.join(__dirname, "..", "index.html");
const indexContent = fs.readFileSync(indexPath, "utf-8");
const $ = cheerio.load(indexContent);

// 添加新的导航链接
const newLink = `<a href="/src/examples/${paddedNumber}/${paddedNumber}.html">${paddedNumber}</a>`;
$(".nav").append(newLink);

// 保存更新后的 index.html
fs.writeFileSync(indexPath, $.html());

console.log(`成功创建示例 ${paddedNumber}！`);
