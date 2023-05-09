import Avatar from '~/components/Avatar/Avatar';
import CardMeta from './CardMeta';
import { CardProps } from '~/pages/Home/components/Card';

const CardBody = ({ isAnonymous, content, profile_image, username }: CardProps) => {
	return (
		<div className="flex gap-8">
			{!isAnonymous && (
				<Avatar
					size={48}
					src={profile_image}
				/>
			)}
			<div className="flex flex-col gap-4">
				<div className="flex gap-6 items-center">
					{!isAnonymous && <span className="font-bold text-16 leading-none">{username}</span>}
					<div className="flex gap-10 font-light text-xs text-[#999999] leading-none">
						<CardMeta
							isAnonymous={isAnonymous}
							fontSize={12}
						/>
					</div>
				</div>
				<pre className="text-base font-normal break-all max-w-270 m-0">{content}</pre>
			</div>
		</div>
	);
};

export default CardBody;
