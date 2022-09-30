import { Server } from '../../interface/server';

type Props = {
	servers: Server[];
};

export default function ServerGrid({ servers }: Props) {
	return (
		<div className="flex justify-between mb-4">
			<div
				className={`grid grid-cols-3 ${servers.length == 2 && 'grid-cols-2'}`}
			>
				<div>test</div>
				<div>test</div>
				<div>test</div>
			</div>
		</div>
	);
}
