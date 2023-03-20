import TabBar from './TabBar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	component: TabBar,
	title: 'TabBar',
	decorators: [withRouter],
} as ComponentMeta<typeof TabBar>;

export const TabBarUI: ComponentStory<typeof TabBar> = () => (
	<div className="max-w-sm">
		<TabBar />
	</div>
);
