import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'

const getConversations = async () => {
	const currentUser = await getCurrentUser()

	if (!currentUser?.id) return []

	try {
		return await prisma.conversation.findMany({
			// orderBy: {
			// 	lastMessagetAt: 'desc',
			// },
			where: {
				userIds: {
					has: currentUser.id,
				},
			},
			include: {
				users: true,
				messages: {
					include: {
						sender: true,
						seen: true,
					},
				},
			},
		})
	} catch (error) {
		return []
	}
}

export default getConversations
