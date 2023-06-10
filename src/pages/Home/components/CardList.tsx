import { useAnswered } from '~/api/questions/query';
import useIntersect from '~/hooks/useIntersect';
import AnsweredCard from '~/pages/Home/components/Answered';
import { QuestionModel } from '~/api/questions/model';
import Spinner from '~/components/Loading/Spinner';
import React from 'react';
import useClipBoard from '~/hooks/useClipBoard';

type Props = {
	username: string;
	userId: string;
	profile_image: string;
};

const CardList = ({ username, userId, profile_image }: Props) => {
	// server
	const { answeredQuestionsRes, onFetchNext, isFetchingNextPage } = useAnswered(username);

	// client
	const pageBottomRef = useIntersect(onFetchNext);

	return answeredQuestionsRes?.length === 0 ? (
		<EmptyQuestionUI pageBottomRef={pageBottomRef} />
	) : (
		<ul className={'flex flex-col gap-16 bg-background-inner py-16 px-20'}>
			{answeredQuestionsRes?.map((q: QuestionModel, idx: number) => (
				<AnsweredCard
					key={idx}
					isAnony={true}
					userId={userId}
					username={username}
					content={q.content}
					answer_content={q.answer_content}
					created_date={q.created_date}
					profile_image={profile_image}
				/>
			))}
			{isFetchingNextPage && <Spinner />}
			<div ref={pageBottomRef} />
		</ul>
	);
};

const EmptyQuestionUI = ({ pageBottomRef }: { pageBottomRef: React.MutableRefObject<null> }) => {
	const copyToClipBoard = useClipBoard();

	return (
		<ul className={'flex flex-col items-center justify-center gap-16 y-16 px-20'}>
			<div className="min-h-200 pt-16 w-full h-full flex items-center justify-center">
				<div className="inner_wrap">
					<div className="no_answer">
						<p className={'font-medium text-16 text-light-primary text-center mb-12'}>아직 받은 질문이 없어요!</p>
						<button
							onClick={() => copyToClipBoard(window.location.href)}
							className="linear-gradiant to-blue-500 py-12 px-16 shadow rounded-3xl">
							<span className={'font-semibold text-16 text-dark-primary'}>프로필 공유하고 친구 찾기</span>
						</button>
					</div>
				</div>
				<div ref={pageBottomRef} />
			</div>
		</ul>
	);
};

export default CardList;
