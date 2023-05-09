import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AxiosError } from 'axios';

interface Props {
	children?: ReactNode;
	fallback: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error | AxiosError, errorInfo: ErrorInfo) {
		if (error instanceof Error) {
			const err = error as Error;
			console.log('******** Client Side Error *******', err, errorInfo);
		} else {
			const err = error as AxiosError;

			if (err?.response?.status === 400) {
				this.setState({ hasError: true });
			}
		}
	}

	public render() {
		if (this.state.hasError) {
			console.log('실행 되라 좀');
			return this.props.fallback;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
