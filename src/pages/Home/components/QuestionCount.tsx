import React, { useState } from 'react';

type QuestionType = '답변 완료' | '새 질문' | '거절 질문';

const QuestionCount = () => {
	const [activeQuestion, setActiveQuestion] = useState<QuestionType>('답변 완료');

	const isDone = activeQuestion === '답변 완료';
	const isNew = activeQuestion === '새 질문';
	const isNo = activeQuestion === '거절 질문';

	const transform = isDone ? 'translate-x-0' : isNew ? 'translate-x-[140px]' : 'translate-x-[282px]';

	return (
		<div className="relative flex justify-between items-center px-24 mt-24 font-14 font-normal w-[390px]">
			<div
				onClick={() => setActiveQuestion('답변 완료')}
				className={`${isDone ? 'font-semibold text-black' : 'font-normal text-grey-100'}`}
			>
				답변 완료
			</div>

			<div
				onClick={() => setActiveQuestion('새 질문')}
				className={`${isNew ? 'font-semibold text-black' : 'font-normal text-grey-100'}`}
			>
				새 질문
			</div>

			<div
				onClick={() => setActiveQuestion('거절 질문')}
				className={`${isNo ? 'font-semibold text-black' : 'font-normal text-grey-100'}`}
			>
				거절 질문
			</div>

			<div
				className={`absolute z-1 left-0 bottom-[-12px] w-80 h-3 bg-main-pink-600 mx-16 mt-16 transition duration-300 ease-in-out ${transform}`}
			></div>
		</div>
	);
};

export default QuestionCount;
