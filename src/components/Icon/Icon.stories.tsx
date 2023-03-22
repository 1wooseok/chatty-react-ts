import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from './Icon';
import { svgPaths } from '~/constants/svgPaths';

export default {
	component: Icon,
	title: 'Icons',
} as ComponentMeta<typeof Icon>;

export const Icons: ComponentStory<typeof Icon> = () => {
	return (
		<div className="flex gap-24">
			{Object.keys(svgPaths).map((icon: any) => (
				<div
					key={icon}
					className="flex flex-col items-center gap-8"
				>
					<Icon
						size={'24px'}
						icon={icon}
					/>
					<span className="text-xs">{icon}</span>
				</div>
			))}
		</div>
	);
};
