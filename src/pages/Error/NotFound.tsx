import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import Icon from '~/components/Icon/Icon';

const NotFound = () => {
	const nav = useNavigate();

	const goChatty = useCallback(() => {
		nav('/chatty');
	}, [nav]);

	const goBack = useCallback(() => {
		nav(-1);
	}, [nav]);

	return (
		<div className="flex flex-col gap-8 w-screen h-screen justify-center items-center">
			<div className="icon">
				<Icon
					size={'108px'}
					icon={'exclamation'}
					fillColor={'#FE7C58'}
					strokeColor={'white'}
					stroke={1.5}
				/>
			</div>
			<h3 className="font-bold text-20 text-black">원하시는 페이지를 찾을 수 없습니다.</h3>
			<p className="text-dark-disabled font-normal text-16">홈으로 이동하거나 다시 시도해 주세요.</p>
			<button
				onClick={goChatty}
				className="absolute bottom-80 flex items-center gap-4 text-light-secondary">
				<Icon
					size={'16px'}
					icon={'left'}
					fillColor={'white'}
					stroke={2}
					strokeColor={'#999999'}
				/>
				<span className="pt-3">Chatty 공식계정으로 이동</span>
			</button>
			<button
				onClick={goBack}
				className="absolute bottom-10 self-center bg-main-primary rounded-2xl w-10/12 h-60">
				<span className="text-white font-medium">이전으로</span>
			</button>
		</div>
	);
};

export default NotFound;
