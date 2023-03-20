import React from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from '~/components/TabBar/TabBar';

type Props = {};

const Layout = ({}: Props) => {
	return (
		<div>
			<div className="bg-[#F9F9F9]">
				<Outlet />
			</div>
			<TabBar />
		</div>
	);
};

export default Layout;
