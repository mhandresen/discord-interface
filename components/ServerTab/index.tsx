import Link from 'next/link';
import React from 'react';
import { Server } from '../../interface/server';

type Props = {
	server: Server;
};

export default function ServerTab({ server }: Props) {
	return (
		<div>
			{/* ADD SLUG */}
			<Link href={`/`}>
				<a
					key={server.id}
					className="flex justify-between p-3 bg-bfc-base-3 cursor-pointer no-underline rounded h-[140px] group"
				></a>
			</Link>
		</div>
	);
}
