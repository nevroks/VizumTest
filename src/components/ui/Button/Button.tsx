import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'



import styles from './style.module.css'
import ButtonText from './ButtonText'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    whiteSpaced?: boolean
}



const Button = ({
    children,
    className,
    whiteSpaced = false,
    ...rest
}: ButtonProps) => {
    const classes = whiteSpaced
        ? classNames({ [className!]: Boolean(className) })
        : classNames(
            styles['Button'],
            { [className!]: Boolean(className) },
        )

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    )
}

Button.Text = ButtonText

export default Button