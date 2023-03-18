import React from 'react';
import ChattyId from '~/components/Label/ChattyId';

const CardMeta = ({
	isAnonymous,
	created_date,
}: {
	isAnonymous: boolean;
	created_date?: string;
}) => {
	return (
		<>
			<span
				className={`${isAnonymous ? 'text-[#fe7c58]' : ''}`}
			>
				{isAnonymous && (
					<span className={'text-[#fe7c58]'}>To </span>
				)}
				<ChattyId
					userId={'stopit_plz'}
					color={'#fe7c58'}
					isBold={isAnonymous}
				/>
			</span>
			{!isAnonymous && (
				<>
					<span>·</span>
					<span>{created_date || '21시간'}</span>
				</>
			)}
		</>
	);
};

export default CardMeta;
