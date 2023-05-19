import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import NotFound from './pages/Error/NotFound';

Sentry.init({
	dsn: 'https://77ec0c2e21604ed185bcd63160d17cbc@o4505182036885504.ingest.sentry.io/4505182040227840',
	integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const root = createRoot(document.getElementById('root')!); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Sentry.ErrorBoundary
				showDialog={false}
				fallback={<NotFound />}>
				<App />
			</Sentry.ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>
);
