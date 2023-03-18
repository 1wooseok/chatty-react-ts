import React, { useMemo } from 'react';
import Icon from '~/components/Icon/Icon';
import { IconTypes } from '~/types/components/icon';

export const TabBar = () => {
	// const [tab, setTab] = useTab();

	const tabs = useMemo(
		() => [
			{ label: '홈', icon: 'home', value: 'home' },
			{
				label: '커뮤니티',
				icon: 'chat',
				value: 'community',
			},
			{ label: '랭킹', icon: 'trophy', value: 'ranking' },
			{ label: '마이', icon: 'user', value: 'mypage' },
		],
		[]
	);

	return (
		<ul
			className="flex items-center justify-between gap-4 w-full	h-58 border-t border-#FFFFFF py-2.5
"
		>
			{tabs.map(tab => (
				<Tab
					key={tab.value}
					value={tab.value}
					label={tab.label}
					icon={tab.icon as IconTypes}
				/>
			))}
		</ul>
	);
};

type TabProps = {
	label: string;
	icon: IconTypes;
	value: string;
};
const Tab = ({ value, label, icon }: TabProps) => {
	return (
		<li className="flex flex-col items-center gap-1 w-1/4">
			<Icon color={'#cccccc'} size={'16px'} icon={icon} />
			<span style={{ fontSize: '10px', color: '#cccccc' }}>
				{label}
			</span>
		</li>
	);
};

export default TabBar;
