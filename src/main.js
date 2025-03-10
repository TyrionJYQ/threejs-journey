// import './style.css'
// import * as THREE from 'three';

// // 创建场景
// const scene = new THREE.Scene();

// // 创建相机
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // 创建渲染器
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // 创建一个立方体
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // 动画循环
// function animate() {
//   requestAnimationFrame(animate);

//   // 旋转立方体
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// // 处理窗口大小变化
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // 开始动画
// animate();

import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

// const container = document.querySelector("#app");

// const scene = new Scene();

// scene.background = new Color("skyblue");

// // create a carema
// const fov = 35;
// const aspect = container.clientWidth / container.clientHeight;
// const near = 0.1;
// const far = 100;

// const camera = new PerspectiveCamera(fov, aspect, near, far);

// camera.position.set(0, 0, 10);

// const geometry = new BoxGeometry(2, 2, 2);

// const material = new MeshBasicMaterial({ color: 0x44aa88 });

// const cube = new Mesh(geometry, material);

// scene.add(cube);

// const renderer = new WebGLRenderer();

// renderer.setSize(container.clientWidth, container.clientHeight);

// renderer.setSize(container.clientWidth, container.clientHeight);

// renderer.setPixelRatio(window.devicePixelRatio);

// container.append(renderer.domElement);

// renderer.render(scene, camera);

// Get a reference to the container element that will hold our scene
const container = document.querySelector("#app");

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color("skyblue");

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
