/** @type {import("tailwindcss").Config} */

const px0_10 = {
	...Array.from(Array(11)).map((_, i) => `${i}px`),
};
const px0_100 = {
	...Array.from(Array(101)).map((_, i) => `${i}px`),
};
const px0_500 = {
	...Array.from(Array(501)).map((_, i) => `${i}px`),
};

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'logo-pink': '#FFB7DA',
			white: '#ffffff',
			black: '#000000',
			grey: {
				0: '#ffffff',
				100: '#999999',
				200: '#E6E6E6',
				300: '#CCCCCC',
				400: '#B3B3B3',
				500: '#999999',
				600: '#808080',
				700: '#666666',
				800: '#4D4D4D',
				900: '#333333',
				1000: '#000000',
			},
			natural: {
				200: '#F0E7DF',
				300: '#E3D7CD',
			},
			pink: {
				main: '#F9A3CC',
				dark: '#F17FB5',
				darker: '#CF4B8A',
				light: '#FFBEDD',
				lighter: '#FFDDED',
			},
			orange: {
				main: '#FE7C58',
				dark: '#CB5939',
				darker: '#983B21',
				light: '#FFA38A',
				lighter: '#FFCBBC',
			},
			main: {
				primary: '#FE7C58',
				secondary: '#F9A3CC',
				pink: {
					600: '#F892C3',
				},
			},
			background: {
				inner: '#F2F2F2',
				card: '#ffffff',
				overlay: '000000b3',
			},
			light: {
				primary: '#333333',
				secondary: '#999999',
				disabled: '#cccccc',
			},
			dark: {
				primary: '#ffffff',
				secondary: '#cccccc',
				disabled: '#999999',
			},
		},
		extend: {
			borderWidth: px0_10,
			fontSize: px0_100,
			lineHeight: px0_100,
			width: px0_500,
			heigiht: px0_500,
			maxWidth: px0_500,
			maxHeight: px0_500,
			minWidth: px0_500,
			minHeight: px0_500,
			spacing: px0_500,
			gap: px0_100,
			fontFamily: {
				suit: ['SUIT-Heavy', 'sans-serif'],
			},
		},
		screens: {
			mobile: '420px', // @media (min-width: 420px)
			tablet: '768px', // @media (min-width: 768px)
			'under-tablet': { max: '767px' }, // @media (max-width: 767px)
			'under-mobile': { max: '419px' }, // @media (max-width: 419px)
		},
	},
	// plugins: [require("./plugins/scrollbar-hide")]
};
