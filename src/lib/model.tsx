import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { Scene, Object3D, Mesh } from 'three';
import { GLTF } from 'three/examples/jsm/Addons.js';

// Khởi tạo DRACOLoader
const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

// Định nghĩa các tùy chọn cho loadGLTFModel
interface LoadGLTFOptions {
  receiveShadow?: boolean;
  castShadow?: boolean;
}

// Hàm loadGLTFModel
export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options: LoadGLTFOptions = { receiveShadow: true, castShadow: true }
): Promise<Object3D> {
  const { receiveShadow = true, castShadow = true } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    loader.load(
      glbPath,
      (gltf: GLTF) => {
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.set(0, 0, 0);
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      (error: unknown) => {
        reject(error);
      }
    );
  });
}
