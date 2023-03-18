import React from 'react';
import Floating from './Floating';
import {
	ComponentMeta,
	ComponentStory,
} from '@storybook/react';

export default {
	component: Floating,
	title: 'Buttons',
} as ComponentMeta<typeof Floating>;

const Template: ComponentStory<typeof Floating> = () => (
	<div className="relative w-199 h-199 rounded-lg shadow-lg">
		<Floating />
	</div>
);

export const FloatingButton: any = Template.bind({});
FloatingButton.args = {};
