import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type TabType = 'home' | 'community' | 'ranking' | 'mypage';

export const useTabBar = (): [currTab: TabType, handleTab: (nextUrl: string) => void] => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [currTab, setTab] = useState<TabType>('home');

	const handleTab = useCallback((nextUrl: string) => {
		navigate(nextUrl);
	}, []);

	useEffect(() => {
		const nextTab = getTabByPathname(pathname);

		setTab(nextTab);
	}, [pathname]);

	return [currTab, handleTab];
};

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
