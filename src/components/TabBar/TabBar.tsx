import React, { useMemo } from 'react';
import { IconTypes } from '~/types/components/icon';
import { useTabBar } from '~/components/TabBar/useTabBar';
import Tab from '~/components/TabBar/Tab';

export type TabItemType = { label: string; icon: IconTypes; url: string };

export const TabBar = () => {
	const [currTab, handleTab] = useTabBar();

	const tabs: TabItemType[] = useMemo(
		() => [
			{
				label: '홈',
				icon: 'home',
				url: 'home',
			},
			{
				label: '커뮤니티',
				icon: 'chat',
				url: 'community',
			},
			{
				label: '랭킹',
				icon: 'trophy',
				url: 'ranking',
			},
			{
				label: '마이',
				icon: 'user',
				url: 'mypage',
			},
		],
		[]
	);

	return (
		<ul
			className="fixed bottom-0 flex items-center justify-between gap-4 w-full h-58 py-2.5
"
		>
			{tabs.map((tabItem: TabItemType) => (
				<Tab
					key={tabItem.url}
					currTab={currTab}
					tabItem={tabItem}
					handleTab={handleTab}
				/>
			))}
		</ul>
	);
};

export default TabBar;
