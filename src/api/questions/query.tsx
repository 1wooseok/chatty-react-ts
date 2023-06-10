// 질문하기
import { InfiniteData, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PostQuestionPayload, PostQuestionRes, QuestionApiRes, QuestionModel } from './model';
import ChattyClient from '../HttpClient';
import { QUERY_KEY } from '~/constants/queryKey';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export function usePostQuestion({ toggleModal }: { toggleModal: () => void }) {
	const queryClient = useQueryClient();
	const { mutate, isLoading: isMutating } = useMutation(
		(payload: PostQuestionPayload): Promise<PostQuestionRes> => ChattyClient.post('/chatty', payload)
	);

	function mutQuestion(payload: PostQuestionPayload) {
		mutate(payload, {
			onSuccess: () => {
				queryClient.invalidateQueries([QUERY_KEY.PROFILE, payload.target_profile]);
				toast('질문이 전송되었습니다.');
				toggleModal();
			},
			onError: err => {
				const error = err as AxiosError;
				const errorMsg = error?.response?.data as string;

				toast(errorMsg || '알수없는 오류가 발생했습니다.');
			},
		});
	}

	return {
		mutQuestion,
		isMutating,
	};
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
