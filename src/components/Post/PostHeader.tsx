import classNames from "classnames";
import { HTMLProps, ReactNode } from "react";
import styles from "./style.module.css";
import PostHeaderButton from "./PostHeaderButton";
import PostHeaderTitle from "./PostHeaderTitle";
import PostHeaderId from "./PostHeaderId";

export type PostHeaderProps = HTMLProps<HTMLDivElement> & {
    children: ReactNode
    
}

const PostHeader = ({ className, children, ...rest }: PostHeaderProps) => {
    return (
        <div className={classNames(styles['PostHeader'], { [className!]: Boolean(className) })} {...rest}>
            {children}
        </div>
    );
}

PostHeader.Title = PostHeaderTitle
PostHeader.Id = PostHeaderId
PostHeader.Button = PostHeaderButton

export default PostHeader;
