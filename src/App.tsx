import { Route, Routes } from 'react-router-dom';
import Layout from '~/components/Layout/Layout';
import Home from '~pages/Home/Home';

export default function App() {
	console.log(1);

	return (
		<div className="App">
			<Routes>
				<Route element={<Layout />}>
					<Route
						path="/"
						element={<Home />}
					/>
					{/*	<Route*/}
					{/*		path="/protected"*/}
					{/*		element={<ProtectedPage />}*/}
					{/*	/>*/}
				</Route>
			</Routes>
		</div>
	);
}

function ProtectedPage() {
	return <h3>Protected</h3>;
}
