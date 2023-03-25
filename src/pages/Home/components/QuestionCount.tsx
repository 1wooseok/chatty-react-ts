import { useMemo, useState } from 'react';

type QuestionType = '답변 완료' | '새 질문' | '거절 질문';
type Props = {
	tabs: string[];
};

const QuestionCount = ({ tabs }: Props) => {
	const [activeIdx, setActiveIdx] = useState<number>(0);

	const width = useMemo(() => Math.round(100 / tabs.length), [tabs.length]);

	return (
		<>
			<div className="flex justify-around items-center text-center font-14 font-normal w-full">
				{tabs.map((tab, idx) => (
					<div
						key={idx}
						style={{ width: width + '%' }}
						onClick={() => setActiveIdx(idx)}
						className={`${activeIdx === idx ? 'font-semibold text-black' : 'font-normal text-grey-100'}`}
					>
						{tab}
					</div>
				))}
			</div>
			<div
				className={'w-full mt-6 transition duration-300 ease-in-out overflow-x-hidden'}
				style={{ transform: `translateX(${width * activeIdx}%)` }}
			>
				<div
					className={'bg-main-pink-600 h-3'}
					style={{ width: width / 2 + '%', transform: 'translateX(50%)' }}
				></div>
			</div>
		</>
	);
};

export default QuestionCount;
