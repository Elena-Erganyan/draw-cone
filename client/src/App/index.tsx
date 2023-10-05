import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Cone from "../components/Cone";
import Input from "../components/Input";
import Button from "../components/Button";
import { StyledApp, StyledCanvas, StyledForm } from "./styled";

export default function App() {
  const [radius, setRadius] = useState(1.8);
  const [height, setHeight] = useState(2.7);
  const [segmentsNumber, setSegmentsNumber] = useState(12);
  const [coneData, setConeData] = useState<IConeData>();
  
  const computeConeData = async () => {
    const response = await fetch("/api/compute", {
      method: "POST",
      body: JSON.stringify({radius, height, segmentsNumber}),
      headers: {
        'Content-Type': "application/json",
      }
    });
    const json = await response.json();

    if (response.ok) {
      setConeData(json);
    }
  };

  useEffect(() => {
    computeConeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    computeConeData();
  };

  return (
    <StyledApp>
      
      <StyledCanvas frameloop="demand">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[5, 5, 5]} decay={0} />
        <pointLight position={[-10, -10, -10]} decay={0} />
        <Cone
          segmentsNumber={coneData?.segmentsNumber}
          vertices={coneData?.vertices}
        />
        <OrbitControls enableZoom={false} />
      </StyledCanvas>

      <StyledForm onSubmit={(evt) => onSubmit(evt)}>
        <Input 
          label="Radius"
          min={0}
          step={0.1}
          onChange={(evt) => setRadius(+evt.target.value)}
          type="number"
          value={radius}
        />

        <Input 
          label="Height"
          min={0}
          step={0.1}
          onChange={(evt) => setHeight(+evt.target.value)}
          type="number"
          value={height}
        />

        <Input 
          label="Number of segments"
          min={0}
          step={1}
          onChange={(evt) => setSegmentsNumber(+evt.target.value)}
          type="number"
          value={segmentsNumber}
        />

        <Button
          text="Redraw a cone"
          backgroundColor="skyblue"
          hoverColor="aquamarine"
          color="navy"
          type="submit"
        />
      </StyledForm>

    </StyledApp>
  );
}
