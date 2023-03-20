import Icon from '~/components/Icon/Icon';
import React from 'react';
import { TabType } from '~/components/TabBar/useTabBar';
import { TabItemType } from '~/components/TabBar/TabBar';

type Props = {
	currTab: TabType;
	tabItem: TabItemType;
	handleTab: (url: string) => void;
};

const Tab = ({ currTab, handleTab, tabItem: { label, icon, url } }: Props) => {
	const color = currTab === url ? '#333333' : '#cccccc';

	return (
		<li
			onClick={() => handleTab(url)}
			className="flex flex-col items-center gap-1 w-1/4"
		>
			<Icon
				color={color}
				size={'16px'}
				icon={icon}
			/>
			<label
				style={{
					fontSize: '10px',
					color,
					transform: url === 'home' ? 'translateX(-17%)' : '',
				}}
			>
				{label}
			</label>
		</li>
	);
};

export default Tab;
