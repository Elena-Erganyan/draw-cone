import { DoubleSide } from "three";

interface ConeProps {
  vertices?: number[];
  segmentsNumber?: number;
}

const Cone = ({vertices = [], segmentsNumber = 0}: ConeProps) =>  {
  return (
    <mesh rotation={[5, 0.3, 0]}>
      <bufferGeometry attach="geometry" key={JSON.stringify(vertices)}>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(vertices)}
          itemSize={3}
          count={segmentsNumber * 3}
        />
      </bufferGeometry>
      <meshStandardMaterial
        attach="material"
        color="turquoise"
        side={DoubleSide}
        flatShading={true}
      />
    </mesh>
  );
};

export default Cone;
