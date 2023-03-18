import React, { useEffect, useState } from 'react';

type TabType = 'home' | 'community' | 'ranking' | 'mypage';
const useTabBar = () => {
	const { pathname } = useLocation();
	const [tab, setTab] = useState<TabType>('home');

	useEffect(() => {
		if (pathname === tab) {
			return;
		}
		const nextTab = getTabByPathname(pathname);
		setTab(nextTab);
	}, [pathname]);

	return [tab, setTab];
};

export default useTabBar;

const getTabByPathname = (pathname: string): TabType => {
	if (pathname.includes('mypage')) {
		return 'mypage';
	}
	if (pathname.includes('community')) {
		return 'community';
	}
	if (pathname.includes('ranking')) {
		return 'ranking';
	}
	return 'home';
};
