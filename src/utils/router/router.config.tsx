import { createBrowserRouter } from "react-router";

import { Layout } from "@components";
import { lazy } from "react";
import { APP_PATHS } from "@utils/consts";


const MainPage = lazy(() => import("@pages/MainPage/MainPage"));
const PostPage = lazy(() => import("@pages/PostPage/PostPage"));



const router = createBrowserRouter([
    {
        path: APP_PATHS.MAIN_PAGE,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: APP_PATHS.POST_PAGE,
                element: <PostPage />,
            },
            {
                path: '*',
                element: <div>404</div>,    
            }
        ],
    },
]);



export default router;