import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}
