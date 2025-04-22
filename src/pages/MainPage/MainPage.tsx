import { useDebounce, usePostsApi } from "@utils/hooks";
import { useState } from "react";
import styles from './style.module.css'
import { Post } from "@components";

const MainPage = () => {

    const [currentPostsPage, setCurrentPostsPage] = useState(1)

    
    console.log("quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" === 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto');
    

    const debouncedCurrentPostsPage = useDebounce(currentPostsPage, 400)

    const { queries: { getPostsQuery } } = usePostsApi()

    const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = getPostsQuery(debouncedCurrentPostsPage)

    if (isPostsLoading) {
        return (
            <div>Посты загружаются</div>
        )
    }

    if (isPostsError) {
        return (
            <div>Произошла ошибка</div>
        )
    }

    return (
        <div className={styles['MainPage']}>
            <h2 className={styles['MainPage-title']}>Список постов</h2>
            {posts!.length === 0 ?
                <div>
                    <p>Это последняя страница</p>
                    <button onClick={() => setCurrentPostsPage(1)}>Вернутся на 1-ую страницу</button>
                </div>
                :
                <div className={styles['MainPage-posts']}>
                    <div className={styles['MainPage-posts-pagination']}>
                        <button onClick={() => setCurrentPostsPage(prev => prev > 1 ? prev - 1 : 1)}>{'<'}</button>
                        <p>{currentPostsPage}</p>
                        <button onClick={() => setCurrentPostsPage(prev => prev + 1)}>{'>'}</button>
                    </div>
                    <div className={styles['MainPage-posts-list']}>
                        {posts!.map((post) => {

                            return (
                                <Post key={post.id}>
                                    <Post.Header>
                                        <Post.Header.Id id={String(post.id)} />
                                        <Post.Header.Title title={post.title} />
                                        <Post.Header.Button postId={post.id} buttonText={post.id === 23 ? "Это 23 элемент" : "Посмотреть"} />
                                    </Post.Header>
                                    {post.id === 5 ?
                                        <Post.Body>
                                            <p>Вот здесь сделаем x3 текст чтобы видеть обрезание текста</p>
                                            <p>{post.body}</p>
                                            <p>d {post.body}</p>
                                            <p>d {post.body}</p>
                                        </Post.Body>
                                        :
                                        <Post.Body>
                                            <p>{post.body}</p>
                                        </Post.Body>
                                    }

                                </Post>

                            )
                        })}
                    </div>
                    <div className={styles['MainPage-posts-pagination']}>
                        <button onClick={() => setCurrentPostsPage(prev => prev > 1 ? prev - 1 : 1)}>{'<'}</button>
                        <p>{currentPostsPage}</p>
                        <button onClick={() => setCurrentPostsPage(prev => prev + 1)}>{'>'}</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default MainPage;
