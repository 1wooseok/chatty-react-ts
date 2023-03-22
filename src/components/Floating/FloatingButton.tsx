import React from 'react';

type Props = {
	icon: any;
	label: string;
	color: string;
	background: string;
};

const FloatingButton = ({ icon, label, color, background }: Props) => {
	return (
		<div
			style={{ background }}
			className={
				'absolute z-10 flex px-20 gap-4 items-center justify-center drop-shadow-xl h-48 bottom-60 right-15 rounded-[99px]'
			}
		>
			{icon}
			<p
				style={{ color }}
				className={'font-medium'}
			>
				{label}
			</p>
		</div>
	);
};

export default FloatingButton;
