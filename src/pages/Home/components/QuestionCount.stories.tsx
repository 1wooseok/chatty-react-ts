import { ComponentMeta, ComponentStory } from '@storybook/react';

import QuestionCount from './QuestionCount';

export default {
	title: 'QuestionCount',
	component: QuestionCount,
} as ComponentMeta<typeof QuestionCount>;

const Template: ComponentStory<typeof QuestionCount> = args => (
	<div className={'w-[390px]'}>
		<QuestionCount {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	// tabs: ['답변 완료', '새 질문', '거절 질문'],
	// tabs: ['답변 완료', '새 질문'],
	tabs: ['답변 완료', '새 질문', '새 질문', '새 질문'],
	// tabs: ['답변 완료', '새 질문', '새 질문', '새 질문', '새 질문'],
};
