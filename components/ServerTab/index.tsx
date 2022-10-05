import Link from 'next/link';
import React from 'react';
import { Server } from '../../interface/server';

type Props = {
	server: Server;
};

export default function ServerTab({ server }: Props) {
	return (
		<div className="m-4">
			{/* ADD SLUG */}
			<Link href={`/`}>
				<a
					key={server.id}
					className="flex justify-between p-3 bg-bfc-base-3 cursor-pointer no-underline rounded h-[140px] group border border-gray-500"
				>
					<h1>{server.name}</h1>
					<button>{!server ? 'Configure' : 'Setup'}</button>
				</a>
			</Link>
		</div>
	);
}