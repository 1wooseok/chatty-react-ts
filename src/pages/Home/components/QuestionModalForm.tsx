import Dimmer from '~/components/Modal/Dimmer';
import Icon from '~/components/Icon/Icon';
import Card2 from '~/pages/Home/components/Card';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostQuestion } from '~/api/questions/query';
import Spinner from '~/components/Loading/Spinner';
import { QUERY_KEY } from '../../../constants/queryKey';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';

// todo: `@from 익명` 으로 바꾸기
export interface ModalProps {
	isOpen: boolean;
	toggleModal: () => void;
}

export default function QuestionModalForm({ isOpen, toggleModal }: ModalProps) {
	const { username = '' } = useParams();
	// client
	const MAX_CONTENT_LENGTH = 100;
	const [content, setContent] = useState('');
	// server
	const queryClient = useQueryClient();
	const { mutate, isLoading: isMutating } = usePostQuestion();

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();

		mutate(
			{
				content,
				username,
			},
			{
				onSuccess: () => {
					toast('질문이 전송되었습니다.');
					toggleModal();
					setContent('');
					return queryClient.invalidateQueries([QUERY_KEY.PROFILE, username]);
				},
				onError: err => {
					const error = err as AxiosError;
					const errorMsg = error?.response?.data as string;

					toast(errorMsg || '알수없는 오류가 발생했습니다.');
				},
			}
		);
	}

	return !isOpen ? null : (
		<Dimmer onClick={toggleModal}>
			<form
				onSubmit={onSubmit}
				className={
					'popUp absolute z-40 bottom-0 left-1/2 w-screen  max-w-lg h-340 bg-white rounded-t-2xl p-20 flex flex-col gap-16 translate-x-[-50%]'
				}>
				<div className={'flex justify-between items-center'}>
					<p className={'font-bold text-20 text-light-primary'}>질문 작성</p>
					<button onClick={toggleModal}>
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
						maxLength={MAX_CONTENT_LENGTH}
					/>
				</div>

				<span className="absolute right-20 bottom-88 text-sm text-grey-700">
					{content.length} / {MAX_CONTENT_LENGTH}
				</span>
				<button
					disabled={content.length === 0 || isMutating}
					style={{ opacity: content.length === 0 ? 0.8 : 1 }}
					className={
						'absolute bottom-20 w-11/12 self-center h-60 bg-main-primary flex items-center justify-center rounded-2xl'
					}>
					<span className={'text-white font-normal'}>{isMutating ? <Spinner color={'white'} /> : '확인'}</span>
				</button>
			</form>
		</Dimmer>
	);
}
