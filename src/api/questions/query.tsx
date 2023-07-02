// 질문하기
import { InfiniteData, useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { PostQuestionPayload, PostQuestionRes, QuestionApiRes, QuestionModel } from './model';
import ChattyClient from '../HttpClient';
import { QUERY_KEY } from '~/constants/queryKey';

export function usePostQuestion() {
	return useMutation((payload: PostQuestionPayload): Promise<PostQuestionRes> => ChattyClient.post('/chatty', payload));
}

// 답변 완료된 질문 가져오기
export function useAnswered(username: string) {
	const {
		data: answeredQuestionsRes,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(
		[QUERY_KEY.ANSWERED, username],
		({ pageParam = 1 }) => ChattyClient.get<QuestionApiRes>(`chatty/user/${username}?page=${pageParam}`),
		{
			enabled: !!username,
			getNextPageParam: lastPage => lastPage.next,
			select: data => data?.pages?.flatMap(page => page?.results) as unknown as InfiniteData<QuestionModel>,
			staleTime: 0,
			cacheTime: 1000 * 5, // 10초,
		}
	);

	function onFetchNext() {
		if (!hasNextPage) {
			return;
		}

		fetchNextPage();
	}

	return {
		answeredQuestionsRes: answeredQuestionsRes as unknown as QuestionModel[],
		isFetchingNextPage,
		onFetchNext,
	};
}
