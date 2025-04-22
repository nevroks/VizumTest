import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { postsApi } from "@utils/apis"
import { postType } from "@utils/apis/postsApi"

export const usePostsApi = () => {

	const getPostsQuery = (page: number) => useQuery<postType[]>({
		queryFn: () => postsApi.getPosts({ page: page }),
		queryKey: ['posts_page', page],
		staleTime: Infinity,
		placeholderData: keepPreviousData
	})

	const getPostByIdQuery = (id: number) => useQuery<postType>({
		queryFn: () => postsApi.getPostById({ id: id }),
		queryKey: ['post', id],
		staleTime: Infinity,
	})

	return {
		queries: {
			getPostsQuery,
			getPostByIdQuery
		}
	}
}