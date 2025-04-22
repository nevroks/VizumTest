import { Button } from "@ui";
import { usePostsApi, useUsersApi } from "@utils/hooks";
import { useNavigate, useParams } from "react-router";
import styles from './style.module.css'
import { APP_PATHS } from "@utils/consts";

const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const { queries: { getPostByIdQuery } } = usePostsApi()
    const { queries: { getUserByIdQuery } } = useUsersApi()
    // тут в идеале провести оптимизацию на проверку, типо вдруг уже загружен пост
    const { data: post, isLoading: isPostLoading, isError: isPostError } = getPostByIdQuery(Number(postId!))
    const { data: user, isLoading: isUserLoading, isError: isUserError } = getUserByIdQuery(post?.userId)

    if (isUserError) {
        return
    }
    if (isPostLoading || isUserLoading) {
        return (
            <div>Пост загружается...</div>
        )
    }

    return (
        <div className={styles['PostPage']}>

            {isPostError ?
                <>
                    <Button onClick={() => navigate(APP_PATHS.MAIN_PAGE)}>
                        <Button.Text text="На главную" />
                    </Button>
                    <p>Данного поста не существует или он был удалён</p>
                </>

                :
                <div>
                    <nav className={styles['PostPage-navigation']}>
                        {/* если тут указать -1 то будет много ошибок */}
                        <Button onClick={() => navigate(APP_PATHS.MAIN_PAGE)}>
                            <Button.Text text="Назад" />
                        </Button>
                        <h3 className={styles['PostPage-title']}>Автор: {user!.username}</h3>
                        <div>
                            <p>Контакты</p>
                            <div>
                                <p>email:{user!.email}</p>
                                <p>phone:{user!.phone}</p>
                            </div>
                        </div>
                    </nav>
                    <div className={styles['PostPage-post']}>
                        <h2 className={styles['PostPage-post-title']}>Заголовок: {post!.title}</h2>
                        <p>Описание: {post!.body}</p>
                    </div>
                </div>

            }
        </div>
    );
}

export default PostPage;
