import type { NextPage } from 'next';
import '@intility/bifrost-react/dist/bifrost-app.css';
import { useUsersDiscordGuilds } from '../hooks/use-get-users-discord-guilds';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Spinner } from '@intility/bifrost-react';
import { useQuery } from '@tanstack/react-query';
import { Server } from '../interface/server';

export default function Home() {
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
	if (isLoading || !data) return <Spinner />;
	if (error) return <div>{error.toString()}</div>;

	return (
		<ul>
			{data.map((server) => {
				return (
					<li key={server.id}>
						{server.name} - {server.id}
					</li>
				);
			})}
		</ul>
	);
}
