import React from 'react';
import Floating, { Props } from './Floating';

export default {
	component: Floating,
	title: 'Buttons',
};

const Template = (args: Props) => (
	<div className="relative w-199 h-199 rounded-lg shadow-lg">
		<Floating {...args} />
	</div>
);

export const FloatingButton: any = Template.bind({});
FloatingButton.args = {};
