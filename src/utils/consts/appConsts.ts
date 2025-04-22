export const APP_PATHS = {
    MAIN_PAGE: `${import.meta.env.BASE_URL}`,
    POST_PAGE: `${import.meta.env.BASE_URL}post/:postId`,
}
// В ИДЕАЛЕ эту штуку в .env конечно записать, но это не обязательно
export const APP_BACKEND_URL = 'https://jsonplaceholder.typicode.com';