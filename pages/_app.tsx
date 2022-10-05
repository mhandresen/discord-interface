import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<>
			{/*@ts-ignore */}
			<SessionProvider session={pageProps.session}>
				{/* <ThemeContextProvider> */}
				<QueryClientProvider client={queryClient}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</QueryClientProvider>
				{/* </ThemeContextProvider> */}
			</SessionProvider>
		</>
	);
}

export default MyApp;
