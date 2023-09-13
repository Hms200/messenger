'use client'

import { Conversation } from '.prisma/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import useConversation from '@/app/hooks/useConversation'
import clsx from 'clsx'
import { MdOutlineGroupAdd } from 'react-icons/md'
import ConversationBox from '@/app/conversations/components/ConversationBox'
import { FullConversationType } from '@/app/types'

interface ConversationListProps {
	initialItems: Conversation[]
}

const ConversationList = ({ initialItems }: ConversationListProps) => {
	const [items, setItems] = useState(initialItems)
	const router = useRouter()

	const { conversationId, isOpen } = useConversation()

	console.log(initialItems)

	return (
		<aside
			className={clsx(
				`
				fixed
				inset-y-0
				overflow-y-auto
				border-r
				border-gray-200
				pb-20
				lg:left-20
				lg:block
				lg:w-80
				lg:pb-0
	`,
				isOpen ? 'hidden' : 'left-0 block w-full',
			)}>
			<div className='px-5'>
				<div className='mb-4 flex justify-between pt-4'>
					<div className='text-2xl font-bold text-neutral-800'>Messages</div>
					<div className='cursor-pointer rounded-full bg-gray-100 p-2 text-gray-600 transition hover:opacity-75'>
						<MdOutlineGroupAdd size={20} />
					</div>
				</div>
				{items.map((item) => (
					<ConversationBox
						key={item.id}
						data={item as FullConversationType}
						selected={item.id === conversationId}
					/>
				))}
			</div>
		</aside>
	)
}

export default ConversationList
