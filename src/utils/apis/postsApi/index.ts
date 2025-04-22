import { APP_BACKEND_URL } from "@utils/consts";
import axios from "axios";

export type postType = {
    id: number,
    title: string
    userId: number
    body: string
}
type getPostsDtoType = {
    page: number
}
type getPostByIdDtoType = {
    id: number
}
export const postsApi = {
    api: axios.create({
        baseURL: `${APP_BACKEND_URL}/posts`,
    }),
    getPosts: async function (dto: getPostsDtoType): Promise<postType[]> {
        try {
            const { data } = await this.api.get('', {
                params: {
                    _page: dto.page,
                    _limit: 10
                }
            })
            return data
        } catch (error) {
            console.error('Произошла ошибка запросе на получение постов', error)
            throw error
        }
    },
    getPostById: async function (dto: getPostByIdDtoType): Promise<postType> {
        try {
            const { data } = await this.api.get(`/${dto.id}`)
            return data
        } catch (error) {
            console.error('Произошла ошибка запросе на получение поста', error)
            throw error
        }
    }
};