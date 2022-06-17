import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthState } from '../AuthContext'
import Folder from '../components/Folder'
import styles from '../styles/Home.module.scss'

const Home = () => {
	const router = useRouter()
	const { user } = AuthState()

	useEffect(() => {
		if (user === null) {
			router.push('/auth')
		}
	}, [router, user])

	return (
		user && (
			<div className={styles.container}>
				<Folder />
			</div>
		)
	)
}

export default Home
