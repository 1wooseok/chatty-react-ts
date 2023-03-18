// .storybook/preview.jsnpm install -D tailwindcssnpm install -D tailwindcss
import '../src/main.css'; // replace with the name of your tailwind css file

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
