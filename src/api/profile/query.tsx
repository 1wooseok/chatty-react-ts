import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/queryKey';
import { ProfileModel } from '~/api/profile/model';
import ChattyClient from '~/api/HttpClient';

export const useProfile = (username: string) => {
	return useQuery({
		enabled: !!username,
		queryFn: () => ChattyClient.get<ProfileModel>(`/user/profile/${username}`),
		queryKey: [QUERY_KEY.PROFILE, username],
		cacheTime: 1000 * 60, // 1분,
	});
};
