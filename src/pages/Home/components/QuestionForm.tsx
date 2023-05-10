import Dimmer from '~/components/Modal/Dimmer';
import Icon from '~/components/Icon/Icon';
import Card2 from '~/pages/Home/components/Card';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostQuestion } from '~/api/questions/query';
import useToast from '~/components/Toast/useToast';
import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/queryKey';

type Props = {
	toggleOpen: () => void;
};

const QuestionForm = ({ toggleOpen }: Props) => {
	const queryClient = useQueryClient();
	const { username = '' } = useParams();
	const openToast = useToast();
	const [content, setContent] = useState('');
	const { mutate } = usePostQuestion();

	const onSubmit = () => {
		mutate(
			{
				content,
				target_profile: username,
			},
			{
				onSuccess: () => {
					openToast({
						type: 'success',
						message: '질문이 전송되었습니다!',
					});
					toggleOpen();
					queryClient.invalidateQueries([QUERY_KEY.PROFILE, username]);
				},
				onError: err => {
					const error = err as AxiosError;
					const errorMsg = error?.response?.data as string;

					openToast({
						type: 'error',
						message: errorMsg || '알수없는 오류가 발생했습니다!',
					});
				},
			}
		);
	};

	return (
		<Dimmer onClick={toggleOpen}>
			<div className={'absolute z-40 bottom-0 w-screen h-340 bg-white rounded-t-2xl p-20 flex flex-col gap-16'}>
				<div className={'flex justify-between items-center'}>
					<p className={'font-bold text-20 text-light-primary'}>질문 작성</p>
					<button onClick={toggleOpen}>
						<Icon
							size={'24px'}
							icon={'close'}
							stroke={2}
							strokeColor={'#333333'}
						/>
					</button>
				</div>
				<div className={'flex items-center gap-4'}>
					<span className={'text-main-primary text-xs'}>To</span>
					<Card2.UserId
						userId={username}
						isAnony={true}
					/>
				</div>

				<div>
					<textarea
						className={'h-120 w-full border-none outline-0 resize-none'}
						value={content}
						onChange={e => setContent(e.target.value)}
						placeholder={`${username} 에게 질문하기`}
						maxLength={200}
					/>
				</div>

				<button
					// onClick={onSubmit}
					onClick={onSubmit}
					disabled={content.length === 0}
					className={
						'absolute bottom-20 w-11/12 self-center h-60 bg-main-primary flex items-center justify-center rounded-2xl'
					}>
					<span className={'text-white font-semibold font-normal'}>확인</span>
				</button>
			</div>
		</Dimmer>
	);
};

export default QuestionForm;
