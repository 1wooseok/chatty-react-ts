import React from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from '~/components/TabBar/TabBar';

type Props = {};

const Layout = ({}: Props) => {
	return (
		<div>
			<ul>
				<li>
					<a>Public Page</a>
				</li>
				<li>
					<a>Protected Page</a>
				</li>
			</ul>

			<Outlet />

			<TabBar />
		</div>
	);
};

export default Layout;
