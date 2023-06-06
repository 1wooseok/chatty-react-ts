import React from 'react';
import { getElapsedTime, ServerDateFormat } from '~/utils/date';
import Icon from '~/components/Icon/Icon';
import { IconTypes } from '~/types/components/icon';
import useClipBoard from '../../../hooks/useClipBoard';

const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className="relative shadow-lg flex flex-col bg-white rounded-2xl p-16">{children}</div>;
};

const Pin = () => {
	return (
		<div className="flex flex-row items-center gap-4 mb-8">
			<span className="text-pink-dark text-xs font-semibold">메인체티</span>
		</div>
	);
};

const More = () => {
	// const [isOpen, toggleModal] = useBool(false);

	return (
		<>
			<button
				// onClick={toggleModal}
				className="absolute right-16 top-16 z-10">
				<Icon
					size={'18px'}
					fillColor={'#333333'}
					strokeColor={'#333333'}
					icon={'ellipsisVertical'}
					stroke={3}
				/>
			</button>
		</>
	);
};

const UserId = ({ userId, isAnony }: { userId: string; isAnony: boolean }) => {
	const style = isAnony ? 'text-main-primary font-bold' : 'text-light-secondary font-normal';

	return <span className={`chattyId text-xs ${style}`}>@{userId}</span>;
};

const Time = ({ created_date }: { created_date: ServerDateFormat }) => {
	return (
		<div className="flex flex-row items-center text-light-secondary">
			<span className="mx-10">·</span>
			<span className="text-xs">{getElapsedTime(created_date)}</span>
		</div>
	);
};

const Content = ({ content }: { content: string }) => {
	return <pre className="text-base font-medium text-light-primary">{content}</pre>;
};

const Username = ({ username }: { username: string }) => {
	return (
		<div>
			<span className="font-bold text-base text-black mr-4">{username}</span>
		</div>
	);
};

type UtilBrnProps = {
	icon: IconTypes;
	count?: number;
	color?: string;
	stroke?: number;
	onClick?: () => void;
};

const UtilBtn = ({ icon, count, color, stroke, onClick }: UtilBrnProps) => (
	<button
		onClick={onClick}
		className="flex flex-row items-center gap-4">
		<Icon
			className="text-base"
			size={'16px'}
			icon={icon}
			fillColor={color}
			stroke={stroke || 2.5}
		/>
		{count && (
			<span className="font-normal text-sm text-light-primary">
				{count > 9999 ? `${parseInt(String(count / 1000), 10)}k` : count.toLocaleString()}
			</span>
		)}
	</button>
);

const Heart = () => {
	return (
		<UtilBtn
			icon={'heart'}
			count={0}
			color={'white'}
		/>
	);
};

const BookMark = () => {
	return (
		<UtilBtn
			icon={'bookmark'}
			count={0}
			color={'white'}
		/>
	);
};

const Share = () => {
	const copyToClipboard = useClipBoard();

	return (
		<UtilBtn
			onClick={() => copyToClipboard(window.location.href)}
			icon={'uploadTray'}
			color={'white'}
		/>
	);
};

const Footer = () => {
	return (
		<div className="flex flex-row items-center justify-between px-28 mt-16">
			<Heart />
			<BookMark />
			<Share />
		</div>
	);
};

const Card2 = Object.assign(() => null, {
	Container,
	Pin,
	More,
	UserId,
	Time,
	Content,
	Username,
	Footer,
});

export default Card2;
