'use client'

import useConversation from '@/app/hooks/useConversation'
import EmptyState from '@/app/components/EmptyState'
import clsx from 'clsx'

const Conversations = () => {
	const { isOpen } = useConversation()

	return (
		<div className={clsx('h-full lg:block lg:pl-80', isOpen ? 'block' : 'hidden')}>
			<EmptyState />
		</div>
	)
}

export default Conversations
