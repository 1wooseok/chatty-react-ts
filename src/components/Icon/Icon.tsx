import { CSSProperties } from 'react';
import { svgPaths } from '~/constants/svgPaths';
import { IconTypes } from '~/types/components/icon';

type Props = {
	fillColor?: string;
	strokeColor?: string;
	size: string;
	stroke?: number;
	icon: IconTypes;
	style?: CSSProperties;
	className?: string;
};

const Icon = ({ fillColor, strokeColor, size, stroke, icon, className, style }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={fillColor ?? 'none'}
			width={size}
			height={size}
			className={className}
			style={{ zIndex: 10, ...style }}
			stroke={strokeColor ?? 'black'}
			strokeWidth={stroke ?? 1}
		>
			<path d={svgPaths[icon]} />
		</svg>
	);
};

export default Icon;
