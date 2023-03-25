import { ComponentMeta, ComponentStory } from '@storybook/react';
import FloatingButton from '~/components/Floating/FloatingButton';
import Icon from '~/components/Icon/Icon';
import AvatarList from '~/components/Avatar/AvatarList';
import { avatarList } from '~/constants/preview';

export default {
	component: FloatingButton,
	title: 'Floating',
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = args => (
	<div className="relative w-[360px] h-[400px] rounded-lg shadow-lg">
		<div className={'opacity-20 w-[360px] h-[400px]'}>
			<p>Background Blur</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
		<FloatingButton {...args} />
	</div>
);

export const Question = Template.bind({});
Question.args = {
	label: '질문하기',
	icon: (
		<Icon
			size={'24px'}
			icon={'plus'}
			stroke={2}
			fillColor={'white'}
		/>
	),
	color: 'white',
	background: '#FE7C58',
};

export const ToRecentFriends = Template.bind({});
ToRecentFriends.args = {
	label: '최근 질문한 친구에게',
	icon: <AvatarList users={avatarList} />,
	color: 'white',
	background: '#FE7C58',
};

export const ToOthers = Template.bind({});
ToOthers.args = {
	label: '다른 친구에게',
	icon: <AvatarList users={avatarList} />,
	color: '#FE7C58',
	background: 'white',
};
