import { ReactNode } from 'react'

export interface IDrawer {
	children: ReactNode
	open: boolean
	onClose: () => void
}
