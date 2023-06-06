import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => (
	<ToastContainer
		position="bottom-center"
		autoClose={1000}
		hideProgressBar
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		closeButton={false}
		pauseOnHover={false}
		theme={'dark'}
		transition={Slide}
		toastStyle={{ borderRadius: '8px' }}
		style={{
			textAlign: 'center',
			bottom: '16px',
			left: '50%',
			transform: 'translateX(-50%)',
			opacity: 0.8,
			width: '90vw',
			fontSize: '1rem',
			fontWeight: 500,
			borderRadius: '8px',
		}}
	/>
);

export default Toast;
