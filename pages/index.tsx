import { signOut } from 'next-auth/react';
import Button from '../components/Button';
import ServerGrid from '../components/ServerGrid';
import ServerTab from '../components/ServerTab';
import { useGetUserGuilds } from '../hooks/use-get-users-discord-guilds';
import { Server } from '../interface/server';

export default function Home() {
	const { data, isLoading, error } = useGetUserGuilds();
	if (isLoading || !data) return <>Loading...</>;
	if (error) return <div>{error.toString()}</div>;

	return (
		<div className="bg-gray-800">
			<ul>
				<ServerGrid servers={data} />
				<Button onClick={() => signOut()}>Sign out</Button>
				{data.map((server: Server) => {
					return (
						<>
							<li key={server.id}>
								<ul className="text-white">
									<li>Name: {server.name}</li>
									<li>Id: {server.id}</li>
									<li>Features: {server.features}</li>
									<li>Icon: {server.icon}</li>
									<li>Owner: {server.owner ? 'True' : 'False'}</li>
									<li>Permissions: {server.permissions}</li>
									<li>Permissions_new: {server.permissions_new}</li>
									<br />
								</ul>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	);
}
