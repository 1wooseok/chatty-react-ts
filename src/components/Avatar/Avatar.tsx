// 사용자 링크도 받을지 고민
export type AvatarProps = {
	size?: number;
	avatarUrl: string;
	borderColor?: string;
	hasBorder?: boolean;
};

const Avatar = ({ avatarUrl, size, hasBorder, borderColor = 'white' }: AvatarProps) => {
	return (
		<div
			className={'rounded-full bg-[#eaeaea]'}
			style={{
				width: size,
				height: size,
				border: hasBorder ? `2px solid ${borderColor}` : 'none',
			}}
		>
			<img
				className={'w-full h-full rounded-full'}
				src={avatarUrl}
			/>
		</div>
	);
};

export default Avatar;
