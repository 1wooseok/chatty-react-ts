import Dimmer from '~/components/Modal/Dimmer';
import Icon from '~/components/Icon/Icon';
import Card2 from '~/pages/Home/components/CardCompound';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostQuestion } from '~/api/questions/query';

type Props = {
	toggleOpen: () => void;
};

const QuestionForm = ({ toggleOpen }: Props) => {
	const { username = '' } = useParams();
	const [content, setContent] = useState('');
	const { mutate } = usePostQuestion();

	const onSubmit = () => {
		mutate(
			{
				content,
				target_profile: username,
			},
			{
				onSuccess: () => {},
				onError: err => {},
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
							size={'16px'}
							icon={'chat'}
						/>
					</button>
				</div>
				<div className={'flex items-center gap-4'}>
					<span className={'text-main-primary'}>To</span>
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
					/>
				</div>

				<button
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
