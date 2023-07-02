import { ServerDateFormat } from '~/utils/date';
import { ProfileModel } from '~/api/profile/model';

export type QuestionModel = {
	pk: number;
	created_date: ServerDateFormat;
	answered_date: ServerDateFormat;
	profile: Pick<ProfileModel, 'username' | 'profile_name' | 'profile_image' | 'background_image'>;
	author: null | Pick<ProfileModel, 'username' | 'profile_name' | 'profile_image' | 'background_image'>;
	content: string;
	answer_content: string;
};

export type QuestionApiRes = {
	next: number;
	previous: number | null;
	results: QuestionModel[];
};

export type PostQuestionPayload = {
	username: string;
	content: string;
};

export type PostQuestionRes = {
	pk: number;
	info: string;
	content: string;
	created_date: ServerDateFormat;
	username: string;
};
