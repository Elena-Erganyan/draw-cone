import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cone from "./components/Cone";

export default function App() {
  const [radius, setRadius] = useState(1);
  const [height, setHeight] = useState(2);
  const [segmentsNumber, setSegmentsNumber] = useState(4);
  const [vertices, setVertices] = useState<number[]>([]);

  useEffect(() => {
    setVertices(computeVertices(radius, height, segmentsNumber));
  }, [radius, height, segmentsNumber]);

  const computeVertices = (radius: number, height: number, segmentsNumber: number) => {
    const coneVertex = [0, 0, height];
    const vertices: number[] = [];
    let currentVertex: number[];
    let nextVertex: number[];
    const firstVertex = [radius * Math.cos(2 * Math.PI * 0 / segmentsNumber), radius * Math.sin(2 * Math.PI * 0 / segmentsNumber), 0];

    for (let i = 0; i < segmentsNumber; i++) {
      currentVertex = i === 0 ? firstVertex : nextVertex!;
      nextVertex = i === segmentsNumber - 1
        ? firstVertex
        : [radius * Math.cos(2 * Math.PI * (i + 1) / segmentsNumber), radius * Math.sin(2 * Math.PI * (i + 1) / segmentsNumber), 0];
      vertices.push(...coneVertex, ...currentVertex, ...nextVertex);
    }
  
    return vertices;
  };

  return (
    <div style={{display: "flex", gap: "50px", padding: "10px"}}>
      <form
        style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px"}}
      >
        <label style={{display: "flex", flexDirection: "column", gap: "5px"}}>
          Radius
          <input type="number" value={radius} onChange={(evt) => setRadius(+evt.target.value)}/>
        </label>
        <label style={{display: "flex", flexDirection: "column", gap: "5px"}}>
          Height
          <input type="number" value={height} onChange={(evt) => setHeight(+evt.target.value)}/>
          </label>
        <label style={{display: "flex", flexDirection: "column", gap: "5px"}}>
          Segments Number
          <input type="number" value={segmentsNumber} onChange={(evt) => setSegmentsNumber(+evt.target.value)}/>
        </label>
      </form>

      <Canvas style={{height: "calc(100vh - 40px)"}}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[5, 5, 5]} decay={0} />
        <pointLight position={[-10, -10, -10]} decay={0} />
        <Cone segmentsNumber={segmentsNumber} vertices={vertices} />
        <OrbitControls enableZoom={false} />
      </Canvas>

    </div>
  );
}

