import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from './IconButton';

export default {
	title: 'IconButton',
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

const buttonList = [
	{
		icon: 'arrowLeft',
	},
	{
		icon: 'search',
	},
	{
		icon: 'ellipsisVertical',
		fillColor: 'white',
	},
];

export const IconButtons: ComponentStory<typeof IconButton> = () => (
	<div className={'flex gap-16'}>
		{buttonList.map((x: any, idx) => (
			<IconButton
				key={idx}
				icon={x.icon}
				fillColor={x.fillColor}
			/>
		))}
	</div>
);
