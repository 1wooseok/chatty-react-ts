import Profile from './Profile';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { previewAvatarImageSrc, previewBackgroundImageSrc } from '~/constants/preview';

export default {
	component: Profile,
	title: 'Profile',
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => (
	<div className="max-w-sm">
		<Profile {...args} />
	</div>
);

export const InitialProfile = Template.bind({});
InitialProfile.args = {
	background: '',
	user_image: '',
	intro: '',
	response_rate: 0,
	follower: 0,
	following: 0,
};

export const Filled = Template.bind({});
Filled.args = {
	background: previewBackgroundImageSrc,
	user_image: previewAvatarImageSrc,
	intro: '한줄 자기소개',
	response_rate: 77,
	follower: 123,
	following: 222,
};
