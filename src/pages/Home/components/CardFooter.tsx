import { IconTypes } from '~/types/components/icon';
import Icon from '~/components/Icon/Icon';

const CardFooter = () => {
	return (
		<div className="flex justify-between items-center px-24">
			<UtilBtn
				icon={'heart'}
				stroke={2}
				count={3125}
			/>
			<UtilBtn
				icon={'bookmark'}
				stroke={2}
				count={31235}
			/>
			<UtilBtn
				icon={'share'}
				color={'black'}
			/>
		</div>
	);
};

const UtilBtn = ({
	icon,
	stroke,
	count,
	color,
}: {
	icon: IconTypes;
	stroke?: number;
	count?: number;
	color?: string;
}) => (
	<button className="flex items-center gap-1">
		<Icon
			size={'16px'}
			stroke={stroke}
			icon={icon}
			fillColor={color}
		/>
		{count && (
			<span className="font-light text-xs">
				{count > 9999 ? `${parseInt(String(count / 1000))}k` : count.toLocaleString()}
			</span>
		)}
	</button>
);

export default CardFooter;
