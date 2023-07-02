import { toast } from 'react-toastify';

function copyToClipBoard(text: string): void {
	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				toast('클립보드에 복사되었습니다.');
			})
			.catch(() => {
				toast.error('복사를 다시 시도해주세요.');
			});
	} else {
		if (!document.queryCommandSupported('copy')) {
			toast.error('복사하기가 지원되지 않는 브라우저입니다.');
			return;
		}

		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.style.top = '0';
		textarea.style.left = '0';
		textarea.style.position = 'fixed';

		document.body.appendChild(textarea);
		textarea.focus();
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);

		toast('클립보드에 복사되었습니다.');
	}
}

export default copyToClipBoard;
