import { HTMLProps, ReactNode } from "react";

export type PostBodyProps = HTMLProps<HTMLDivElement> & {
    children: ReactNode
}
import styles from './style.module.css'
import classNames from "classnames";
const PostBody = ({ className, children, ...rest }: PostBodyProps) => {
    return (
        <div className={classNames(styles['PostBody'], { [className!]: Boolean(className) })} {...rest}>
            {children}
        </div>
    );
}

export default PostBody;
