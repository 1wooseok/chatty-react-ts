import React from 'react';
import Icon from '~/components/Icon/Icon';

const Floating = () => {
	return (
		<div className="absolute bottom-60 right-15 bg-main-primary w-46 h-46 rounded-full flex items-center justify-center">
			<Icon
				size={'36px'}
				icon={'plus'}
				stroke={2}
				color={'white'}
			/>
		</div>
	);
};

export default Floating;
