import Avatar from './Avatar';
import {
	ComponentMeta,
	ComponentStory,
} from '@storybook/react';

export default {
	component: Avatar,
	title: 'Avatar',
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => (
	<Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
	size: 48,
	src: '',
};

export const HasBorder = Template.bind({});
HasBorder.args = {
	size: 48,
	src: '',
	hasRing: true,
};
