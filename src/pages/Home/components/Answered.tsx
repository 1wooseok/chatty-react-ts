import React from 'react';
import Icon from '~/components/Icon/Icon';
import Avatar from '~/components/Avatar/Avatar';
import Card2 from '~/pages/Home/components/Card';
import { QuestionModel } from '~/api/questions/model';

type Props = {
	answer: Omit<QuestionModel, 'pk'>;
};

export default function AnsweredCard({ answer }: Props) {
	const { answer_content, content, answered_date, created_date, author, profile } = answer;
	const isAnony = author === null;

	return (
		<Card2.Container>
			<Card2.More />
			{/*Author*/}
			{isAnony ? (
				<>
					<div className="flex items-center mb-4">
						<span className="text-main-primary text-xs pr-4">To </span>
						<Card2.UserId
							userId={profile.username}
							isAnony={true}
						/>
						<Card2.Time created_date={created_date} />
					</div>
					<Card2.Content content={content} />
				</>
			) : (
				<>
					<div className="flex ">
						<div className="pr-8">
							<Avatar
								size={48}
								src={author.profile_image}
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-row items-center">
								<Card2.Username username={author.profile_name} />
								<Card2.UserId
									userId={author.username}
									isAnony={false}
								/>
								<Card2.Time created_date={created_date} />
							</div>
							<div>
								<Card2.Content content={content} />
							</div>
						</div>
					</div>
				</>
			)}

			{/*Answer*/}
			<>
				<div className="flex flex-row items-start mt-16">
					<div className="rotate-270 mr-8">
						<Icon
							size={'1.5rem'}
							icon={'answerArrow'}
							fillColor={'#FE7C58'}
							strokeColor={'#FE7C58'}
							stroke={0.1}
						/>
					</div>
					<div className="flex flex-row items-start">
						<div className="mr-8">
							<Avatar
								size={48}
								src={profile.profile_image}
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex items-center">
								<Card2.Username username={profile.profile_name} />
								<Card2.UserId
									userId={profile.username}
									isAnony={false}
								/>
								<Card2.Time created_date={answered_date} />
							</div>
							<div>
								<Card2.Content content={answer_content} />
							</div>
						</div>
					</div>
				</div>
			</>

			<Card2.Footer />
		</Card2.Container>
	);
}
