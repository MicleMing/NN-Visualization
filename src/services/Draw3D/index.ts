import * as THREE from 'three';

export default class Draw3D {
  draw() {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('mainCanvas') as HTMLCanvasElement,
    });

    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);
  }
}
