import React from 'react';

type Props = {
	userId: string;
	color: string;
	isBold?: boolean;
};

const ChattyId = ({
	userId,
	color = '#999999',
	isBold,
}: Props) => {
	return (
		<span className={`text-[${color}`}>
			<span className={`${isBold ? 'font-bold' : ''}`}>
				@{userId}
			</span>
		</span>
	);
};

export default ChattyId;
