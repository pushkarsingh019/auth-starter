import {GoogleOAuthProvider} from "@react-oauth/google"

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="103430813928-7o6l4ntcatedagckts3km9r9lfh0im14.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}

export default MyApp
