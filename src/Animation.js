export const rotateLoop = {
	animate: {
		rotate: 360,
		transition: { ease: 'linear', duration: 3, repeat: Infinity },
	},
};
export const fromRigth = {
	initial: {
		x: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, ease: 'easeOut' },
	},
};
export const fromLeft = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, ease: 'easeOut' },
	},
};

export const fromBottom = {
	initial: {
		y: 100,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, ease: 'easeOut' },
	},
};
export const fromTop = {
	initial: {
		y: -100,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, ease: 'easeOut' },
	},
};

export const fade = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 1 },
	},
};

export const forIntro = {
	initial: {
		top: '70%',
		opacity: 0,
	},
	animate: {
		top: '50%',
		opacity: 1,
		transition: {
			duration: 1,
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	exit: {
		// top: '100%',
		opacity: 0,
		transition: {
			duration: 1,
		},
	},
};
export const simpleFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: { duration: 1 },
	},
};

// export const pageFromLeft = {
// 	initial: {
// 		x: '100%',
// 		opacity: 0,
// 	},
// 	animate: {
// 		x: 0,
// 		opacity: 1,
// 		transition: { duration: 0.75 },
// 	},
// 	exit: {
// 		opacity: 0,
// 		transition: { duration: 0.5 },
// 	},
// };

// export const pageFromBottom = {
// 	initial: {
// 		y: '100%',
// 		opacity: 0,
// 	},
// 	animate: {
// 		y: 0,
// 		opacity: 1,
// 		transition: { duration: 0.75 },
// 	},
// 	exit: {
// 		opacity: 0,
// 		transition: { duration: 0.5 },
// 	},
// };

// export const pageFade = {
// 	initial: {
// 		opacity: 0,
// 	},
// 	animate: {
// 		opacity: 1,
// 		transition: { duration: 0.75 },
// 	},
// 	exit: {
// 		opacity: 0,
// 		transition: { duration: 0.5 },
// 	},
// };
