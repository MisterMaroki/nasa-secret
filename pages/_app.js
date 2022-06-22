import AuthContext from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import '../styles/globals.scss'
import SelectionContext from '../context/SelectionContext'

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthContext>
			<SelectionContext>
				<Component {...pageProps} />
				<Toaster />
			</SelectionContext>
		</AuthContext>
	)
}

export default MyApp
