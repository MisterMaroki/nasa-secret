import { useEffect, useState } from 'react'
import { AuthState } from '../context/AuthContext'
import { SelectionState } from '../context/SelectionContext'

import Folder from '../components/Folder'
import styles from '../styles/Auth.module.scss'

const Home = () => {
	const { user } = AuthState()
	const { selected, setSelected, select } = SelectionState()

	return (
		user && (
			<div className={styles.container}>
				<Folder
					key="fddg"
					select={select}
					selected={selected}
					title="NASA"
					route="/nasa"
					index={1}
				/>
				<Folder
					key="jkbnj"
					select={select}
					selected={selected}
					title="SpaceX"
					route="/spacex"
					index={2}
				/>
			</div>
		)
	)
}

export default Home
