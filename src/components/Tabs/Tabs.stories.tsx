import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tabs from './Tabs';

export default {
	title: 'Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => (
	<div className={'w-[390px]'}>
		<Tabs {...args} />
	</div>
);

export const QuestionCount = Template.bind({});
QuestionCount.args = {
	tabs: ['답변 완료', '새 질문', '거절 질문'],
};

export const New = Template.bind({});
New.args = {
	hasNew: true,
	tabs: ['답변 완료', '새 질문', '거절 질문'],
};

export const Ranking = Template.bind({});
Ranking.args = {
	tabs: ['팔로잉', '랭커'],
};

export const Feed = Template.bind({});
Feed.args = {
	tabs: ['타임라인', '지금 핫한 질문'],
};
