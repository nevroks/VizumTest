import { HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
type ButtonTextProps = Omit<HTMLProps<HTMLParagraphElement>, 'children'> & {
	text: string
}

const ButtonText = ({
	text,
	className,
	...rest
}: ButtonTextProps) => {
	return (
		<p
			className={classNames(
                styles['ButtonText'],
                { [className!]: Boolean(className) }
			)}
			{...rest}
		>
			{text}
		</p>
	)
}

export default ButtonText