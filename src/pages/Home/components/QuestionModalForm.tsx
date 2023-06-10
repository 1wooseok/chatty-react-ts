import Dimmer from '~/components/Modal/Dimmer';
import Icon from '~/components/Icon/Icon';
import Card2 from '~/pages/Home/components/Card';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostQuestion } from '~/api/questions/query';
import Spinner from '~/components/Loading/Spinner';

export interface ModalProps {
	isOpen: boolean;
	toggleModal: () => void;
}

export default function QuestionModalForm({ isOpen, toggleModal }: ModalProps) {
	const { username = '' } = useParams();
	const [content, setContent] = useState('');
	const { mutQuestion, isMutating } = usePostQuestion({ toggleModal });

	function onSubmit() {
		mutQuestion({
			content,
			target_profile: username,
		});
	}

	return !isOpen ? null : (
		<Dimmer onClick={toggleModal}>
			<div
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
						maxLength={200}
					/>
				</div>

				<button
					onClick={onSubmit}
					disabled={content.length === 0 || isMutating}
					style={{ opacity: content.length === 0 ? 0.8 : 1 }}
					className={
						'absolute bottom-20 w-11/12 self-center h-60 bg-main-primary flex items-center justify-center rounded-2xl'
					}>
					<span className={'text-white font-normal'}>{isMutating ? <Spinner color={'white'} /> : '확인'}</span>
				</button>
			</div>
		</Dimmer>
	);
}
