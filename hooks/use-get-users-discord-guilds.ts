import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Server } from '../interface/server';

export function useGetUserGuilds() {
	const { data: session } = useSession();
	const { data, isLoading, error } = useQuery<Server[]>(
		['servers'],
		async () => {
			const response = await fetch(
				'https://discordapp.com/api/users/@me/guilds',
				{
					headers: {
						Authorization: `Bearer ${session?.accessToken}`,
					},
				}
			);
			if (!response.ok) {
				throw new Error('Could not fetch user guilds');
			}
			return response.json();
		},
		{ enabled: Boolean(session?.accessToken) }
	);
	return { data, isLoading, error };
}
