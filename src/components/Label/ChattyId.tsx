type Props = {
	userId: string;
	color?: string;
	fontSize?: number;
	isBold?: boolean;
};

const ChattyId = ({ userId, color = '#999999', isBold, fontSize = 16 }: Props) => {
	return (
		<span className={`text-[${color}]`}>
			<span
				className={`font-[${fontSize}px] ${isBold ? 'font-bold' : 'font-normal'}`}
				style={{ fontSize: `${fontSize}px` || '16px' }}>
				@{userId}
			</span>
		</span>
	);
};

export default ChattyId;
