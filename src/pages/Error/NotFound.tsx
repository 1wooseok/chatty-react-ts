import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import Icon from '~/components/Icon/Icon';

const NotFound = () => {
	const nav = useNavigate();

	const goChatty = useCallback(() => {
		nav('/chatty');
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
				className="absolute bottom-10 self-center bg-main-primary rounded-2xl w-10/12 h-60"
				onClick={goChatty}>
				<span className="text-white font-medium">Chatty 공식계정으로 이동</span>
			</button>
		</div>
	);
};

export default NotFound;
