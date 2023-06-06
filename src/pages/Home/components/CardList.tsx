import { useAnswered } from '~/api/questions/query';
import useIntersect from '~/hooks/useIntersect';
import AnsweredCard from '~/pages/Home/components/Answered';
import { QuestionModel } from '~/api/questions/model';
import Spinner from '~/components/Loading/Spinner';
import React from 'react';
import useClipBoard from '../../../hooks/useClipBoard';

type Props = {
	username: string;
	userId: string;
	profile_image: string;
};

const CardList = ({ username, userId, profile_image }: Props) => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useAnswered(username);
	const copyToClipBoard = useClipBoard();

	const fetchNext = () => {
		if (!hasNextPage) {
			return;
		}
		fetchNextPage();
	};

	if (data === undefined) {
		return null;
	}

	const answeredList = data as unknown as QuestionModel[];
	const pageBottomRef = useIntersect(fetchNext);

	if (answeredList?.length === 0) {
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
	}

	return (
		<ul className={'flex flex-col gap-16 bg-background-inner py-16 px-20'}>
			{answeredList?.map((d: QuestionModel, idx: number) => (
				<AnsweredCard
					key={idx}
					isAnony={true}
					userId={userId}
					username={username}
					content={d.content}
					answer_content={d.answer_content}
					created_date={d.created_date}
					profile_image={profile_image}
				/>
			))}
			{isFetchingNextPage && <Spinner />}
			<div ref={pageBottomRef} />
		</ul>
	);
};

export default CardList;
