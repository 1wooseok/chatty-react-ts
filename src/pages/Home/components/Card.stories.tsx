import Card from './Card';
import {
	ComponentMeta,
	ComponentStory,
} from '@storybook/react';

export default {
	component: Card,
	title: 'Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => (
	<div className="max-w-sm">
		<Card {...args} />
	</div>
);

export const FromAnonymous = Template.bind({});
FromAnonymous.args = {
	isAnonymous: true,
	content: 'Lorem ipsum dolor sit amet.',
};

export const FromMember = Template.bind({});
FromMember.args = {
	isAnonymous: false,
	content:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, vitae.',
};

export const LongContent = Template.bind({});
LongContent.args = {
	isAnonymous: false,
	content:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci delectus deleniti, dignissimos molestias placeat quia quibusdam sequi, sunt tempora velit veniam voluptates! Consequatur dolores eaque explicabo in magni quaerat quam, velit? Consectetur, ducimus, rerum.',
};
