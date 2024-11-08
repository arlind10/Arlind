import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

// Scene, Camera, Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 30, 50); 
controls.update();

// Material for buildings, grass, and road
const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff }); // Blue for buildings
const grassMaterial = new THREE.MeshBasicMaterial({ color: 0x006400 }); // Green for grass
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 }); // Gray for roads

// Grass Plane
const grass = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), grassMaterial);
grass.rotation.x = -Math.PI / 2; // Rotate to lay flat
grass.position.y = 0;
scene.add(grass);


// Main Road 
const mainRoad = new THREE.Mesh(new THREE.PlaneGeometry(6, 50), roadMaterial); // Length is 50
mainRoad.rotation.x = -Math.PI / 2;
mainRoad.position.set(0, 0.01, 0); // Centered on the field
scene.add(mainRoad);

// Cross Road
const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(50, 6), roadMaterial); // Width is 50
crossRoad.rotation.x = -Math.PI / 2;
crossRoad.position.set(0, 0.01, 0); // Centered on the field
scene.add(crossRoad);

// Roundabout
const roundabout = new THREE.Mesh(new THREE.CircleGeometry(6, 32), roadMaterial); // Increased radius to 8
roundabout.rotation.x = -Math.PI / 2;
roundabout.position.set(0, 0.02, 0);
scene.add(roundabout);

// Buildings
const building1 = new THREE.Mesh(new THREE.BoxGeometry(15, 5, 5), buildingMaterial);
building1.position.set(-15, 2.5, 10); // Top-left position
scene.add(building1);
createLabel("814", -15, 2.5, 10); // Add label for building 814

const building2 = new THREE.Mesh(new THREE.BoxGeometry(5, 7, 10), buildingMaterial);
building2.position.set(10, 2.5, 15); // Top-right position
scene.add(building2);
createLabel("305", 10, 2.5, 15); // Add label for building 305

const building3 = new THREE.Mesh(new THREE.BoxGeometry(5, 6, 10), buildingMaterial);
building3.position.set(10, 2.5, -10); // Bottom-right position
scene.add(building3);
createLabel("304", 10, 2.5, -10); // Add label for building 304

// Function to create a label on the building
function createLabel(text, x, y, z) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'Bold 40px Arial'; // Increased font size
    context.fillStyle = 'white';
    context.fillText(text, 0, 50); // Adjusted y position for better centering

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(10, 5, 1); // Scale the sprite larger
    sprite.position.set(x, y + 2.5, z + 2.5); // Position slightly above and towards the building wall
    sprite.rotation.y = Math.PI; // Rotate to face the road
    scene.add(sprite);
}




// Rendering Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
