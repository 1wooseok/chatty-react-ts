import Icon from '~/components/Icon/Icon';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

type Props = {
	isAnonymous: boolean;

	// username: string;
	// dest_username: string;
	content: string;
};

const Card = ({
	isAnonymous,
	content,
}: // username,
// dest_username,
// content,
Props) => {
	return (
		<div className="shadow-lg p-16 rounded-2xl">
			<CardBody
				isAnonymous={isAnonymous}
				content={content}
			/>

			<div className="flex gap-8 my-16">
				<Icon
					size={'1rem'}
					icon={'arrowRight'}
					fillColor={'rgb(254 124 88)'}
				/>
				<CardBody
					isAnonymous={false}
					content={content}
				/>
			</div>

			<CardFooter />
		</div>
	);
};

export default Card;
