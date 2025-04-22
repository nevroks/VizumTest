import classNames from "classnames";
import { HTMLProps } from "react";
import styles from "./style.module.css";
type PostHeaderTitleProps = HTMLProps<HTMLHeadingElement> & {
    title: string
}

const PostHeaderTitle = ({ className, title, ...rest }: PostHeaderTitleProps) => {
    return (
        <h4 className={classNames(styles['PostHeaderTitle'], { [className!]: Boolean(className) })} {...rest}>
            {title}
        </h4>
    );
}

export default PostHeaderTitle;
