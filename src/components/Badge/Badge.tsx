type Props = {
	size?: number;
	background?: string;
	color?: string;
	label: string;
};

const Badge = ({ size = 16, color = 'white', background = '#EE4E22', label }: Props) => {
	console.log(size);
	return (
		<div
			className={'rounded-full flex items-center justify-center text-12 font-normal'}
			style={{
				color,
				background,
				width: `${size}px`,
				height: `${size}px`,
				// padding: '12px',
			}}>
			{label}
		</div>
	);
};

export default Badge;
