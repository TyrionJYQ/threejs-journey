import * as THREE from "three";

// scene
const scene = new THREE.Scene();

//  geometry
const geometry = new THREE.BoxGeometry();

// material

const material = new THREE.MeshBasicMaterial({
  color: "red",
});

// Mesh

const mesh = new THREE.Mesh(geometry, material);

// add object of mesh to scene
scene.add(mesh);

const sizes = {
  width: 400,
  height: 600,
};

// camera
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height);

camera.position.z = 5;

// renderer

const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
