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
	background_image: '',
	profile_image: '',
	profile_message: '',
	response_rate: 0,
	follower: 0,
	following: 0,
	profile_name: '',
	username: '',
	question_count: {
		unanswered: 0,
		answered: 0,
		rejected: 0,
	},
};

export const Filled = Template.bind({});
Filled.args = {
	background_image: previewBackgroundImageSrc,
	profile_image: previewAvatarImageSrc,
	profile_message: '한줄 자기소개',
	response_rate: 77,
	follower: 123,
	following: 222,
	profile_name: 'fldkjf',
	username: '챗지피티',
	question_count: {
		unanswered: 12,
		answered: 55,
		rejected: 1,
	},
};
