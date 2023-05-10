export type ProfileModel = {
	username: string;
	profile_name: string;
	user_id: number;
	response_rate: number;
	question_count: {
		answered: number;
		unanswered: number;
		rejected: number;
	};
	profile_image: string;
	background_image: string;
	profile_message: string;
	follower: number;
	following: number;
	views: number;
};
