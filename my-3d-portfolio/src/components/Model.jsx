import { useGLTF } from '@react-three/drei';

export default function Model() {
  const { scene } = useGLTF('/AnimatedRobot.glb');
  return <primitive object={scene} />;
}
