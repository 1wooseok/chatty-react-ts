import React from 'react';

// 링크도 받을지 고민
type Props = {
	size?: number;
	src: string;
	alt?: string;
	hasRing?: boolean;
};

const Avatar = ({ src, size, alt, hasRing }: Props) => {
	const RING = hasRing ? 'ring-2 ring-black' : '';

	return (
		<div
			className={`rounded-full bg-[#eaeaea] ${RING}`}
			style={{ width: size, height: size }}
		>
			<img
				className={'w-full h-full rounded-full'}
				src={src}
				alt={alt || 'avatar'}
			/>
		</div>
	);
};

export default Avatar;
