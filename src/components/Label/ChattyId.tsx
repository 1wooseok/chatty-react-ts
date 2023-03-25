type Props = {
	userId: string;
	color?: string;
	fontSize?: number;
	isBold?: boolean;
};

const ChattyId = ({ userId, color = '#999999', isBold, fontSize }: Props) => {
	return (
		<span className={`text-[${color}]`}>
			<span
				className={`${isBold ? 'font-bold' : ''}`}
				style={{ fontSize: fontSize || '16px' }}
			>
				@{userId}
			</span>
		</span>
	);
};

export default ChattyId;
