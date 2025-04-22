import { Suspense } from 'react';
import styles from './style.module.css';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className={styles['Layout-content']}>
            <header className={styles['Layout-header']}>
                Здесь могла бы быть ваша реклама
            </header>
            <main className={styles['Layout-container']}>
                <div className={styles['Layout-container-content']}>
                    <Suspense fallback={
                        <div className={styles['Layout-container-content-loader']}>
                            <p>Загрузка страницы, пожалуйста подождите...</p>
                        </div>
                    }
                    >
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}

export default Layout;
