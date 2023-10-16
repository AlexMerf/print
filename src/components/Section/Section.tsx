import { HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

interface IProps extends HTMLAttributes<HTMLElement> {
	children?: ReactNode
	className?: string
	withoutTop?: boolean
	withoutBottom?: boolean
}

export const Section = ({
	children,
	className,
	withoutTop,
	withoutBottom,
	...props
}: IProps) => {
	return (
		<section
			className={cn(styles.container, className)}
			{...props}
			data-margin-top={withoutTop}
			data-margin-bottom={withoutBottom}
		>
			{children}
		</section>
	)
}
