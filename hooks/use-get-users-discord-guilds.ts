import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export function useUsersDiscordGuilds() {
	const { data: session, status } = useSession();
	if (status === 'loading' || !session) return;
	useEffect(() => {
		fetch('https://discordapp.com/api/users/@me/guilds', {
			headers: {
				Authorization: `Bearer ${session.accessToken}`,
			},
		}).then((res) => {
			if (!res.ok) {
				throw new Error('Failed to fetch user guilds');
			}
			return res.json();
		});
	}, []);
}
