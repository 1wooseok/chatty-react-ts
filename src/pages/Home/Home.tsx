import Profile from '~/pages/Home/components/Profile';
import Tabs from '~/components/Tabs/Tabs';
import { useProfile } from '~/api/profile/query';
import { useParams } from 'react-router-dom';
import CardList from '~/pages/Home/components/CardList';
import FloatingButton from '~/components/Floating/FloatingButton';
import Icon from '~/components/Icon/Icon';
import QuestionForm from '~/pages/Home/components/QuestionForm';
import useBool from '~/hooks/useBool';

const Home = () => {
	const { username = '' } = useParams();
	const { data: profile } = useProfile(username);
	const [isOpen, toggleOpen] = useBool(false);

	if (!profile) {
		return null;
	}

	console.log({ isOpen });

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
			/>

			<div className={'sticky top-0 z-30 pt-12 bg-white shadow-md'}>
				<Tabs tabs={['답변 완료', '새질문', '거절 질문']} />
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
		</div>
	);
};

const EmptyUI = () => {
	return (
		<div className="min-h-300 pt-16 w-full h-full">
			<div className="inner_wrap">
				<div className="no_answer">
					<p className={'font-medium text-16 text-light-primary'}>아직 받은 질문이 없어요!</p>
					<button className="py-13 px-16 shadow rounded-3xl">
						<span className={'font-semibold text-16 text-dark-primary'}>프로필 공유하고 친구 찾기</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
