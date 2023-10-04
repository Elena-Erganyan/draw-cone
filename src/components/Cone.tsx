// import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh } from "three";

const Cone = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<Mesh>(null!);
  const radius = 1;
  const height = 2;
  const segmentsNumber = 8;

  // useFrame(() => (ref.current.rotation.y += 0.005));

  const computeTriangles = (radius: number, height: number, segmentsNumber: number) => {
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

  const vertices = new Float32Array(computeTriangles(radius, height, segmentsNumber));

  return (
    <mesh {...props} ref={ref} scale={1.5}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" array={vertices} itemSize={3} count={segmentsNumber * 3} normalized />
      </bufferGeometry>
      <meshStandardMaterial attach="material" color="turquoise" side={DoubleSide} flatShading={true} />
    </mesh>

  );
};

export default Cone;
