import React from 'react';
import Card2 from '~/pages/Home/components/CardCompound';
import Avatar from '~/components/Avatar/Avatar';
import { QuestionModel } from '~/api/questions/model';
import { previewAvatarImageSrc } from '~/constants/preview';
import Icon from '~/components/Icon/Icon';
// import { QuestionModel } from 'api/question/model';

// 1. From Anony
// 2. From Friend
type Props = {
	isPinned?: boolean;
	isAnony: boolean;
	username: string;
	profile_image: string;
} & Omit<QuestionModel, 'pk'>;

const AnsweredCard = ({ isAnony = true, created_date, content, answer_content }: Props) => {
	return (
		<Card2.Container>
			<Card2.More />
			{/*{isPinned ? <Card2.Pin /> : null}*/}
			{isAnony ? (
				<>
					<div className="flex items-center mb-4">
						<span className="text-main-primary text-xs pr-4">To </span>
						<Card2.UserId
							userId="rre1102"
							isAnony={true}
						/>
					</div>
					<Card2.Content content={content} />
				</>
			) : (
				<>
					<div className="flex ">
						<div className="pr-8">
							<Avatar
								size={48}
								src={previewAvatarImageSrc}
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-row items-start">
								<Card2.Username username={'USERNAME'} />
								<Card2.UserId
									userId="carrot-09"
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

			<>
				<div className="flex flex-row items-start mt-16">
					<div className="rotate-180 mr-8">
						<Icon
							size={'1rem'}
							icon={'arrowRight'}
							fillColor={'#FE7C58'}
							strokeColor={'#FE7C58'}
						/>
					</div>
					<div className="flex flex-row items-start">
						<div className="mr-8">
							<Avatar
								size={48}
								src={previewAvatarImageSrc}
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-row items-center">
								<Card2.Username username={'USERNAME'} />
								<Card2.UserId
									userId="carrot-09"
									isAnony={false}
								/>
								<Card2.Time created_date={created_date} />
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
};

export default AnsweredCard;
