import classNames from 'classnames';
import { HTMLProps, ReactElement } from 'react';
import styles from './style.module.css';
import PostHeader, { PostHeaderProps } from './PostHeader';
import PostBody, { PostBodyProps } from './PostBody';
import React from 'react';


// Утилиты для проверки типов
type PostHeaderComponent = ReactElement<PostHeaderProps>;
type PostBodyComponent = ReactElement<PostBodyProps>;
function isPostHeader(element: ReactElement): element is PostHeaderComponent {
    return element.type === PostHeader;
}

function isPostBody(element: ReactElement): element is PostBodyComponent {
    return element.type === PostBody;
}

type PostProps = HTMLProps<HTMLDivElement> & {
    children: (PostHeaderComponent | PostBodyComponent)[];
};
const Post = ({ className, children, ...rest }: PostProps) => {
    if (import.meta.env.DEV) {
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                if (!isPostHeader(child) && !isPostBody(child)) {
                    throw new Error('Post component can only have PostHeader or PostBody as children');
                }
            }
        });
    }


    return (
        <div className={classNames(styles['Post'], {
            [className!]: Boolean(className)
        })} {...rest}>
            {children}
        </div>
    );
}

Post.Header = PostHeader
Post.Body = PostBody

export default Post;
