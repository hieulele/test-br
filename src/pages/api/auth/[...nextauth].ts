import NextAuth, { CallbacksOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { scopes, spotifyApi } from '../../../config/spotify'
import { ExtendedToken, TokenError } from '../../../types'


const jwtCallback : CallbacksOptions['jwt'] = async ({
	token,
	account,
	user
}) => { 
	console.log('token', token);
	return token;
}
export default NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
			// Hỏi Spotify quyền được làm việc vs tài khoản của người dùng
			authorization: {
				url: 'https://accounts.spotify.com/authorize',
				params: {
					scope: scopes  // Các actions mà mk có thể lm vs tk của người dùng
				}
			}
		})
	],

	//
	pages: {
		signIn: '/login'
	},
	callbacks: {
		jwt: jwtCallback,
	}
})
