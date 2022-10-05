import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import LogOutIcon from '../../public/icons/LogOut';
import GitHubIcon from '../../public/icons/Github';

type Props = {
	children: ReactNode;
	links: {
		name: string;
		path: string;
	}[];
};

export default function NavBar({ children, links }: Props) {
	const router = useRouter();
	const { data: session } = useSession();
	return (
		// <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 items-center dark:bg-gray-900 max-h-20 overflow-hidden">
		// 	<div className="container flex flex-wrap justify-between items-center mx-auto">
		// 		<a href="/" className="flex items-center">
		// 			<Image src={'/img/discord-logo.png'} width={50} height={50} />
		// 			<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-500">
		// 				Chateau Interface
		// 			</span>
		// 		</a>
		// 		<div className="hidden w-full md:block md:w-auto">
		// 			<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md-space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
		// 				{links.map((link) => (
		// 					<li key={link.path} className="px-4">
		// 						<a
		// 							href={`${link.path}`}
		// 							className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
		// 						>
		// 							{link.name}
		// 						</a>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		</div>
		// 	</div>
		// 	<main className="max-w-6xl mx-auto px-3 py-3 md:py-20">{children}</main>
		// </nav>
		<>
			<nav className="flex pl-4 border-b border-gray-700 md:shadow-lg items-center relative">
				<div className="text-lg font-bold md:py-0 p-4 text-white">Logo</div>
				<div className="text-lg border-l border-gray-700 font-bold md:py-0 p-4 text-gray-500">
					Chateau interface
				</div>
				<ul className="md:px-2 ml-auto md:flex md:space-2 absolute md:relative top-full left-0 right-0">
					{links.map((link) => {
						return (
							<li
								className={cx(
									'text-gray-500 hover:text-gray-600 border-l border-gray-700',
									router.pathname == link.path && 'underline'
								)}
							>
								<a
									href={link.path}
									className="flex md:inline-flex p-4 items-center"
								>
									<span>{link.name}</span>
								</a>
							</li>
						);
					})}
					<li>
						<a
							href="/user"
							className="flex md:inline-flex p-4 items-center border-l border-gray-700"
						>
							<Image
								className="rounded-full"
								src={session!.user!.image!.toString()}
								width={28}
								height={28}
							/>
						</a>
					</li>
					<li className="text-gray-500 hover:text-gray-600 border-l border-gray-700">
						<a
							href="https://github.com/mhandresen/discord-interface/issues"
							target="_blank"
							className="flex md:inline-flex p-4 items-center"
						>
							<span>
								<GitHubIcon />
							</span>
						</a>
					</li>
					<li className="text-gray-500 hover:text-gray-600 border-l border-gray-700">
						<button
							className="flex md:inline-flex py-4 pl-4 pr-2 items-center"
							onClick={() => signOut()}
						>
							<span className="">
								<LogOutIcon />
							</span>
						</button>
					</li>
				</ul>
			</nav>
			<main>
				<div className="max-w-6xl mx-auto px-3 py-3 md:py-20 drop-shadow-sm">
					{children}
				</div>
			</main>
		</>
	);
}
