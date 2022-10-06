import cx from 'classnames';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Button from '../Button';
import NavBar from '../NavBar';
type Props = {
	children: ReactNode;
};

const LINKS = [
	{
		name: 'Dashboard',
		path: '/',
	},
	{
		name: 'Servers',
		path: '/servers',
	},
];

function LoginView() {
	return (
		<div className="h-screen relative flex flex-col items-center justify-center">
			<div className="absolute h-screen w-screen overflow-hidden z-[-1]">
				<div className="bg-black w-screen h-screen absolute top-0 left-0 right-0 bottom-0" />
				<Image
					src="/img/discord.jpg"
					layout="fill"
					objectFit="cover"
					className="filter blur-xl brightness-75 transform scale-125"
					quality={20}
				/>
			</div>

			<div className="flex m-20 rounded-2xl overflow-hidden">
				<div className="relative w-[350px] hidden sm:block bg-bfc-base-3">
					<Image
					alt=''
						src="/img/discord.jpg"
						layout="fill"
						objectFit="cover"
						className="h-full"
					/>
				</div>
				<div className="bg-zinc-800 py-6 flex flex-col min-h-[340px] w-[350px]">
					<div className="self-end px-4">
						<Image
						alt=''
							src={`/img/discord-logo.png`}
							layout="intrinsic"
							height={25}
							width={85}
						/>
					</div>
					<div className="px-10">
						<h1 className="text-[22px] text-gray-200 mb-0">
							Welcome to Chateau Interface
						</h1>
						<p className="mt-4 mb-6 text-sm text-gray-200 leading-5">
							Chateau interface is used to manage/interact with the Chateau bot
							directly through a web interface
						</p>
						{/* <span className="font-semibold text-white">Sign in:</span> */}
						<Button
							filled
							className="flex w-max items-center justify-center mt-4"
							onClick={() => signIn('discord')}
						>
							<Image
							alt=''
								src="/img/discord-logo.png"
								height={12}
								width={12}
								className="mr-8"
							/>
							<span className="ml-2">Sign in</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default function Layout({ children }: Props) {
	const { data: session, status } = useSession();
	const router = useRouter();
	if (status === 'loading') return null;
	if (!session) return <LoginView />;

	return (
		<div className="bg-gray-800 overflow-x-hidden">
			<NavBar children={children} links={LINKS} />
		</div>
	);
}
