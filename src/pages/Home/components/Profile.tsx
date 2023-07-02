import ChattyId from '~/components/Label/ChattyId';
import Avatar from '~/components/Avatar/Avatar';
import Logo from '~/components/Icon/Logo';
import { ProfileModel } from '~/api/profile/model';
import useBool from '~/hooks/useBool';
import AppModal from '~/components/Modal/AppModal';

export default function Profile({
	profile_message,
	profile_name,
	profile_image,
	background_image,
	follower,
	following,
	response_rate,
	// user_id,
	username,
	question_count,
	views,
}: ProfileModel) {
	const [isAppDownModalOpen, toggleAppDownModal] = useBool(false);

	return (
		<>
			{isAppDownModalOpen && (
				<AppModal
					isOpen={isAppDownModalOpen}
					toggleModal={toggleAppDownModal}
				/>
			)}
			{/* Background & Avatar */}
			<div className={'relative w-full h-160 bg-white'}>
				<img
					src={background_image}
					className={'object-cover w-full h-full'}
					alt={'background'}
					style={{ objectFit: 'cover' }}
				/>
				<div className={'absolute bottom-[-48px] left-16'}>
					<Avatar
						size={100}
						src={profile_image}
						hasBorder={true}
					/>
				</div>
			</div>
			{/*Username & UserId & Introduce*/}
			<div className={'p-16 bg-white'}>
				<div className={'flex justify-end'}>
					<button
						onClick={toggleAppDownModal}
						className="rounded-[17px] border-pink-main border-1 flex items-center p-8 gap-[8px]">
						<Logo size={20} />
						<span className="chatty">Chatty?</span>
					</button>
				</div>

				<div className={'flex flex-col gap-0 justify-center-center'}>
					<p className={'text-lg font-bold'}>{profile_name}</p>
					<span className="text-light-secondary">
						<ChattyId
							userId={username}
							fontSize={12}
						/>
					</span>
					<p className={'font-normal text-14 text-light-primary mt-8 mb-6'}>{profile_message}</p>
					{/*follower & following*/}
					<div className={'flex gap-32'}>
						<p className={'flex items-center gap-4'}>
							<span className="font-semibold text-16 text-light-primary">{follower}</span>
							<span className={'text-sm font-normal text-light-primary'}>팔로워</span>
						</p>
						<p className={'flex items-center gap-4'}>
							<span className="font-semibold text-16 text-light-primary">{following}</span>
							<span className={'text-sm font-normal text-light-primary'}>팔로잉</span>
						</p>
					</div>
				</div>

				<div className={'flex justify-between items-center px-24 mt-24'}>
					<CountItem
						count={`${question_count.answered + question_count.unanswered}`}
						label={'받은 질문 수'}
					/>
					<CountItem
						count={`${response_rate}%`}
						label={'답변률'}
					/>
					<CountItem
						count={views}
						label={'총 방문자 수'}
					/>
				</div>
			</div>
		</>
	);
}

type ItemProps = {
	label: string;
	count: number | string;
};

function CountItem({ count, label }: ItemProps) {
	return (
		<div className={'flex flex-col items-center gap-4'}>
			<span className={'font-medium'}>{count}</span>
			<span className={'font-normal text-light-secondary text-12'}>{label}</span>
		</div>
	);
}
