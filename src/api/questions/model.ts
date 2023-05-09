import { ServerDateFormat } from 'utils/date';

export type QuestionModel = {
	pk: number;
	content: string;
	created_date: ServerDateFormat;
	answer_content: string;
};

export type QuestionApiRes = {
	next: number;
	previous: number | null;
	results: QuestionModel[];
};

export type PostQuestionPayload = {
	target_profile: string;
	content: string;
};

export type PostQuestionRes = {
	pk: number;
	info: string;
	content: string;
	created_date: ServerDateFormat;
	target_profile: string;
};
