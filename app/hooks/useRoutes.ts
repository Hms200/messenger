import { usePathname } from 'next/navigation'
import useConversation from '@/app/hooks/useConversation'
import { useMemo } from 'react'
import { HiChat } from 'react-icons/hi'
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2'
import { signOut } from 'next-auth/react'

const useRoutes = () => {
	const pathName = usePathname()
	const { conversationId } = useConversation()

	return useMemo(
		() => [
			{
				label: 'Chat',
				href: '/conversations',
				icon: HiChat,
				active: pathName === '/conversations' || !!conversationId,
			},
			{
				label: 'Users',
				href: '/users',
				icon: HiUsers,
				active: pathName === '/users',
			},
			{
				label: 'Logout',
				href: '#',
				onClick: () => signOut(),
				icon: HiArrowLeftOnRectangle,
			},
		],
		[pathName, conversationId],
	)
}

export default useRoutes