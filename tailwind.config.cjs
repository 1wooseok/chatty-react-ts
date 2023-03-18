/** @type {import("tailwindcss").Config} */

const px0_10 = {
	...Array.from(Array(11)).map((_, i) => `${i}px`),
};
const px0_100 = {
	...Array.from(Array(101)).map((_, i) => `${i}px`),
};
const px0_200 = {
	...Array.from(Array(201)).map((_, i) => `${i}px`),
};
const px0_1000 = {
	...Array.from(Array(1000)).map((_, i) => `${i}px`),
};

module.exports = {
	mode: 'jit',
	content:["./src/**/*.{js,jsx}"],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'logo-pink': '#FFB7DA',
			grey: {
				900: '#333333',
			},
			natural: {
				200: '#F0E7DF',
				300: '#E3D7CD',
			},
			main: {
				primary: '#FE7C58',
				secondary: '#F9A3CC',
				pink: {
					600: '#F892C3',
				},
			},
		},
		extend: {
			borderWidth: px0_10,
			fontSize: px0_100,
			lineHeight: px0_100,
			maxWidth: px0_1000,
			maxHeight: px0_1000,
			minWidth: px0_1000,
			minHeight: px0_1000,
			spacing: px0_200,
			gap: px0_100,
		},
		screens: {
			mobile: '360px', // @media (min-width: 360px)
			foldable: '523px', // @media (min-width: 523px)
			tablet: '768px', // @media (min-width: 768px)
			'under-foldable': { max: '522px' }, // @media (max-width: 522px)
			'under-tablet': { max: '767px' }, // @media (max-width: 767px)
			'under-mobile': { max: '359px' }, // @media (max-width: 359px)
		},
	},
	// plugins: [require("./plugins/scrollbar-hide")]
};
