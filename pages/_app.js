import '../styles/globals.css'
import {AuthProvider} from "../context/AuthContext"
import Home from "../pages/index"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps}/>
    </AuthProvider>
  )
}

export default MyApp
