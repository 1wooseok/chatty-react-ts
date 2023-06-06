import { useEffect, useState } from 'react';

const useModalAnimation = (isOpen: boolean) => {
	const [animate, setAnimate] = useState(false);
	// 실제 컴포넌트가 사라지는 시점을 지연시키기 위한 값
	const [visible, setVisible] = useState<boolean>(isOpen);

	useEffect(() => {
		setVisible(isOpen);

		// open 값이 true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
		if (visible && !isOpen) {
			setAnimate(true);
			setTimeout(() => setAnimate(false), 200);
		}
		return () => {
			setVisible(false);
		};
	}, [visible, isOpen]);

	return { animate, visible };
};

export default useModalAnimation;
