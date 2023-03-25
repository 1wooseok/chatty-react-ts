import { useState } from 'react';

type QuestionType = '답변 완료' | '새 질문' | '거절 질문';
type Props = {
	tabs: string[];
};

const QuestionCount = ({ tabs }: Props) => {
	const [activeIdx, setActiveIdx] = useState<number>(0);

	const width = `calc(100% / ${tabs.length})`;
	const indicatorStyle = {
		left: `calc(${activeIdx} * (100% / ${tabs.length}))`,
		width: `calc(calc(100% / ${tabs.length}))`,
		transition: 'left 0.3s ease-in-out',
	};

	return (
		<div className="relative flex justify-around items-center mt-24 font-14 font-normal w-full">
			{tabs.map((tab, idx) => (
				<div
					key={idx}
					style={{ width, textAlign: 'center' }}
					onClick={() => setActiveIdx(idx)}
					className={`${activeIdx === idx ? 'font-semibold text-black' : 'font-normal text-grey-100'}`}
				>
					{tab}
				</div>
			))}
			<div
				style={indicatorStyle}
				className={
					'absolute z-100 left-0 bottom-[-12px] h-3 bg-main-pink-600 mt-16 transition duration-300 ease-in-out'
				}
			></div>
		</div>
	);
};

export default QuestionCount;
