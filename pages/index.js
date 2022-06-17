import Head from 'next/head'
import Image from 'next/image'
import { AuthState } from '../AuthContext'
import styles from '../styles/Home.module.css'

export default function Home() {
	const { user } = AuthState()

	return <div className={styles.container}>Finder: {user}</div>
}
