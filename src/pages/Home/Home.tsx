import React, { useState } from 'react';
import Profile from '~/pages/Home/components/Profile';
import Tabs from '~/components/Tabs/Tabs';
import { useProfile } from '~/api/profile/query';
import { useParams } from 'react-router-dom';
import CardList from '~/pages/Home/components/CardList';
import FloatingButton from '~/components/Floating/FloatingButton';
import Icon from '~/components/Icon/Icon';
import QuestionForm from '~/pages/Home/components/QuestionForm';
import useBool from '~/hooks/useBool';
import AppModal from '~/components/Modal/AppModal';

const Home = () => {
	const { username = '' } = useParams();
	const { data: profile } = useProfile(username);
	const [activeIdx] = useState<number>(0);
	const [isOpen, toggleOpen] = useBool(false);
	const [isAppOpen, toggleAppOpen] = useBool(false);

	const onTabChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const dom = e.target as HTMLSpanElement;
		const tabName = dom.textContent;

		if (tabName !== '답변 완료') {
			toggleAppOpen();
		}
	};

	if (!profile) {
		return null;
	}

	return (
		<div className={'w-screen h-screen overflow-x-hidden'}>
			<Profile
				question_count={profile.question_count}
				response_rate={profile.response_rate}
				username={profile.username}
				profile_message={profile.profile_message}
				profile_image={profile.profile_image}
				follower={profile.follower}
				following={profile.following}
				profile_name={profile.profile_name}
				background_image={profile.background_image}
				user_id={profile.user_id}
				views={profile.views}
			/>

			<div className={'sticky top-0 z-30 pt-12 bg-white shadow-md'}>
				<Tabs
					activeIdx={activeIdx}
					tabs={['답변 완료', '새질문', '거절 질문']}
					onClick={onTabChange}
				/>
			</div>

			<CardList
				username={username}
				profile_image={profile.profile_image}
			/>

			<FloatingButton
				icon={
					<Icon
						size={'24px'}
						icon={'plus'}
						stroke={2.5}
						strokeColor={'white'}
					/>
				}
				label={'질문하기'}
				textColor={'white'}
				backgroundColor={'#FE7C58'}
				onClick={toggleOpen}
			/>

			{isOpen && <QuestionForm toggleOpen={toggleOpen} />}
			{isAppOpen && <AppModal toggleAppOpen={toggleAppOpen} />}
		</div>
	);
};

export default Home;
