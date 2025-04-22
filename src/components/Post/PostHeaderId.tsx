import classNames from 'classnames';
import { HTMLProps } from 'react';
import styles from './style.module.css';
type PostHeaderIdProps = Omit<HTMLProps<HTMLParagraphElement>, 'children'> & {
    id: string
}

const PostHeaderId = ({ className, id, ...rest }: PostHeaderIdProps) => {
    return (
        <p className={classNames(styles['PostHeaderId'], { [className!]: Boolean(className) })} {...rest}>
            {id}.
        </p>
    );
}

export default PostHeaderId;
