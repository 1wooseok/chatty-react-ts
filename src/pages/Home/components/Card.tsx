import Icon from '~/components/Icon/Icon';
import CardBody from './CardBody';
import Card2 from '~/pages/Home/components/CardCompound';

export type CardProps = {
	isAnonymous: boolean;
	profile_image: string;
	username: string;
	content: string;
	// dest_username: string;
};

const Card = ({ isAnonymous, content, username, profile_image }: CardProps) => {
	return (
		<div className="shadow-lg p-16 rounded-2xl bg-white">
			<CardBody
				content={content}
				username={username}
				isAnonymous={isAnonymous}
				profile_image={profile_image}
			/>

			<div className="flex gap-8 my-16">
				<Icon
					size={'1rem'}
					icon={'arrowRight'}
					fillColor={'#FE7C58'}
					strokeColor={'#FE7C58'}
				/>
				<CardBody
					isAnonymous={false}
					username={username}
					profile_image={profile_image}
					content={content}
				/>
			</div>

			<Card2.Footer />
		</div>
	);
};

export default Card;
