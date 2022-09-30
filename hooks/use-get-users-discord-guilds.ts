import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function useUsersDiscordGuilds() {
	const [servers, setServers] = useState<[]>();
	const { data: session, status } = useSession();

	if (status === 'loading' || !session) return;

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				'https://discordapp.com/api/users/@me/guilds',
				{
					headers: {
						Authorization: `Bearer ${session.accessToken}`,
					},
				}
			);
			if (!response.ok) {
				throw new Error('Could not fetch user guilds');
			}
			setServers(await response.json());
		};

		getData();
	}, []);

	return servers;
}
