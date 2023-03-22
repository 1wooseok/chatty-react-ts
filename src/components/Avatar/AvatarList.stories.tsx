import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarList from './AvatarList';
import { avatarList } from '~/constants/preview';

export default {
	title: 'AvatarList',
	component: AvatarList,
} as ComponentMeta<typeof AvatarList>;

const Template: ComponentStory<typeof AvatarList> = args => <AvatarList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	users: avatarList,
};
