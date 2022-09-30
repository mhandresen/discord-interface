import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const scope = 'identify guilds';

export default NextAuth({
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
				token.expries = Date.now() + account.expires_at! * 1000;
				token.id = account.id;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.accessToken = token.accessToken;
			}
			return session;
		},
	},
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
			authorization: { params: { scope } },
		}),
	],
});
