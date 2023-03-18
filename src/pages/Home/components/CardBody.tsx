import Avatar from '~/components/Avatar/Avatar';
import React from 'react';
import CardMeta from './CardMeta';

const CardBody = ({
	isAnonymous,
	content,
}: {
	isAnonymous: boolean;
	content: string;
}) => {
	return (
		<div className="flex gap-8">
			{!isAnonymous && <Avatar size={48} src={''} />}
			<div className="flex flex-col gap-8">
				<div className="flex gap-6 items-center">
					{!isAnonymous && (
						<span className="font-semibold text-normal leading-none">
							username
						</span>
					)}
					<div className="flex gap-10 font-light text-xs text-[#999999] leading-none">
						<CardMeta isAnonymous={isAnonymous} />
					</div>
				</div>
				<p className="text-base font-normal break-all max-w-270 m-0">
					{content}
				</p>
			</div>
		</div>
	);
};

export default CardBody;
