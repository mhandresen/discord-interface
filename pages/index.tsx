import ServerGrid from '../components/ServerGrid';
import ServerTab from '../components/ServerTab';
import { useGetUserGuilds } from '../hooks/use-get-users-discord-guilds';
import { Server } from '../interface/server';

export default function Home() {
	const { data, isLoading, error } = useGetUserGuilds();
	if (isLoading || !data) return <>Loading...</>;
	if (error) return <div>{error.toString()}</div>;

	return (
		<ul>
			<ServerGrid servers={data} />
			{data.map((server: Server) => {
				return (
					<>
						<li key={server.id}>
							<ul>
								<li>Name: {server.name}</li>
								<li>Id: {server.id}</li>
								<li>Features: {server.features}</li>
								<li>Icon: {server.icon}</li>
								<li>Owner: {server.owner ? 'True' : 'False'}</li>
								<li>Permissions: {server.permissions}</li>
								<li>Permissions_new: {server.permissions_new}</li>
							</ul>
						</li>
						<ServerTab server={server} />
					</>
				);
			})}
		</ul>
	);
}
