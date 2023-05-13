// 질문하기
import { InfiniteData, useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { PostQuestionPayload, PostQuestionRes, QuestionApiRes, QuestionModel } from './model';
import ChattyClient from '../HttpClient';
import { QUERY_KEY } from '../../constants/queryKey';

export const usePostQuestion = () => {
	return useMutation((payload: PostQuestionPayload): Promise<PostQuestionRes> => ChattyClient.post('/chatty', payload));
};

// 답변 완료된 질문 가져오기
export const useAnswered = (username: string) =>
	useInfiniteQuery(
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
