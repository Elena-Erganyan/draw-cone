import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cone from "./components/Cone";

export default function App() {
  return (
    <Canvas style={{height: 500}}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[5, 5, 5]} penumbra={1} decay={0} />
      <pointLight position={[-10, -10, -10]} decay={0} />
      <Cone />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

