import { IconTypes } from '~/types/components/icon';
import Icon from '~/components/Icon/Icon';

type Props = {
	icon: IconTypes;
	fillColor?: string;
};

const IconButton = ({ icon, fillColor }: Props) => {
	return (
		<div className={'z-1 flex items-center justify-center bg-black opacity-40 w-32 h-32 rounded-full'}>
			<Icon
				size={'18px'}
				icon={icon}
				stroke={3}
				fillColor={fillColor || 'black'}
				strokeColor={'white'}
			/>
		</div>
	);
};

export default IconButton;
