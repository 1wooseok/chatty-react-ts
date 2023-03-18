import TabBar from './TabBar';
import {
	ComponentMeta,
	ComponentStory,
} from '@storybook/react';

export default {
	component: TabBar,
	title: 'TabBar',
} as ComponentMeta<typeof TabBar>;

export const TabBarUI: ComponentStory<
	typeof TabBar
> = () => (
	<div className="max-w-sm">
		<TabBar />
	</div>
);
