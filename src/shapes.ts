// triangle shape left and right
export interface Triangle {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	x3: number;
	y3: number;
}

export const Shapes: Triangle[] = [
	{x1: 0, y1: 0.25, x2: 0.25, y2: 0.125, x3: 0.25, y3: 0.375},
	{x1: 0, y1: 0, x2: 0.25, y2: 0.125, x3: 0, y3: 0.25}
];
