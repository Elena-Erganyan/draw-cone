const calcX = (R, i, N) => {
  return R * Math.cos(2 * Math.PI * i / N);
};

const calcY = (R, i, N) => {
  return R * Math.sin(2 * Math.PI * i / N);
};

export const computeConeData = async (req, res) => {
  const { radius, height, segmentsNumber } = req.body;

  const coneVertex = [0, 0, height];
  const vertices = [];
  let currentVertex;
  let nextVertex;
  const firstVertex = [calcX(radius, 0, segmentsNumber), calcY(radius, 0, segmentsNumber), 0];

  for (let i = 0; i < segmentsNumber; i++) {
    currentVertex = i === 0 ? firstVertex : nextVertex;
    nextVertex = i === segmentsNumber - 1
      ? firstVertex
      : [calcX(radius, i + 1, segmentsNumber), calcY(radius, i + 1, segmentsNumber), 0];

    vertices.push(...coneVertex, ...currentVertex, ...nextVertex);
  }

  res.status(200).json({vertices, radius, height, segmentsNumber});
};
