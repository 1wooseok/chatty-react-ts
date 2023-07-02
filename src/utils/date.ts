export type ServerDateFormat = `${string}-${string}-${string}T${string}:${string}:${string}`;

export function getElapsedTime(date: ServerDateFormat): string {
	const today = new Date();
	const timeValue = new Date(date);
	// console.log({ today, timeValue });
	const NINE_HOUR = 1000 * 60 * 60 * 9;
	const betweenTime = Math.floor((today.getTime() + NINE_HOUR - (timeValue.getTime() + NINE_HOUR)) / 1000 / 60);

	if (betweenTime < 1) {
		return '방금전';
	}
	if (betweenTime < 60) {
		return `${betweenTime}분전`;
	}

	const betweenTimeHour = Math.floor(betweenTime / 60);
	if (betweenTimeHour < 24) {
		return `${betweenTimeHour}시간전`;
	}

	const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
	if (betweenTimeDay < 365) {
		return `${betweenTimeDay}일전`;
	}

	return `${Math.floor(betweenTimeDay / 365)}년전`;
}
