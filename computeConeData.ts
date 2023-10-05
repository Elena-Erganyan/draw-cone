import {Request, Response } from "express";

interface ReqProps {
  body: {
    radius: number;
    height: number;
    segmentsNumber: number;
  };
}

export const computeConeData = async (req: ReqProps, res: Response) => {
  const { radius, height, segmentsNumber } = req.body;

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

  res.status(200).json({vertices, radius, height, segmentsNumber});
};
