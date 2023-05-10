import React, { useMemo } from 'react';
import Badge from '~/components/Badge/Badge';

type Props = {
	activeIdx: number;
	tabs: string[];
	indicatorColor?: string;
	hasNew?: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Tabs = ({ activeIdx, tabs, hasNew = false, indicatorColor = '#F892C3', onClick }: Props) => {
	const width = useMemo(() => Math.round(100 / tabs.length), [tabs.length]);

	return (
		<>
			<div className="flex justify-around items-center text-center font-14 font-normal w-full bg-white">
				{tabs.map((tab, idx) => (
					<div
						key={idx}
						style={{ width: width + '%' }}>
						<div className={'flex items-center justify-center gap-4 '}>
							<button onClick={e => onClick(e)}>
								<span
									className={`text-14 ${
										activeIdx === idx ? 'font-bold text-light-primary' : 'font-medium text-light-secondary'
									}`}>
									{tab}
								</span>
							</button>
							{hasNew && (
								<Badge
									size={16}
									label={'N'}
								/>
							)}
						</div>
					</div>
				))}
			</div>
			<div
				className={'w-full mt-6 transition duration-300 ease-in-out overflow-x-hidden'}
				style={{ transform: `translateX(${width * activeIdx}%)` }}>
				<div
					style={{
						height: '3px',
						width: width / 2 + '%',
						transform: 'translateX(50%)',
						backgroundColor: indicatorColor,
					}}></div>
			</div>
		</>
	);
};

export default Tabs;
