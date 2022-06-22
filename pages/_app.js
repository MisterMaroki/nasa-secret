import AuthContext from '../AuthContext'
import SelectionState from '../SelectionContext'
import toast, { Toaster } from 'react-hot-toast'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthContext>
			<SelectionState>
				<Component {...pageProps} />
				<Toaster />
			</SelectionState>
		</AuthContext>
	)
}

export default MyApp
