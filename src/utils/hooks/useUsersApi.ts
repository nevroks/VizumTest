import { useQuery } from "@tanstack/react-query"

import { usersApi, userType } from "@utils/apis/usersApi"

export const useUsersApi = () => {

	

	const getUserByIdQuery = (userId: number | undefined) => useQuery<userType>({
		queryFn: () => usersApi.getUserById({ userId: userId! }),
		queryKey: ['user', userId],
		staleTime: Infinity,
        enabled: Boolean(userId)
	})

	return {
		queries: {
			getUserByIdQuery
		}
	}
}