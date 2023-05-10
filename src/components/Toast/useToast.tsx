import { toast, ToastOptions } from 'react-toastify';

const useToast = () => {
	const options: ToastOptions = {
		position: 'bottom-center',
		autoClose: 1000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		className: 'custom-toast',
		bodyClassName: 'custom-toast',
		theme: 'dark',
		closeButton: false,
	};

	return ({ message, type }: { message: string; type: 'success' | 'error' }) => {
		if (type === 'success') {
			toast.success(message, options);
		}
		if (type === 'error') {
			toast.error(message, options);
		}
	};
};

export default useToast;
