import React from 'react';

type Props = {
	children?: React.ReactNode;
	onClick?: () => void;
};

const Dimmer = ({ children, onClick }: Props) => {
	return (
		<>
			<div
				onClick={() => onClick?.()}
				className="z-40 fixed top-0 left-0 w-screen h-screen bg-black opacity-50"
			/>
			{children}
		</>
	);
};

export default Dimmer;
