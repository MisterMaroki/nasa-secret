import AuthContext from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import '../styles/globals.scss'
import SelectionContext from '../context/SelectionContext'
import { Loader } from '../components/Loader'

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthContext>
			<SelectionContext>
				<Loader />
				<Component {...pageProps} />
				<Toaster />
			</SelectionContext>
		</AuthContext>
	)
}

export default MyApp
