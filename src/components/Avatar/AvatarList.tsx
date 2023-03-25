import Avatar, { AvatarProps } from '~/components/Avatar/Avatar';

type Props = {
	users: AvatarProps[];
	userCount?: number;
};

const AvatarList = ({ users, userCount }: Props) => {
	return (
		<ul className={'flex'}>
			{users.map(({ avatarUrl, size, hasBorder }, idx) => (
				<li
					key={idx}
					style={{ zIndex: idx }}
					className={'ml-[-6px]'}
				>
					<Avatar
						avatarUrl={avatarUrl}
						size={size}
						hasBorder={hasBorder}
					/>
				</li>
			))}
		</ul>
	);
};

export default AvatarList;
