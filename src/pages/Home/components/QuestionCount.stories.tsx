import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import QuestionCount from './QuestionCount';

export default {
	title: 'QuestionCount',
	component: QuestionCount,
} as ComponentMeta<typeof QuestionCount>;

const Template: ComponentStory<typeof QuestionCount> = args => <QuestionCount {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
