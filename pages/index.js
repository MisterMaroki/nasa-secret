import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthState } from '../AuthContext'
import Folder from '../components/Folder'
import styles from '../styles/Auth.module.scss'

const Home = () => {
	const router = useRouter()
	const { user } = AuthState()

	const [selected, setSelected] = useState(null)

	const select = (e, folderName) => {
		e.stopPropagation()
		setSelected(folderName)
	}

	useEffect(() => {
		if (user === null) {
			router.push('/auth')
		}
		const handleClick = (e) => {
			// console.log(e.target.toString())
			setSelected(null)
		}
		window.addEventListener('click', handleClick)
	}, [router, user])

	return (
		user && (
			<div className={styles.container}>
				<Folder
					select={select}
					selected={selected}
					title="NASA"
					route="/folder/nasa"
				/>
				<Folder
					select={select}
					selected={selected}
					title="SpaceX"
					route="/folder/spacex"
				/>
			</div>
		)
	)
}

export default Home
