type Props = {
	icon: React.ReactNode;
	label: string;
	textColor: string;
	backgroundColor: string;
	onClick: () => void;
};

const FloatingButton = ({ icon, label, textColor, backgroundColor, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			style={{ background: backgroundColor }}
			className={
				'absolute z-10 flex px-20 gap-4 items-center justify-center drop-shadow-xl h-48 bottom-60 right-15 rounded-[99px]'
			}>
			{icon}
			<p
				style={{ color: textColor }}
				className={'font-medium'}>
				{label}
			</p>
		</button>
	);
};

export default FloatingButton;
