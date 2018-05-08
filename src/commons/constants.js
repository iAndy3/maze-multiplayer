export const MAP_WIDTH = 13;
export const MAP_HEIGHT = 13;

export const TILE_HEIGHT = 55;
export const TILE_WIDTH = 80; 
	
export const TILES = {
	0: {
		type: 'floor',
		x: 320,
		y: 0,
		w: 80,
		h: 55
	},
	1: {
		type: 'wall',
		x: 240,
		y: 0,
		w: 80,
		h: 55
	},	
	2: {
		type: 'finish',
		x: 160,
		y: 0,
		w: 80,
		h: 55
	},
	3: {
		type: 'player1',
		x: 0,
		y: 0,
		w: 80,
		h: 55
	},
	4: {
		type: 'player2',
		x: 80,
		y: 0,
		w: 80,
		h: 55
	},
	5: {
		type: 'player3',
		x: 0,
		y: 55,
		w: 80,
		h: 55
	},
	6: {
		type: 'player4',
		x: 80,
		y: 55,
		w: 80,
		h: 55
	}
};

export const MAP = [
	1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,0,0,0,0,0,2,0,1,0,0,0,1,
	1,1,1,1,1,1,1,0,1,0,1,0,1,
	1,0,0,0,1,0,0,0,1,0,1,0,1,
	1,0,1,1,1,0,1,1,1,0,1,1,1,
	1,0,1,0,0,0,1,0,0,0,0,0,1,
	1,0,1,0,1,1,1,1,1,1,1,0,1,
	1,0,0,0,1,0,0,0,0,0,0,0,1,
	1,0,1,1,1,1,1,0,1,1,1,0,1,
	1,0,1,0,0,0,1,0,1,0,1,0,1,
	1,0,1,0,1,0,1,0,1,0,1,0,1,
	1,0,0,2,1,0,0,0,1,0,0,0,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,
]


// https://codepen.io/iAndy3/pen/aGVYJZ