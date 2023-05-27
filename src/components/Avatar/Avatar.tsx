// 사용자 링크도 받을지 고민
export type AvatarProps = {
	size?: number;
	src: string;
	borderColor?: string;
	hasBorder?: boolean;
};

const Avatar = ({ src, size, hasBorder, borderColor = 'white' }: AvatarProps) => {
	return (
		<div
			className={'rounded-full bg-[#eaeaea]'}
			style={{
				width: size,
				height: size,
				border: hasBorder ? `2px solid ${borderColor}` : 'none',
			}}>
			<img
				className={'w-full h-full rounded-full object-cover'}
				src={src}
			/>
		</div>
	);
};

export default Avatar;
