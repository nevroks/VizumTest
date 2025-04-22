import { APP_BACKEND_URL } from "@utils/consts";
import axios from "axios";

export type userType = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
    company: {
        bs: string
        catchPhrase: string
        name: string
    }
    address: {
        city: string
        geo: {
            lat: string
            lng: string
        }
        street: string
        suite: string
        zipcode: string
    }
}
type getUserByIdDtoType = {
    userId: number
}
export const usersApi = {
    api: axios.create({
        baseURL: `${APP_BACKEND_URL}/users`,
    }),
    getUserById: async function (dto: getUserByIdDtoType): Promise<userType> {
        try {
            const { data } = await this.api.get(`/${dto.userId}`)
            return data
        } catch (error) {
            console.error('Произошла ошибка в запросе на получение пользователя ', error)
            throw error
        }
    }
};