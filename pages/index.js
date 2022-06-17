import Head from 'next/head'
import Image from 'next/image'
import { AuthState } from '../AuthContext'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
	const { user } = AuthState()

	if (user === null) console.log('first')

	return user && <div className={styles.container}>Finder: {user}</div>
}
