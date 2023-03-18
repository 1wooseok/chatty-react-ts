import React, { CSSProperties } from 'react';
import { svgPaths } from '~/constants/svgPaths';
import { IconTypes } from '~/types/components/icon';

type Props = {
	color?: string;
	size: string;
	stroke?: number;
	icon: IconTypes;
	style?: CSSProperties;
	className?: string;
};

const Icon = ({
	color,
	size,
	stroke,
	icon,
	className,
	style,
}: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={color ?? 'none'}
			width={size}
			height={size}
			className={className}
			style={style}
			stroke={color ?? 'black'}
			strokeWidth={stroke ?? 1}
		>
			<path d={svgPaths[icon]} />
		</svg>
	);
};

export default Icon;
