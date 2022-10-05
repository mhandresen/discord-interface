import Link from 'next/link';
import React from 'react';
import { Server } from '../../interface/server';
import Image from "next/image"

type Props = {
	server: Server;
};

function getServerInitials(serverName: string):string {
	const serverNameArray = serverName.split(" ")
	const serverInitials = serverNameArray.map((word) => word.charAt(0))
	return serverInitials.join("")
}

export default  function ServerTab({ server }: Props) {

	
	const serverInitials = getServerInitials(server.name)
	
	return (
		<div className="m-4 border border-gray-600 rounded h-[300px] w-[300px] relative">
				<div className='absolute '>
				<Image
						className="blur-xl scale-125 brightness-50 rounded"
						src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
						width={300}
						height={300}
						alt={serverInitials}
					/>
				</div>
			
			{/* <div className='fixed h-[300px] w-[300px] -z-1'>
				<Image
					className="filter blur-md scale-125"
					layout='fill'
					src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
					width={500}
					height={500}
					alt={serverInitials}
				/>
			</div>
			<div className="" >
				<div className='border-4 rounded-full h-[100px] w-[100px]'>
					<Image
						className="rounded-full overflow-hidden"
						layout='fixed'
						src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
						width={100}
						height={100}
						alt={serverInitials}
					/>
				</div>
			
			</div> */}
			<div className='relative w-[300px] h-[300px] rounded'>
			<div className='absolute inset-0 text-center top-6'>
				<Image
					className="rounded-full text-white m-1/2 border-1 border-red-500"
					layout='fixed'
					src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
					width={100}
					height={100}
					alt={serverInitials}
				/>
			</div>
			</div>
			
			<div className='absolute inset-x-0 bottom-0 text-center'>
				<div className='bg-gray-900 relative rounded h-[150px]'>
					
				
					<h1 className=' text-white '>{server.name}</h1>
					<button className='text-white'>{!server ? 'Configure' : 'Setup'}</button>
				</div>
			</div>
		</div>
	);
}
