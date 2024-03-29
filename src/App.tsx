import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Spinner from '~/components/Loading/Spinner';
import Home from '~/pages/Home/Home';
import Toast from '~/components/Toast/Toast';
import Desktop from './pages/Desktop/Desktop';
import NotFound from './pages/Error/NotFound';
import { ErrorBoundary } from '@sentry/react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			refetchOnMount: false,
			retry: false,
			retryOnMount: true,
			suspense: true,
			useErrorBoundary: true,
		},
	},
	queryCache: new QueryCache({
		onError: (error: any, query) => {
			// 🎉 only show error toasts if we already have data in the cache
			// which indicates a failed background update
			if (query.state.data !== undefined) {
				console.error(`Something went wrong: ${error?.message}`);
			}
		},
	}),
});

export default function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route
						path={'/'}
						element={<Desktop />}
					/>
					<Route
						path={'/:username'}
						element={
							<ErrorBoundary fallback={<NotFound />}>
								<Suspense
									fallback={
										<div className={'w-screen h-screen flex items-center justify-center'}>
											<Spinner />
										</div>
									}>
									<Home />
								</Suspense>
							</ErrorBoundary>
						}
					/>
					<Route
						path="/*"
						element={<NotFound />}
					/>
				</Routes>
				<Toast />
			</QueryClientProvider>
		</div>
	);
}
