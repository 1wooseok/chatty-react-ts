import { useAnswered } from '~/api/questions/query';
import useIntersect from '~/hooks/useIntersect';
import AnsweredCard from '~/pages/Home/components/Answered';
import { QuestionModel } from '~/api/questions/model';

type Props = {
	username: string;
	profile_image: string;
};

const CardList = ({ username, profile_image }: Props) => {
	const { data, fetchNextPage, isFetchingNextPage } = useAnswered(username);

	if (data === undefined) {
		return null;
	}
	console.log(data);

	const pageBottomRef = useIntersect(fetchNextPage);

	return (
		<ul className={'flex flex-col gap-16 bg-background-inner py-16 px-20'}>
			{data?.map((d: QuestionModel, idx: number) => (
				<AnsweredCard
					key={idx}
					isAnony={true}
					username={username}
					content={d.content}
					answer_content={d.answer_content}
					created_date={d.created_date}
					profile_image={profile_image}
				/>
			))}

			<div ref={pageBottomRef} />
		</ul>
	);
};

export default CardList;
