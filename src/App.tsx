import {
	Navigate,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import Layout from '~/components/Layout/Layout';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<PublicPage />} />
					<Route
						path="/protected"
						element={
							<RequireAuth>
								<ProtectedPage />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

function LoginPage() {
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';

	function handleSubmit(
		event: React.FormEvent<HTMLFormElement>
	) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const username = formData.get('username') as string;
	}
}

function RequireAuth({
	children,
}: {
	children: JSX.Element;
}) {
	const isLogin = true;
	const location = useLocation();

	if (!isLogin) {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
}

function PublicPage() {
	return <h3>Public</h3>;
}

function ProtectedPage() {
	return <h3>Protected</h3>;
}
