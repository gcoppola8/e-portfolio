// Minimal Three.js setup
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color('pink');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.domElement.id = 'background-three-canvas';
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.width = '100vw';
renderer.domElement.style.height = '100vh';
renderer.domElement.style.zIndex = '-1';
renderer.domElement.style.pointerEvents = 'none';
document.body.insertBefore(renderer.domElement, document.body.firstChild);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Load GLTF
const loader = new GLTFLoader();
let mixer, model;

let shipStartY = 0;
loader.load("./js/vendor/ship/scene.gltf", (gltf) => {
    model = gltf.scene;
    scene.add(model);

    // Set model to a random position off the left side of the screen
    shipStartY = (Math.random() - 0.5) * 30; // Range [-15, 15]
    model.position.set(-8, shipStartY, 0);
    model.scale.set(1.5, 1.5, 1.5);
});

camera.position.set(11, 15, 15);
controls.update();

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    controls.update(delta);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

