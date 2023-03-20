import React from 'react';
import ChattyId from '~/components/Label/ChattyId';
import Avatar from '~/components/Avatar/Avatar';

type Props = {
	background: string;
	user_image: string;
	intro: string;
	response_rate: number;
	follower: number;
	following: number;
};

const Profile = ({ background, user_image, intro, response_rate, following, follower }: Props) => {
	return (
		<>
			{/* Background & Avatar */}
			<div className={'relative w-full h-120 bg-grey-900'}>
				<img
					className={'object-cover w-full h-full'}
					src={background}
				/>
				<div className={'absolute bottom-[-32px] left-16'}>
					<Avatar
						size={64}
						src={user_image}
						hasRing={true}
					/>
				</div>
			</div>
			{/*Username & UserId & Introduce*/}
			<div className={'p-16'}>
				<div className={'flex justify-end'}>
					<button className={'bg-main-pink-600 text-white rounded-2xl px-20 py-8 text-14 font-semibold'}>팔로우</button>
				</div>

				<div>
					<p className={'font-bold'}>UserName - bold</p>
					<ChattyId
						userId={'chatGPT'}
						fontSize={12}
					/>
					<p className={'font-normal'}>{intro}</p>
				</div>

				<div className={'flex justify-between items-center px-24 mt-24'}>
					<CountItem
						count={`${response_rate}%`}
						label={'답변률'}
					/>
					<CountItem
						count={`${follower}`}
						label={'팔로워'}
					/>
					<CountItem
						count={`${following}`}
						label={'팔로잉'}
					/>
				</div>
			</div>
		</>
	);
};

export default Profile;

type ItemProps = {
	label: string;
	count: string;
};

const CountItem = ({ count, label }: ItemProps) => (
	<div className={'flex flex-col items-center gap-4'}>
		<span className={'font-medium'}>{count}</span>
		<span className={'text-grey-100 text-12'}>{label}</span>
	</div>
);
