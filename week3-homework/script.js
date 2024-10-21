import * as THREE from 'three';
import gsap from 'gsap';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight,
    0.1, 1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("scene").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const edges = new THREE.EdgesGeometry(geometry); 
const material = new THREE.LineBasicMaterial({ color: 0xffff00 }); 
const wireframe = new THREE.LineSegments(edges, material); 

scene.add(wireframe);

camera.position.z = 5;

const rotateWireframe = () => {
    wireframe.rotation.y += 0.02; 
};

const tick = () => {
    rotateWireframe();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
};

tick();