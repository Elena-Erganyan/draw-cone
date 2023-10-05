import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import { Canvas } from "@react-three/fiber";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 40px);
  gap: 20px;
  padding: 10px;

  ${mediaQuery("lg")}{
    flex-direction: row-reverse;
    gap: 100px;
  }
`;

export const StyledCanvas = styled(Canvas)`
  height: calc(100vh - 300px) !important; // have to use "!important because Canvas' width and height are styled inline"

  ${mediaQuery("lg")}{
    max-width: 1000px !important;
    height: calc(100vh - 80px) !important;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
