import React from 'react';
import Icon from '~/components/Icon/Icon';

const Floating = () => {
	return (
		<div
			className="absolute flex pl-12 items-center justify-center drop-shadow-xl

 w-117 h-48 bottom-60 right-15 bg-main-primary rounded-[99px] "
		>
			<Icon
				size={'24px'}
				icon={'plus'}
				stroke={2}
				color={'white'}
			/>
			<p className={'font-semibold text-white ml-4 pr-16'}>질문하기</p>
		</div>
	);
};

export default Floating;
