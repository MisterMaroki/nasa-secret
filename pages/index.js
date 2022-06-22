import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthState } from '../AuthContext'
import { SelectionState } from '../SelectionContext'

import Folder from '../components/Folder'
import styles from '../styles/Auth.module.scss'

const Home = () => {
	const router = useRouter()
	const { user } = AuthState()
	const { selected, setSelected, select } = SelectionState()

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
					route="/nasa"
				/>
				<Folder
					select={select}
					selected={selected}
					title="SpaceX"
					route="/spacex"
				/>
			</div>
		)
	)
}

export default Home
