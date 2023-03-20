import React, { useCallback, useState } from 'react';

type QuestionType = '답변 완료' | '새 질문' | '거절 질문';

const QuestionCount = () => {
	const [currQ, setCurrQ] = useState<QuestionType>('답변 완료');

	const handleCurrQ = useCallback((q: QuestionType) => {
		setCurrQ(q);
	}, []);

	const highlight = (q: QuestionType) => (currQ === q ? 'font-semibold text-black' : 'font-normal text-grey-100');

	return (
		<div
			className={
				'relative flex justify-between items-center px-24 mt-24 font-14 font-normal transition duration-150 ease-out'
			}
		>
			<div
				onClick={() => handleCurrQ('답변 완료')}
				className={highlight('답변 완료')}
			>
				답변 완료
			</div>
			<div
				onClick={() => handleCurrQ('새 질문')}
				className={highlight('새 질문')}
			>
				새 질문
			</div>
			<div
				onClick={() => handleCurrQ('거절 질문')}
				className={highlight('거절 질문')}
			>
				거절 질문
			</div>

			<div className={'absolute left-0 bottom-0 w-80 h-3 bg-main-pink-600'}></div>
		</div>
	);
};

export default QuestionCount;
