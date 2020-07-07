export type Light = "top" | "left" | "right";

export interface Sprite {
	x: number;
	y: number;
	shape: 0 | 1;
	hidden?: boolean;
	light?: Light;
}

export const Sprites: Sprite[] = [
	{x: 0, y: 0, shape: 1, hidden: true},
	{x: 0, y: 0, shape: 0, light: "top"},
	{x: 0, y: 0.25, shape: 1, light: "left"},
	{x: 0, y: 0.25, shape: 0, light: "left"},
	{x: 0, y: 0.5, shape: 1, light: "left"},
	{x: 0, y: 0.5, shape: 0, light: "left"},
	{x: 0, y: 0.75, shape: 1, hidden: true},

	{x: 0.25, y: -0.125, shape: 0, light: "top"},
	{x: 0.25, y: 0.125, shape: 1, light: "top"},
	{x: 0.25, y: 0.125, shape: 0, light: "top"},
	{x: 0.25, y: 0.375, shape: 1, light: "left"},
	{x: 0.25, y: 0.375, shape: 0, light: "left"},
	{x: 0.25, y: 0.625, shape: 1, light: "left"},
	{x: 0.25, y: 0.625, shape: 0, light: "left"},

	{x: 0.5, y: 0, shape: 1, light: "top"},
	{x: 0.5, y: 0, shape: 0, light: "top"},
	{x: 0.5, y: 0.25, shape: 1, light: "top"},
	{x: 0.5, y: 0.25, shape: 0, light: "right"},
	{x: 0.5, y: 0.5, shape: 1, light: "right"},
	{x: 0.5, y: 0.5, shape: 0, light: "right"},
	{x: 0.5, y: 0.75, shape: 1, light: "right"},

	{x: 0.75, y: -0.125, shape: 0, hidden: true},
	{x: 0.75, y: 0.125, shape: 1, light: "top"},
	{x: 0.75, y: 0.125, shape: 0, light: "right"},
	{x: 0.75, y: 0.375, shape: 1, light: "right"},
	{x: 0.75, y: 0.375, shape: 0, light: "right"},
	{x: 0.75, y: 0.625, shape: 1, light: "right"},
	{x: 0.75, y: 0.625, shape: 0, hidden: true}
];
