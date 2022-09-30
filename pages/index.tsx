import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@intility/bifrost-react';
import '@intility/bifrost-react/dist/bifrost-app.css';

const Home: NextPage = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<>
				Not Signed in <br />
				<Button onClick={() => signIn('discord')}>Sign in</Button>
			</>
		);
	}
	return (
		<div>
			Signed in: <br />
			{session.user?.name} <br />
			<Image
				src={session.user!.image!.toString()}
				alt=""
				height={128}
				width={128}
			/>
			<button onClick={() => signOut()}>Sign out</button>
		</div>
	);
};

export default Home;
