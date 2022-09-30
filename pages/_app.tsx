import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeContextProvider } from '../utils/themeContext';
function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<>
			{/*@ts-ignore */}
			<SessionProvider session={pageProps.session}>
				<ThemeContextProvider>
					<QueryClientProvider client={queryClient}>
						<Layout>
							<Component {...pageProps} />, document.getElementbyId('root')
						</Layout>
					</QueryClientProvider>
				</ThemeContextProvider>
			</SessionProvider>
		</>
	);
}

export default MyApp;
