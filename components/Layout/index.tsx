import { Button } from '@intility/bifrost-react';
import { signIn, useSession } from 'next-auth/react';
import { ReactNode } from 'react';
import Image from 'next/image';

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

			<div className="flex m-20 rounded overflow-hidden">
				<div className="relative w-[350px] hidden sm:block bg-bfc-base-3">
					<Image
						src="/img/discord.jpg"
						layout="fill"
						objectFit="cover"
						className="h-full"
					/>
				</div>
				<div className="bg-zinc-800 py-6 flex flex-col min-h-[340px] w-[350px]">
					<div className="self-end px-4">
						<Image
							src={`/img/discord-logo.png`}
							layout="intrinsic"
							height={25}
							width={85}
						/>
					</div>
					<div className="px-10">
						<h1 className="text-[22px] mb-0">Welcome to Chateau Interface</h1>
						<p className="mt-4 mb-6 text-sm leading-5">
							Chateau interface is used to manage/interact with the Chateau bot
							directly through a web interface
						</p>
						<span className="font-semibold">Sign in</span>
						<Button
							variant="filled"
							className="flex w-max items-center justify-center mt-4"
							onClick={() => signIn('discord')}
						>
							<Image
								src="/img/discord-logo.png"
								height={12}
								width={12}
								className="mr-8"
							/>
							<span className="ml-2">Discord</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
type Props = {
	children: ReactNode;
};
export default function ({ children }: Props) {
	const { data: session } = useSession();
	if (!session) {
		return <LoginView />;
	}

	return <main>{children}</main>;
}
