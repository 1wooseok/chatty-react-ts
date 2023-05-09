import ChattyId from '~/components/Label/ChattyId';

type Props = {
	isAnonymous: boolean;
	created_date?: string;
	fontSize?: number;
	color?: string;
};
const CardMeta = ({ isAnonymous, created_date, fontSize, color }: Props) => {
	return (
		<>
			<span className={`${isAnonymous ? 'text-[#fe7c58]' : ''}`}>
				{isAnonymous && <span className={'text-[#fe7c58]'}>To </span>}
				<ChattyId
					userId={'stopit_plz'}
					color={color || '#fe7c58'}
					isBold={isAnonymous}
					fontSize={fontSize}
				/>
			</span>
			{!isAnonymous && (
				<>
					<span>·</span>
					<span className={'text-light-secondary font-normal text-12'}>{created_date || '21시간'}</span>
				</>
			)}
		</>
	);
};

export default CardMeta;
