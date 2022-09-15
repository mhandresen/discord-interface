import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<>
				Not Signed in <br />
				<button onClick={() => signIn('discord')}>Sign in</button>
			</>
		);
	}
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				Signed in: <br />
				{session.user?.name} <br />
				<Image
					src={session.user!.image!.toString()}
					alt=""
					height={128}
					width={128}
				/>
				<button onClick={() => signOut()}>Sign out</button>
			</main>
		</div>
	);
};

export default Home;
