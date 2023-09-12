'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface MobileItemProps {
	icon: any
	href: string
	onClick?: () => void
	active?: boolean
}

const MobileItem = ({ icon: Icon, href, onClick, active }: MobileItemProps) => {
	const handleClick = () => {
		if (onClick) onClick()
	}

	return (
		<Link
			onClick={handleClick}
			href={href}
			className={clsx(
				`
				  group
				  flex
				  w-full
				  justify-center
				  gap-x-3
				  p-4
				  text-sm
				  font-semibold
				  leading-6
				  text-gray-500
				  hover:bg-gray-100
				  hover:text-black
				  `,
				active && 'bg-gray-100 text-black',
			)}>
			<Icon className='h-6 w-6 shrink-0' />
		</Link>
	)
}

export default MobileItem
