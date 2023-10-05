import { Response } from "express";

interface ReqProps {
  body: {
    radius: number;
    height: number;
    segmentsNumber: number;
  };
}

const calcX = (R: number, i: number, N: number) => {
  return R * Math.cos(2 * Math.PI * i / N);
};

const calcY = (R: number, i: number, N: number) => {
  return R * Math.sin(2 * Math.PI * i / N);
};

export const computeConeData = async (req: ReqProps, res: Response) => {
  const { radius, height, segmentsNumber } = req.body;

  const coneVertex = [0, 0, height];
  const vertices: number[] = [];
  let currentVertex: number[];
  let nextVertex: number[];
  const firstVertex = [calcX(radius, 0, segmentsNumber), calcY(radius, 0, segmentsNumber), 0];

  for (let i = 0; i < segmentsNumber; i++) {
    currentVertex = i === 0 ? firstVertex : nextVertex!;
    nextVertex = i === segmentsNumber - 1
      ? firstVertex
      : [calcX(radius, i + 1, segmentsNumber), calcY(radius, i + 1, segmentsNumber), 0];

    vertices.push(...coneVertex, ...currentVertex, ...nextVertex);
  }

  res.status(200).json({vertices, radius, height, segmentsNumber});
};
