import { Button } from '@ui';

import { ButtonProps } from '../ui/Button/Button';
import classNames from 'classnames';
import styles from './style.module.css';
import { Link } from 'react-router';
import { APP_PATHS } from '@utils/consts';
type PostHeaderButtonProps = Omit<ButtonProps, 'children' | 'className'> & {
    postId: number
    buttonText: string
    wrapperClassName?: string
    buttonClassName?: string
    textClassName?: string
}

const PostHeaderButton = ({ wrapperClassName, buttonClassName, textClassName, postId, buttonText, ...rest }: PostHeaderButtonProps) => {
    return (
        <Link className={classNames(styles['PostHeaderButton-wrapper'], { [wrapperClassName!]: Boolean(wrapperClassName) })} to={APP_PATHS.POST_PAGE.replace(':postId', String(postId))}>
            <Button className={classNames(styles['PostHeaderButton'], { [buttonClassName!]: Boolean(buttonClassName) })} {...rest}>
                <Button.Text className={textClassName} text={buttonText} />
            </Button>
        </Link>

    );
}

export default PostHeaderButton;
